import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
  slug:     { type: String, required: true },
  name:     { type: String, required: true },
  price:    { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  image:    { type: String },
}, { _id: false })

const shippingSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  phone:   { type: String, required: true },
  address: { type: String, required: true },
  city:    { type: String },
  state:   { type: String },
  zipCode: { type: String },
  country: { type: String },
}, { _id: false })

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items:         { type: [orderItemSchema], required: true },
  shipping:      { type: shippingSchema, required: true },
  paymentMethod: { type: String, enum: ['qr', 'cod'], required: true },
  total:         { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
}, { timestamps: true })

export default mongoose.model('Order', orderSchema)
