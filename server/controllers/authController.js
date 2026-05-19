import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { OAuth2Client } from 'google-auth-library'
import User from '../models/User.js'

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' })

export const register = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' })

    const user = await User.findOne({ email })
    if (!user || !user.password)
      return res.status(401).json({ message: 'Invalid credentials' })

    const match = await user.comparePassword(password)
    if (!match)
      return res.status(401).json({ message: 'Invalid credentials' })

    const token = signToken(user._id)
    res.json({ token, user })
  } catch (err) {
    next(err)
  }
}

export const googleAuth = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err)
  }
}

export const getMe = (req, res) => {
  res.json({ user: req.user })
}

export const updateProfile = async (req, res, next) => {
  try {
    const { name, email, phone, address } = req.body

    if (email && email !== req.user.email) {
      const existing = await User.findOne({ email })
      if (existing) return res.status(409).json({ message: 'Email already in use' })
    }

    const updates = {}
    if (name !== undefined) updates.name = name
    if (email !== undefined) updates.email = email
    if (phone !== undefined) updates.phone = phone
    if (address && typeof address === 'object') {
      for (const [key, val] of Object.entries(address)) {
        if (val !== undefined) updates[`address.${key}`] = val
      }
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { returnDocument: 'after', runValidators: true }
    )
    res.json({ user })
  } catch (err) {
    next(err)
  }
}

export const updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword)
      return res.status(400).json({ message: 'Current and new password are required' })

    if (newPassword.length < 6)
      return res.status(400).json({ message: 'New password must be at least 6 characters' })

    const user = await User.findById(req.user._id)
    if (!user.password)
      return res.status(400).json({ message: 'Account uses Google login — no password to update' })

    const match = await user.comparePassword(currentPassword)
    if (!match)
      return res.status(401).json({ message: 'Current password is incorrect' })

    user.password = newPassword
    await user.save()

    res.json({ message: 'Password updated successfully' })
  } catch (err) {
    next(err)
  }
}
