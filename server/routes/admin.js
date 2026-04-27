import { Router } from 'express'
import { getAllOrders, updateOrderStatus } from '../controllers/orderController.js'
import { protect, adminOnly } from '../middleware/auth.js'

const router = Router()

router.get('/orders', protect, adminOnly, getAllOrders)
router.patch('/orders/:id/status', protect, adminOnly, updateOrderStatus)

export default router
