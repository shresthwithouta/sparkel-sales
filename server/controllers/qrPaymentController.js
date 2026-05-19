import QrPayment from '../models/QrPayment.js'
import Order from '../models/Order.js'

// User submits payment proof after scanning QR
export const submitPayment = async (req, res, next) => {
  try {
    const { orderId, screenshot, senderPhone, senderUpi, amount } = req.body

    if (!orderId || !screenshot || !senderPhone || !senderUpi || !amount)
      return res.status(400).json({ message: 'All payment fields are required' })

    const order = await Order.findOne({ _id: orderId, user: req.user._id })
    if (!order) return res.status(404).json({ message: 'Order not found' })
    if (order.paymentMethod !== 'qr')
      return res.status(400).json({ message: 'This order does not use QR payment' })

    // Prevent duplicate submissions
    const existing = await QrPayment.findOne({ order: orderId })
    if (existing)
      return res.status(400).json({ message: 'Payment proof already submitted for this order' })

    const payment = await QrPayment.create({
      user: req.user._id,
      order: orderId,
      screenshot,
      senderPhone,
      senderUpi,
      amount,
    })

    res.status(201).json({ payment })
  } catch (err) {
    next(err)
  }
}

// User views their own payments
export const getMyPayments = async (req, res, next) => {
  try {
    const payments = await QrPayment.find({ user: req.user._id })
      .populate('order', 'items total status createdAt')
      .sort({ createdAt: -1 })
      .lean()

    res.json({ payments })
  } catch (err) {
    next(err)
  }
}

// Admin gets all payments (with filters)
export const getAllPayments = async (req, res, next) => {
  try {
    const filter = {}
    if (req.query.status) filter.status = req.query.status

    const payments = await QrPayment.find(filter)
      .populate('user', 'name email phone')
      .populate('order', 'items total status shipping createdAt')
      .sort({ createdAt: -1 })
      .lean()

    res.json({ payments })
  } catch (err) {
    next(err)
  }
}

// Admin accepts or declines a payment
export const updatePaymentStatus = async (req, res, next) => {
  try {
    const { status, adminNote } = req.body
    if (!status || !['accepted', 'declined'].includes(status))
      return res.status(400).json({ message: 'Status must be accepted or declined' })

    const payment = await QrPayment.findById(req.params.id)
    if (!payment) return res.status(404).json({ message: 'Payment not found' })

    payment.status = status
    if (adminNote) payment.adminNote = adminNote
    await payment.save()

    // If accepted, confirm the order automatically
    if (status === 'accepted') {
      await Order.findByIdAndUpdate(payment.order, { status: 'confirmed' })
    }

    const updated = await QrPayment.findById(payment._id)
      .populate('user', 'name email phone')
      .populate('order', 'items total status shipping createdAt')
      .lean()

    res.json({ payment: updated })
  } catch (err) {
    next(err)
  }
}
