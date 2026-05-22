import Category from '../models/Category.js'
import Product from '../models/Product.js'
import { cache } from '../utils/cache.js'

export const getCategories = async (req, res, next) => {
  try {
    const cacheKey = 'categories:all'
    const cached = cache.get(cacheKey)
    if (cached) {
      return res.json(cached)
    }

    const categories = await Category.find().sort({ name: 1 })
    const responseData = { categories }
    cache.set(cacheKey, responseData)
    res.json(responseData)
  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req, res, next) => {
  try {
    const { name, slug, icon, description } = req.body
    if (!name || !slug)
      return res.status(400).json({ message: 'name and slug are required' })
    if (!/^[a-z0-9-]+$/.test(slug))
      return res.status(400).json({ message: 'Slug must contain only lowercase letters, numbers and hyphens' })

    const existing = await Category.findOne({ slug })
    if (existing) return res.status(409).json({ message: 'Slug already exists' })

    const category = await Category.create({ name, slug, icon, description })
    
    // Invalidate cache on mutations
    cache.clear()
    
    res.status(201).json({ category })
  } catch (error) {
    next(error)
  }
}

export const updateCategory = async (req, res, next) => {
  try {
    const { name, slug, icon, description } = req.body
    const updates = { name, slug, icon, description }
    Object.keys(updates).forEach(k => updates[k] === undefined && delete updates[k])

    if (updates.slug && updates.slug !== req.params.slug) {
      const existing = await Category.findOne({ slug: updates.slug })
      if (existing) return res.status(409).json({ message: 'Slug already exists' })
    }

    const category = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      updates,
      { returnDocument: 'after', runValidators: true }
    )
    if (!category) return res.status(404).json({ message: 'Category not found' })
    
    // Invalidate cache on mutations
    cache.clear()
    
    res.json({ category })
  } catch (error) {
    next(error)
  }
}

export const deleteCategory = async (req, res, next) => {
  try {
    const productCount = await Product.countDocuments({ category: req.params.slug })
    if (productCount > 0) {
      return res.status(400).json({ message: 'Cannot delete category containing products. Move or delete the products first.' })
    }
    const category = await Category.findOneAndDelete({ slug: req.params.slug })
    if (!category) return res.status(404).json({ message: 'Category not found' })
    
    // Invalidate cache on mutations
    cache.clear()
    
    res.json({ message: 'Category deleted' })
  } catch (error) {
    next(error)
  }
}
