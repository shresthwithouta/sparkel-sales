import { Schema, model } from 'mongoose'

const jobApplicationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true },
    message: { type: String },
    status: { type: String, enum: ['Pending', 'Reviewed', 'Rejected'], default: 'Pending' },
  },
  { timestamps: true }
)

export default model('JobApplication', jobApplicationSchema)
