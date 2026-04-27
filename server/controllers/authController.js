import jwt from 'jsonwebtoken'
import { OAuth2Client } from 'google-auth-library'
import User from '../models/User.js'

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' })

export const register = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password)
    return res.status(400).json({ message: 'All fields are required' })

  if (password.length < 6)
    return res.status(400).json({ message: 'Password must be at least 6 characters' })

  const existing = await User.findOne({ email })
  if (existing)
    return res.status(409).json({ message: 'Email already registered' })

  const user = await User.create({ name, email, password })
  const token = signToken(user._id)

  res.status(201).json({ token, user })
}

export const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required' })

  const user = await User.findOne({ email })
  if (!user)
    return res.status(401).json({ message: 'Invalid credentials' })

  const match = await user.comparePassword(password)
  if (!match)
    return res.status(401).json({ message: 'Invalid credentials' })

  const token = signToken(user._id)
  res.json({ token, user })
}

export const googleAuth = async (req, res) => {
  const idToken = req.body.token || req.body.idToken
  if (!idToken)
    return res.status(400).json({ message: 'Google ID token is required' })

  const ticket = await googleClient.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  })
  const { sub: googleId, email, name, picture } = ticket.getPayload()

  let user = await User.findOne({ googleId })

  if (!user) {
    user = await User.findOne({ email })
    if (user) {
      user.googleId = googleId
      await user.save()
    } else {
      user = await User.create({ name, email, googleId, avatar: picture })
    }
  }

  const token = signToken(user._id)
  res.json({ token, user })
}

export const getMe = (req, res) => {
  res.json({ user: req.user })
}

export const updateMe = async (req, res) => {
  const { name, email } = req.body

  if (email && email !== req.user.email) {
    const existing = await User.findOne({ email })
    if (existing) return res.status(409).json({ message: 'Email already in use' })
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    { ...(name && { name }), ...(email && { email }) },
    { new: true, runValidators: true }
  )
  res.json({ user })
}
