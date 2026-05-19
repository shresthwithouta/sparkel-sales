import Cart from '../models/Cart.js'
import Product from '../models/Product.js'

export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
    res.json({ items: cart ? cart.items : [] })
  } catch (err) {
    next(err)
  }
}

export const addToCart = async (req, res, next) => {
  try {
    const { slug, quantity = 1, image } = req.body
    if (!slug)
      return res.status(400).json({ message: 'slug is required' })

    const qty = Math.max(1, parseInt(quantity) || 1)

    // Always fetch price and name from DB — never trust the frontend
    const product = await Product.findOne({ slug }).select('slug name price').lean()
    if (!product)
      return res.status(404).json({ message: 'Product not found' })

    // Atomic upsert to prevent race condition on cart creation
    let cart = await Cart.findOneAndUpdate(
      { user: req.user._id },
      { $setOnInsert: { user: req.user._id, items: [] } },
      { upsert: true, returnDocument: 'after' }
    )

    const existing = cart.items.find(i => i.slug === slug)
    if (existing) {
      existing.quantity += qty
    } else {
      cart.items.push({ slug: product.slug, name: product.name, price: product.price, quantity: qty, image })
    }

    await cart.save()
    res.json({ items: cart.items })
  } catch (err) {
    next(err)
  }
}

export const updateCartItem = async (req, res, next) => {
  try {
    const { quantity } = req.body
    if (!quantity || quantity < 1)
      return res.status(400).json({ message: 'quantity must be at least 1' })

    const cart = await Cart.findOne({ user: req.user._id })
    if (!cart) return res.status(404).json({ message: 'Cart not found' })

    const item = cart.items.find(i => i.slug === req.params.slug)
    if (!item) return res.status(404).json({ message: 'Item not in cart' })

    item.quantity = quantity
    await cart.save()
    res.json({ items: cart.items })
  } catch (err) {
    next(err)
  }
}

export const removeFromCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
    if (!cart) return res.status(404).json({ message: 'Cart not found' })

    const before = cart.items.length
    cart.items = cart.items.filter(i => i.slug !== req.params.slug)
    if (cart.items.length === before)
      return res.status(404).json({ message: 'Item not in cart' })

    await cart.save()
    res.json({ items: cart.items })
  } catch (err) {
    next(err)
  }
}

export const clearCart = async (req, res, next) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id })
    res.json({ message: 'Cart cleared' })
  } catch (err) {
    next(err)
  }
}
