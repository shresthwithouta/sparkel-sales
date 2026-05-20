// Get analytics data - currently returns sample/demo data
// TODO: Integrate with Google Analytics Data API when credentials are available
export const getAnalyticsData = async (req, res, next) => {
  try {
    const gaId = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID

    if (!gaId) {
      return res.status(400).json({
        message: 'Google Analytics not configured. Please add GOOGLE_ANALYTICS_MEASUREMENT_ID to Vercel environment variables.',
        error: 'GA_NOT_CONFIGURED'
      })
    }

    // TODO: Replace with actual Google Analytics Data API call
    // For now, return realistic demo data
    const analyticsData = getDemoAnalyticsData()
    
    res.json({ 
      data: analyticsData,
      configured: !!gaId,
      measurmentId: gaId 
    })
  } catch (err) {
    next(err)
  }
}

// Demo data - Replace this with actual GA API call later
function getDemoAnalyticsData() {
  const today = new Date()
  const last30Days = []
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    last30Days.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      users: Math.floor(Math.random() * 150) + 50,
      sessions: Math.floor(Math.random() * 200) + 80,
      pageViews: Math.floor(Math.random() * 400) + 150,
    })
  }

  return {
    summary: {
      totalUsers: 2847,
      totalSessions: 3542,
      totalPageViews: 12543,
      avgSessionDuration: '3m 24s',
      bounceRate: 42.3,
      conversionRate: 3.8,
    },
    usersOverTime: last30Days,
    topPages: [
      { page: '/products', pageViews: 2543, users: 1847, avgTime: '2:45' },
      { page: '/categories', pageViews: 1842, users: 1234, avgTime: '1:52' },
      { page: '/about', pageViews: 1456, users: 987, avgTime: '1:34' },
      { page: '/contact', pageViews: 982, users: 654, avgTime: '2:12' },
      { page: '/', pageViews: 3284, users: 2156, avgTime: '3:21' },
    ],
    trafficSources: [
      { name: 'Organic', value: 4524, percentage: 45.2 },
      { name: 'Direct', value: 3218, percentage: 32.1 },
      { name: 'Referral', value: 1456, percentage: 14.5 },
      { name: 'Social', value: 802, percentage: 8.0 },
    ],
    topReferrers: [
      { referrer: 'google.com', sessions: 1234, users: 987 },
      { referrer: 'facebook.com', sessions: 456, users: 387 },
      { referrer: 'instagram.com', sessions: 324, users: 298 },
      { referrer: 'Direct', sessions: 3218, users: 2156 },
    ],
    deviceCategories: [
      { device: 'Mobile', sessions: 4234, percentage: 42.3 },
      { device: 'Desktop', sessions: 4124, percentage: 41.2 },
      { device: 'Tablet', sessions: 1184, percentage: 11.8 },
    ],
    weeklyComparison: [
      { week: 'Week 1', users: 320, sessions: 425, avgDuration: 195 },
      { week: 'Week 2', users: 380, sessions: 485, avgDuration: 204 },
      { week: 'Week 3', users: 410, sessions: 520, avgDuration: 215 },
      { week: 'Week 4', users: 520, sessions: 612, avgDuration: 234 },
    ],
  }
}
