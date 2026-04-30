import Product from '../models/Product.js'
import Category from '../models/Category.js'
import Order from '../models/Order.js'
import Inquiry from '../models/Inquiry.js'
import User from '../models/User.js'
import Banner from '../models/Banner.js'
import JobApplication from '../models/JobApplication.js'

export const getStats = async (req, res) => {
  const [
    totalProducts,
    inStockProducts,
    outOfStockProducts,
    totalCategories,
    totalOrders,
    ordersByStatus,
    totalInquiries,
    inquiriesByStatus,
    totalUsers,
    totalBanners,
    activeBanners,
    totalApplications,
    applicationsByStatus,
  ] = await Promise.all([
    Product.countDocuments(),
    Product.countDocuments({ inStock: true }),
    Product.countDocuments({ inStock: false }),
    Category.countDocuments(),
    Order.countDocuments(),
    Order.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
    Inquiry.countDocuments(),
    Inquiry.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
    User.countDocuments(),
    Banner.countDocuments(),
    Banner.countDocuments({ active: true }),
    JobApplication.countDocuments(),
    JobApplication.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
  ])

  res.json({
    products: {
      total: totalProducts,
      inStock: inStockProducts,
      outOfStock: outOfStockProducts,
    },
    categories: { total: totalCategories },
    orders: {
      total: totalOrders,
      byStatus: Object.fromEntries(ordersByStatus.map(s => [s._id, s.count])),
    },
    inquiries: {
      total: totalInquiries,
      byStatus: Object.fromEntries(inquiriesByStatus.map(s => [s._id, s.count])),
    },
    users: { total: totalUsers },
    banners: { total: totalBanners, active: activeBanners },
    jobApplications: {
      total: totalApplications,
      byStatus: Object.fromEntries(applicationsByStatus.map(s => [s._id, s.count])),
    },
  })
}
