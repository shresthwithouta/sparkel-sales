import express from 'express'
import cors from 'cors'
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

const app = express()
const port = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/products', productRoutes)
app.use('/api/inquiries', inquiryRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/wishlist', wishlistRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/settings', settingsRoutes)

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