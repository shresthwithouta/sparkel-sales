import { uploadToCloudinary } from '../utils/cloudinary.js'

export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' })

    const result = await uploadToCloudinary(req.file.buffer)
    res.json({ url: result.secure_url, publicId: result.public_id })
  } catch (err) {
    next(err)
  }
}
