import Inquiry from '../models/Inquiry.js'
import { sendInquiryNotification, sendInquiryAck } from '../utils/email.js'

export const getInquiries = async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1)
  const limit = Math.min(100, parseInt(req.query.limit) || 20)
  const skip = (page - 1) * limit

  const [inquiries, total] = await Promise.all([
    Inquiry.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
    Inquiry.countDocuments(),
  ])

  res.json({ inquiries, total, page, pages: Math.ceil(total / limit) })
}

export const createInquiry = async (req, res) => {
  const { name, email, phone, product, message } = req.body
  if (!name || !email || !message)
    return res.status(400).json({ message: 'name, email and message are required' })

  const inquiry = await Inquiry.create({ name, email, phone, product, message })

  const adminEmail = process.env.ADMIN_EMAIL
  if (adminEmail) {
    sendInquiryNotification({ adminEmail, inquiryName: name, inquiryEmail: email, inquiryPhone: phone, product, message })
      .catch(err => console.error('[Email] Inquiry notification failed:', err))
  }
  sendInquiryAck({ to: email, name })
    .catch(err => console.error('[Email] Inquiry ack failed:', err))

  res.status(201).json({ inquiry })
}

export const updateInquiry = async (req, res) => {
  const { status } = req.body
  if (!status) return res.status(400).json({ message: 'status is required' })

  const inquiry = await Inquiry.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  )
  if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' })
  res.json({ inquiry })
}

export const deleteInquiry = async (req, res) => {
  const inquiry = await Inquiry.findByIdAndDelete(req.params.id)
  if (!inquiry) return res.status(404).json({ message: 'Inquiry not found' })
  res.json({ message: 'Inquiry deleted' })
}
