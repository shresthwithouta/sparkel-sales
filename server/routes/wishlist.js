import { Router } from 'express'
import { getWishlist, addToWishlist, removeFromWishlist, clearWishlist } from '../controllers/wishlistController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

router.get('/', protect, getWishlist)
router.post('/', protect, addToWishlist)
router.delete('/clear', protect, clearWishlist)
router.delete('/:slug', protect, removeFromWishlist)

export default router
