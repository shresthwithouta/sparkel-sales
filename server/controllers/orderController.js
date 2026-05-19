import Order from '../models/Order.js'
import Product from '../models/Product.js'
import { sendOrderConfirmation, sendOrderStatusUpdate } from '../utils/email.js'

export const placeOrder = async (req, res, next) => {
  try {
    const { items, shipping, paymentMethod } = req.body

    if (!items?.length)
      return res.status(400).json({ message: 'Order must have at least one item' })
    if (!shipping?.name || !shipping?.email || !shipping?.phone || !shipping?.address)
      return res.status(400).json({ message: 'Shipping name, email, phone and address are required' })
    if (!paymentMethod)
      return res.status(400).json({ message: 'Payment method is required' })

    // fetch DB prices — never trust frontend total
    const slugs = items.map(i => i.slug)
    const products = await Product.find({ slug: { $in: slugs } }).select('slug price name')

    const priceMap = Object.fromEntries(products.map(p => [p.slug, p.price]))
    const resolvedItems = []
    let total = 0

    for (const item of items) {
      const dbPrice = priceMap[item.slug]
      if (dbPrice === undefined)
        return res.status(400).json({ message: `Product not found: ${item.slug}` })
      const qty = Math.max(1, parseInt(item.quantity) || 1)
      resolvedItems.push({ slug: item.slug, name: item.name, price: dbPrice, quantity: qty, image: item.image })
      total += dbPrice * qty
    }

    const order = await Order.create({
      ...(req.user?._id && { user: req.user._id }),
      items: resolvedItems,
      shipping,
      paymentMethod,
      total,
    })

    sendOrderConfirmation({
      to: shipping.email,
      name: shipping.name,
      orderId: order._id,
      items: resolvedItems,
      total,
      paymentMethod,
    }).catch(err => console.error('[Email] Order confirmation failed:', err))

    res.status(201).json({ order })
  } catch (err) {
    next(err)
  }
}

export const getMyOrders = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const limit = Math.min(50, parseInt(req.query.limit) || 10)
    const skip = (page - 1) * limit

    const [orders, total] = await Promise.all([
      Order.find({ user: req.user._id }).lean().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Order.countDocuments({ user: req.user._id }),
    ])

    res.json({ orders, total, page, pages: Math.ceil(total / limit) })
  } catch (err) {
    next(err)
  }
}

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findOne({ _id: req.params.id, user: req.user._id })
    if (!order) return res.status(404).json({ message: 'Order not found' })
    res.json({ order })
  } catch (err) {
    next(err)
  }
}

export const getAllOrders = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const limit = Math.min(100, parseInt(req.query.limit) || 20)
    const skip = (page - 1) * limit

    const [orders, total] = await Promise.all([
      Order.find().populate('user', 'name email').sort({ createdAt: -1 }).skip(skip).limit(limit),
      Order.countDocuments(),
    ])

    res.json({ orders, total, page, pages: Math.ceil(total / limit) })
  } catch (err) {
    next(err)
  }
}

const STATUS_TRANSITIONS = {
  pending:   ['confirmed', 'cancelled'],
  confirmed: ['pending', 'shipped', 'cancelled'],
  shipped:   ['delivered', 'cancelled'],
  delivered: [],
  cancelled: [],
}

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body
    if (!status) return res.status(400).json({ message: 'status is required' })

    const order = await Order.findById(req.params.id).populate('user', 'name email')
    if (!order) return res.status(404).json({ message: 'Order not found' })

    const allowed = STATUS_TRANSITIONS[order.status] || []
    if (!allowed.includes(status))
      return res.status(400).json({ message: `Cannot transition from '${order.status}' to '${status}'` })

    order.status = status
    await order.save()

    if (order.user?.email) {
      sendOrderStatusUpdate({
        to: order.user.email,
        name: order.user.name,
        orderId: order._id,
        status,
      }).catch(err => console.error('[Email] Order status update failed:', err))
    }

    res.json({ order })
  } catch (err) {
    next(err)
  }
}
