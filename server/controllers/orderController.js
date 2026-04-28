import Order from '../models/Order.js'

export const placeOrder = async (req, res) => {
  const { items, shipping, paymentMethod, total } = req.body

  if (!items?.length)
    return res.status(400).json({ message: 'Order must have at least one item' })
  if (!shipping?.name || !shipping?.email || !shipping?.phone || !shipping?.address)
    return res.status(400).json({ message: 'Shipping name, email, phone and address are required' })
  if (!paymentMethod)
    return res.status(400).json({ message: 'Payment method is required' })

  const order = await Order.create({
    user: req.user._id,
    items,
    shipping,
    paymentMethod,
    total,
  })

  res.status(201).json({ order })
}

export const getMyOrders = async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(50, parseInt(req.query.limit) || 10)
  const skip = (page - 1) * limit

  const [orders, total] = await Promise.all([
    Order.find({ user: req.user._id }).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Order.countDocuments({ user: req.user._id }),
  ])

  res.json({ orders, total, page, pages: Math.ceil(total / limit) })
}

export const getOrderById = async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id, user: req.user._id })
  if (!order) return res.status(404).json({ message: 'Order not found' })
  res.json({ order })
}

export const getAllOrders = async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(100, parseInt(req.query.limit) || 20)
  const skip = (page - 1) * limit

  const [orders, total] = await Promise.all([
    Order.find().populate('user', 'name email').sort({ createdAt: -1 }).skip(skip).limit(limit),
    Order.countDocuments(),
  ])

  res.json({ orders, total, page, pages: Math.ceil(total / limit) })
}

export const updateOrderStatus = async (req, res) => {
  const { status } = req.body
  if (!status) return res.status(400).json({ message: 'status is required' })

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  )
  if (!order) return res.status(404).json({ message: 'Order not found' })
  res.json({ order })
}
