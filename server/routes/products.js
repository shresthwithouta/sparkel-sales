import { Router } from 'express'
import { getProducts, searchProducts, getProductBySlug, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = Router()

router.get('/', getProducts)
router.get('/search', searchProducts)
router.get('/:slug', getProductBySlug)
router.post('/', protect, adminOnly, createProduct)
router.put('/:slug', protect, adminOnly, updateProduct)
router.delete('/:slug', protect, adminOnly, deleteProduct)

export default router
