import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
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

// validate required env vars before anything else
const required = ['MONGO_URI', 'JWT_SECRET']
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`)
    process.exit(1)
  }
}

const app = express()
const port = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// security middlewares
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }))
app.use(express.json())
// express-mongo-sanitize can't reassign req.query in Express 5 (read-only getter)
// so we manually sanitize only req.body
app.use((req, res, next) => {
  if (req.body) req.body = mongoSanitize.sanitize(req.body)
  next()
})

// rate limit auth routes — 20 requests per 15 minutes per IP
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests, please try again later' },
})

// routes
app.use('/api/auth', authLimiter, authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)
app.use('/api/inquiries', inquiryRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/wishlist', wishlistRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/settings', settingsRoutes)
app.use('/api/upload', uploadRoutes)

// global error handler — returns JSON instead of HTML for all unhandled errors
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({ message: err.message || 'Internal server error' })
})

app.listen(port, () => {
  console.log('================================')
  console.log(`  Sparkel Sales API`)
  console.log(`  Running on http://localhost:${port}`)
  console.log('================================')
})
