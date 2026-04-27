import Wishlist from '../models/Wishlist.js'

export const getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id })
  res.json({ items: wishlist ? wishlist.items : [] })
}

export const addToWishlist = async (req, res) => {
  const { slug, name, price, image } = req.body
  if (!slug || !name || price == null)
    return res.status(400).json({ message: 'slug, name and price are required' })

  let wishlist = await Wishlist.findOne({ user: req.user._id })
  if (!wishlist) {
    wishlist = await Wishlist.create({ user: req.user._id, items: [{ slug, name, price, image }] })
    return res.status(201).json({ items: wishlist.items })
  }

  const exists = wishlist.items.some(item => item.slug === slug)
  if (exists) return res.status(409).json({ message: 'Product already in wishlist' })

  wishlist.items.push({ slug, name, price, image })
  await wishlist.save()
  res.json({ items: wishlist.items })
}

export const removeFromWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id })
  if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' })

  const before = wishlist.items.length
  wishlist.items = wishlist.items.filter(item => item.slug !== req.params.slug)
  if (wishlist.items.length === before)
    return res.status(404).json({ message: 'Product not in wishlist' })

  await wishlist.save()
  res.json({ items: wishlist.items })
}

export const clearWishlist = async (req, res) => {
  await Wishlist.findOneAndDelete({ user: req.user._id })
  res.json({ message: 'Wishlist cleared' })
}
