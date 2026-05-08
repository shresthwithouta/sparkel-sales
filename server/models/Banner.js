import { Schema, model } from 'mongoose'

const bannerSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String },
    image: { type: String, required: true },
    link: { type: String, default: '/' },
    active: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export default model('Banner', bannerSchema)
