import Product from '../models/Product.js'
import { cache } from '../utils/cache.js'

export const getProducts = async (req, res) => {
  const cacheKey = `products:${JSON.stringify(req.query)}`
  const cached = cache.get(cacheKey)
  if (cached) {
    return res.json(cached)
  }

  const filter = {}
  if (req.query.category) filter.category = req.query.category
  if (req.query.featured === 'true') filter.featured = true

  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(100, parseInt(req.query.limit) || 20)
  const skip = (page - 1) * limit

  const [products, total] = await Promise.all([
    Product.find(filter).lean().sort({ createdAt: -1 }).skip(skip).limit(limit),
    Product.countDocuments(filter),
  ])

  const responseData = { products, total, page, pages: Math.ceil(total / limit) }
  cache.set(cacheKey, responseData)
  res.json(responseData)
}

export const searchProducts = async (req, res) => {
  const cacheKey = `search:${JSON.stringify(req.query)}`
  const cached = cache.get(cacheKey)
  if (cached) {
    return res.json(cached)
  }

  const { q } = req.query
  if (!q || typeof q !== 'string' || !q.trim())
    return res.status(400).json({ message: 'Search query q is required' })

  // escape regex special chars to prevent ReDoS
  const escaped = q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(100, parseInt(req.query.limit) || 20)
  const skip = (page - 1) * limit

  const filter = {
    $or: [
      { name: { $regex: escaped, $options: 'i' } },
      { description: { $regex: escaped, $options: 'i' } },
      { category: { $regex: escaped, $options: 'i' } },
    ],
  }

  const [products, total] = await Promise.all([
    Product.find(filter).lean().sort({ createdAt: -1 }).skip(skip).limit(limit),
    Product.countDocuments(filter),
  ])

  const responseData = { products, total, page, pages: Math.ceil(total / limit) }
  cache.set(cacheKey, responseData)
  res.json(responseData)
}

export const getProductBySlug = async (req, res) => {
  const cacheKey = `product:slug:${req.params.slug}`
  const cached = cache.get(cacheKey)
  if (cached) {
    return res.json(cached)
  }

  const product = await Product.findOne({ slug: req.params.slug }).lean()
  if (!product) return res.status(404).json({ message: 'Product not found' })
  
  const responseData = { product }
  cache.set(cacheKey, responseData)
  res.json(responseData)
}

export const createProduct = async (req, res) => {
  const { name, slug, category, price, description, specs, images, featured, inStock } = req.body
  if (!name || !slug || !category || !price)
    return res.status(400).json({ message: 'name, slug, category and price are required' })
  if (!/^[a-z0-9-]+$/.test(slug))
    return res.status(400).json({ message: 'Slug must contain only lowercase letters, numbers and hyphens' })

  const existing = await Product.findOne({ slug })
  if (existing) return res.status(409).json({ message: 'Slug already exists' })

  const product = await Product.create({ name, slug, category, price, description, specs, images, featured, inStock })
  
  // Invalidate cache on mutations
  cache.clear()
  
  res.status(201).json({ product })
}

export const updateProduct = async (req, res) => {
  const { name, slug, category, price, description, specs, images, featured, inStock } = req.body
  const updates = { name, slug, category, price, description, specs, images, featured, inStock }
  Object.keys(updates).forEach(k => updates[k] === undefined && delete updates[k])

  const product = await Product.findOneAndUpdate(
    { slug: req.params.slug },
    updates,
    { returnDocument: 'after', runValidators: true }
  )
  if (!product) return res.status(404).json({ message: 'Product not found' })

  // Invalidate cache on mutations
  cache.clear()

  res.json({ product })
}

export const deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({ slug: req.params.slug })
  if (!product) return res.status(404).json({ message: 'Product not found' })

  // Invalidate cache on mutations
  cache.clear()

  res.json({ message: 'Product deleted' })
}
