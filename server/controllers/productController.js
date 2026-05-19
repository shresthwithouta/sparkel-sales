import Product from '../models/Product.js'

export const getProducts = async (req, res, next) => {
  try {
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

    res.json({ products, total, page, pages: Math.ceil(total / limit) })
  } catch (err) {
    next(err)
  }
}

export const searchProducts = async (req, res, next) => {
  try {
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

    res.json({ products, total, page, pages: Math.ceil(total / limit) })
  } catch (err) {
    next(err)
  }
}

export const getProductBySlug = async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).lean()
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json({ product })
  } catch (err) {
    next(err)
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const { name, slug, category, price, description, specs, images, featured, inStock } = req.body
    if (!name || !slug || !category || !price)
      return res.status(400).json({ message: 'name, slug, category and price are required' })
    if (!/^[a-z0-9-]+$/.test(slug))
      return res.status(400).json({ message: 'Slug must contain only lowercase letters, numbers and hyphens' })

    const existing = await Product.findOne({ slug })
    if (existing) return res.status(409).json({ message: 'Slug already exists' })

    const product = await Product.create({ name, slug, category, price, description, specs, images, featured, inStock })
    res.status(201).json({ product })
  } catch (err) {
    next(err)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const { name, slug, category, price, description, specs, images, featured, inStock } = req.body
    const updates = { name, slug, category, price, description, specs, images, featured, inStock }
    Object.keys(updates).forEach(k => updates[k] === undefined && delete updates[k])

    const product = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      updates,
      { returnDocument: 'after', runValidators: true }
    )
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json({ product })
  } catch (err) {
    next(err)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findOneAndDelete({ slug: req.params.slug })
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json({ message: 'Product deleted' })
  } catch (err) {
    next(err)
  }
}
