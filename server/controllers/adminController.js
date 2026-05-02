import Product from '../models/Product.js'
import Inquiry from '../models/Inquiry.js'
import User from '../models/User.js'
import Banner from '../models/Banner.js'

export const getStats = async (req, res, next) => {
  try {
    const [
      totalProducts,
      inStockProducts,
      totalInquiries,
      inquiriesByStatus,
      totalUsers,
      activeBanners,
    ] = await Promise.all([
      Product.countDocuments(),
      Product.countDocuments({ inStock: true }),
      Inquiry.countDocuments(),
      Inquiry.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
      User.countDocuments(),
      Banner.countDocuments({ active: true }),
    ])

    res.json({
      products: { total: totalProducts, inStock: inStockProducts },
      inquiries: {
        total: totalInquiries,
        byStatus: Object.fromEntries(inquiriesByStatus.map(s => [s._id, s.count])),
      },
      banners: { active: activeBanners },
      users: { total: totalUsers },
    })
  } catch (error) {
    next(error)
  }
}
