import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const protect = async (req, res, next) => {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer '))
    return res.status(401).json({ message: 'Not authenticated' })

  const token = header.split(' ')[1]

  let decoded
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    const msg = err.name === 'TokenExpiredError'
      ? 'Session expired, please log in again'
      : 'Invalid token'
    return res.status(401).json({ message: msg })
  }

  req.user = await User.findById(decoded.id).select('-password')
  if (!req.user)
    return res.status(401).json({ message: 'User not found' })

  next()
}

export const adminOnly = (req, res, next) => {
  if (req.user?.role !== 'admin')
    return res.status(403).json({ message: 'Admin access required' })
  next()
}
