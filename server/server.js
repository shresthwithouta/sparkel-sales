import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import mongoSanitize from 'express-mongo-sanitize'
import rateLimit from 'express-rate-limit'
import mongoose from 'mongoose'
import 'dotenv/config'
import authRoutes from './routes/auth.js'
import categoryRoutes from './routes/categories.js'
import productRoutes from './routes/products.js'
import inquiryRoutes from './routes/inquiries.js'
import orderRoutes from './routes/orders.js'
import adminRoutes from './routes/admin.js'
import wishlistRoutes from './routes/wishlist.js'
import jobRoutes from './routes/jobs.js'
import settingsRoutes from './routes/settings.js'
import uploadRoutes from './routes/upload.js'
import cartRoutes from './routes/cart.js'
import qrPaymentRoutes from './routes/qrPayments.js'
import analyticsRoutes from './routes/analytics.js'

// validate required env vars before anything else
const required = ['MONGO_URI', 'JWT_SECRET', 'CLOUDINARY_URL', 'GOOGLE_CLIENT_ID']
const missing = required.filter(key => !process.env[key])
if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`)
  // process.exit crashes Vercel serverless functions — only exit in local dev
  if (!process.env.VERCEL) process.exit(1)
}
if (!process.env.ADMIN_EMAIL) {
  console.warn('[Warning] ADMIN_EMAIL is not set — admin inquiry/order notifications will not be sent')
}

const app = express()
const port = process.env.PORT || 4000

// database connection middleware for serverless robustness
app.use(async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
      });
      console.log('MongoDB connected');
    }
    next();
  } catch (err) {
    console.error('MongoDB connection error in middleware:', err);
    res.status(500).json({ message: 'Database connection failed. Please try again.' });
  }
});

// security middlewares
app.use(helmet())
app.use(compression())
const clientOrigin = (process.env.CLIENT_URL || 'http://localhost:3000').replace(/\/$/, '')
const allowedOrigins = [
  clientOrigin,
  'https://spark-innovations.vercel.app',
  'https://sparkel-sales.vercel.app',
  'https://sparkel-sales-server.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001'
]
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400,
}))
app.options('*', cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
// express-mongo-sanitize can't reassign req.query in Express 5 (read-only getter)
// so we manually sanitize only req.body
app.use((req, res, next) => {
  if (req.body) req.body = mongoSanitize.sanitize(req.body)
  next()
})

const limiterDefaults = { standardHeaders: true, legacyHeaders: false, message: { message: 'Too many requests, please try again later' } }

// auth — 20 req / 15 min (login, register, google)
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, ...limiterDefaults })
// product search — 30 req / min
const searchLimiter = rateLimit({ windowMs: 60 * 1000, max: 30, ...limiterDefaults })
// routes
app.use('/api/auth', authLimiter, authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/products/search', searchLimiter)
app.use('/api/products', productRoutes)
app.use('/api/inquiries', inquiryRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/wishlist', wishlistRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/settings', settingsRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/qr-payments', qrPaymentRoutes)
app.use('/api/analytics', analyticsRoutes)

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.path} not found` })
})

// global error handler — returns JSON instead of HTML for all unhandled errors
app.use((err, req, res, next) => {
  console.error(err.stack)

  // Mongoose validation error — extract readable messages
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message)
    return res.status(400).json({ message: messages.join(', ') })
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || 'field'
    return res.status(409).json({ message: `${field} already exists` })
  }

  res.status(err.status || 500).json({ message: err.message || 'Internal server error' })
})

// Only bind a port when running locally; Vercel handles the port in serverless mode
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log('================================')
    console.log(`  Spark Innovations API`)
    console.log(`  Running on http://localhost:${port}`)
    console.log('================================')
  })
}

export default app

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err)
})
