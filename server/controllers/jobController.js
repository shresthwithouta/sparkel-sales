import JobApplication from '../models/JobApplication.js'

export const applyForJob = async (req, res, next) => {
  try {
    const { name, email, phone, position, message } = req.body
    if (!name || !email || !phone || !position)
      return res.status(400).json({ message: 'name, email, phone and position are required' })

    const application = await JobApplication.create({ name, email, phone, position, message })
    res.status(201).json({ application })
  } catch (err) {
    next(err)
  }
}

export const getApplications = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1)
    const limit = Math.min(100, parseInt(req.query.limit) || 20)
    const skip = (page - 1) * limit

    const [applications, total] = await Promise.all([
      JobApplication.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      JobApplication.countDocuments(),
    ])

    res.json({ applications, total, page, pages: Math.ceil(total / limit) })
  } catch (err) {
    next(err)
  }
}

export const updateApplication = async (req, res, next) => {
  try {
    const { status } = req.body
    if (!status) return res.status(400).json({ message: 'status is required' })

    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: 'after', runValidators: true }
    )
    if (!application) return res.status(404).json({ message: 'Application not found' })
    res.json({ application })
  } catch (err) {
    next(err)
  }
}

export const deleteApplication = async (req, res, next) => {
  try {
    const application = await JobApplication.findByIdAndDelete(req.params.id)
    if (!application) return res.status(404).json({ message: 'Application not found' })
    res.json({ message: 'Application deleted' })
  } catch (err) {
    next(err)
  }
}
