import { Router } from 'express'
import multer from 'multer'
import { protect, adminOnly } from '../middleware/auth.js'
import { uploadImage } from '../controllers/uploadController.js'

const router = Router()

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'))
    }
    cb(null, true)
  },
})

router.post('/', protect, adminOnly, upload.single('image'), uploadImage)

export default router
