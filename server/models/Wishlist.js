import { Schema, model } from 'mongoose'

const wishlistSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    items: [
      {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String },
      },
    ],
  },
  { timestamps: true }
)

export default model('Wishlist', wishlistSchema)
