import JobApplication from '../models/JobApplication.js'

export const applyForJob = async (req, res) => {
  const { name, email, phone, position, message } = req.body
  if (!name || !email || !phone || !position)
    return res.status(400).json({ message: 'name, email, phone and position are required' })

  const application = await JobApplication.create({ name, email, phone, position, message })
  res.status(201).json({ application })
}

export const getApplications = async (req, res) => {
  const applications = await JobApplication.find().sort({ createdAt: -1 })
  res.json({ applications })
}

export const updateApplication = async (req, res) => {
  const application = await JobApplication.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  )
  if (!application) return res.status(404).json({ message: 'Application not found' })
  res.json({ application })
}

export const deleteApplication = async (req, res) => {
  const application = await JobApplication.findByIdAndDelete(req.params.id)
  if (!application) return res.status(404).json({ message: 'Application not found' })
  res.json({ message: 'Application deleted' })
}
