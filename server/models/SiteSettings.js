import { Schema, model } from 'mongoose'

const siteSettingsSchema = new Schema(
  {
    websiteName: { type: String, default: 'Sparkel Sales' },
    metaDescription: { type: String },
    heroHeadline: { type: String },
    heroSubheadline: { type: String },
    logo: { type: String },
    favicon: { type: String },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
    mapsUrl: { type: String },
    topBarText: { type: String, default: 'Under Spark Innovations' },
    social: {
      facebook: String,
      instagram: String,
      twitter: String,
      youtube: String,
      linkedin: String,
    },
  },
  { timestamps: true }
)

export default model('SiteSettings', siteSettingsSchema)
