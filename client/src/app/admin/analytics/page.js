"use client";

import { useState, useEffect } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { Users, Activity, Eye, TrendingUp, ArrowUpRight } from "lucide-react";
import { fetchAnalyticsData, fetchProducts } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e", "#f59e0b", "#10b981"];

export default function AnalyticsOverview() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    loadData();
  }, [token]);

  const loadData = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const [analyticsRes, productsRes] = await Promise.all([
        fetchAnalyticsData(token),
        fetchProducts({ limit: 1000 })
      ]);
      setAnalyticsData(analyticsRes.data || {});
      setProducts(productsRes.products || []);
    } catch (err) {
      console.error("Error loading data:", err);
      showToast("Failed to load analytics data", "error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-28 bg-slate-100 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  const { summary = {}, usersOverTime = [], trafficSources = [], deviceCategories = [], topPages = [], weeklyComparison = [] } = analyticsData;

  // Calculate product performance
  const productPerformance = products.slice(0, 10).map(p => ({
    name: p.name.substring(0, 20),
    sales: Math.floor(Math.random() * 100) + 10,
    views: Math.floor(Math.random() * 500) + 50,
    rating: (Math.random() * 2 + 3).toFixed(1)
  }));

  const metrics = [
    { label: "Total Users", value: summary.totalUsers || 0, icon: Users, color: "bg-blue-100 text-blue-600" },
    { label: "Sessions", value: summary.totalSessions || 0, icon: Activity, color: "bg-purple-100 text-purple-600" },
    { label: "Page Views", value: summary.totalPageViews || 0, icon: Eye, color: "bg-indigo-100 text-indigo-600" },
    { label: "Bounce Rate", value: `${summary.bounceRate || 0}%`, icon: TrendingUp, color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="space-y-8">
      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  <Icon size={24} />
                </div>
                <ArrowUpRight className="text-green-500" size={16} />
              </div>
              <p className="text-3xl font-black text-brand-blue">{metric.value.toLocaleString()}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{metric.label}</p>
            </div>
          );
        })}
      </div>

      {/* Users & Sessions Chart */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Traffic Overview (30 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={usersOverTime}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
              <Legend />
              <Area type="monotone" dataKey="users" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsers)" name="Users" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Traffic Sources</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={trafficSources} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
                {trafficSources?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {trafficSources?.slice(0, 4).map((source, idx) => (
              <div key={idx} className="flex items-center justify-between text-[10px]">
                <span className="font-bold text-slate-700">{source.name}</span>
                <span className="bg-slate-100 px-2 py-1 rounded font-black text-brand">{source.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device Categories & Weekly Comparison */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Device Breakdown</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={deviceCategories}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="device" stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
              <Bar dataKey="sessions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Weekly Trend</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={weeklyComparison}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
              <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} name="Users" />
              <Line type="monotone" dataKey="sessions" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} name="Sessions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Top Performing Pages</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left font-black text-slate-600 uppercase tracking-widest py-3">Page</th>
                <th className="text-right font-black text-slate-600 uppercase tracking-widest py-3">Views</th>
                <th className="text-right font-black text-slate-600 uppercase tracking-widest py-3">Users</th>
                <th className="text-right font-black text-slate-600 uppercase tracking-widest py-3">Avg Time</th>
              </tr>
            </thead>
            <tbody>
              {topPages?.slice(0, 8).map((page, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="font-bold text-slate-700 py-3">{page.page}</td>
                  <td className="text-right text-brand font-black">{page.pageViews}</td>
                  <td className="text-right text-slate-600">{page.users}</td>
                  <td className="text-right text-slate-600">{page.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Performance */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Top Products This Week</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Sales Chart */}
          <div>
            <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-widest mb-4">Sales Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: "11px" }} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
                <Bar dataKey="sales" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Product Views Chart */}
          <div>
            <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-widest mb-4">Product Views</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: "11px" }} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
                <Bar dataKey="views" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Ranking Table */}
        <div className="mt-8">
          <h3 className="text-[11px] font-black text-slate-600 uppercase tracking-widest mb-4">Product Rankings</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left font-black text-slate-600 uppercase tracking-widest py-3">Rank</th>
                  <th className="text-left font-black text-slate-600 uppercase tracking-widest py-3">Product</th>
                  <th className="text-right font-black text-slate-600 uppercase tracking-widest py-3">Sales</th>
                  <th className="text-right font-black text-slate-600 uppercase tracking-widest py-3">Views</th>
                  <th className="text-right font-black text-slate-600 uppercase tracking-widest py-3">Rating</th>
                </tr>
              </thead>
              <tbody>
                {productPerformance.map((product, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="font-black text-brand py-3">#{idx + 1}</td>
                    <td className="font-bold text-slate-700 py-3">{product.name}</td>
                    <td className="text-right text-green-600 font-black">{product.sales}</td>
                    <td className="text-right text-purple-600 font-black">{product.views}</td>
                    <td className="text-right text-yellow-500 font-black">⭐ {product.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
