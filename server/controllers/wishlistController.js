import Wishlist from '../models/Wishlist.js'
import Product from '../models/Product.js'

export const getWishlist = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id })
    res.json({ items: wishlist ? wishlist.items : [] })
  } catch (err) {
    next(err)
  }
}

export const addToWishlist = async (req, res, next) => {
  try {
    const { slug, image } = req.body
    if (!slug)
      return res.status(400).json({ message: 'slug is required' })

    // Always fetch price and name from DB — never trust the frontend
    const product = await Product.findOne({ slug }).select('slug name price').lean()
    if (!product)
      return res.status(404).json({ message: 'Product not found' })

    // Atomic upsert to prevent race condition on wishlist creation
    let wishlist = await Wishlist.findOneAndUpdate(
      { user: req.user._id },
      { $setOnInsert: { user: req.user._id, items: [] } },
      { upsert: true, returnDocument: 'after' }
    )

    const exists = wishlist.items.some(item => item.slug === slug)
    if (exists) return res.status(409).json({ message: 'Product already in wishlist' })

    wishlist.items.push({ slug: product.slug, name: product.name, price: product.price, image })
    await wishlist.save()
    res.json({ items: wishlist.items })
  } catch (err) {
    next(err)
  }
}

export const removeFromWishlist = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id })
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' })

    const before = wishlist.items.length
    wishlist.items = wishlist.items.filter(item => item.slug !== req.params.slug)
    if (wishlist.items.length === before)
      return res.status(404).json({ message: 'Product not in wishlist' })

    await wishlist.save()
    res.json({ items: wishlist.items })
  } catch (err) {
    next(err)
  }
}

export const clearWishlist = async (req, res, next) => {
  try {
    await Wishlist.findOneAndDelete({ user: req.user._id })
    res.json({ message: 'Wishlist cleared' })
  } catch (err) {
    next(err)
  }
}
