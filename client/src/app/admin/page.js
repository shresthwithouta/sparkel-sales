"use client";

import { 
  Package, 
  MessageSquare, 
  Users, 
  ArrowUpRight, 
  TrendingUp, 
  Clock,
  Eye,
  Image as ImageIcon,
  Settings,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchProducts, fetchInquiries, fetchBanners, fetchStats } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";

export default function AdminDashboard() {
  const [stats, setStats] = useState([
    { label: "Total Products", value: "0", icon: <Package size={24} />, color: "bg-blue-500", trend: "Loading..." },
    { label: "New Inquiries", value: "0", icon: <MessageSquare size={24} />, color: "bg-brand", trend: "Loading..." },
    { label: "Active Banners", value: "0", icon: <Eye size={24} />, color: "bg-indigo-500", trend: "Loading..." },
    { label: "Total Users", value: "0", icon: <Users size={24} />, color: "bg-slate-800", trend: "Loading..." },
  ]);
  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();
  const { showToast } = useToast();

  const loadDashboardData = async (showLoading = true) => {
    if (!token) return;
    try {
      if (showLoading) {
        setLoading(true);
        setError(null);
      }
      const [statsData, inquiriesData] = await Promise.all([
        fetchStats(token),
        fetchInquiries(token)
      ]);

      const liveStats = [
        { 
          label: "Total Products", 
          value: statsData.products?.total || "0", 
          icon: <Package size={24} />, 
          color: "bg-blue-500",
          trend: `${statsData.products?.inStock || 0} In Stock`
        },
        { 
          label: "New Inquiries", 
          value: statsData.inquiries?.byStatus?.New || "0", 
          icon: <MessageSquare size={24} />, 
          color: "bg-brand",
          trend: `${statsData.inquiries?.total || 0} Total`
        },
        { 
          label: "Active Banners", 
          value: statsData.banners?.active || "0", 
          icon: <Eye size={24} />, 
          color: "bg-indigo-500",
          trend: "Live"
        },
        { 
          label: "Total Users", 
          value: statsData.users?.total || "0", 
          icon: <Users size={24} />, 
          color: "bg-slate-800",
          trend: "Registered"
        },
      ];
      setStats(liveStats);
      setRecentInquiries((inquiriesData.inquiries || []).slice(0, 5));
    } catch (err) {
      console.error("Error loading dashboard data:", err);
      if (showLoading) {
        setError("Failed to load dashboard statistics. Please try refreshing the page.");
        showToast("Failed to load stats", "error");
      }
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initDashboard = async () => {
      if (!token) return;
      try {
        const [statsData, inquiriesData] = await Promise.all([
          fetchStats(token),
          fetchInquiries(token)
        ]);

        if (isMounted) {
          const liveStats = [
            { 
              label: "Total Products", 
              value: statsData.products?.total || "0", 
              icon: <Package size={24} />, 
              color: "bg-blue-500",
              trend: `${statsData.products?.inStock || 0} In Stock`
            },
            { 
              label: "New Inquiries", 
              value: statsData.inquiries?.byStatus?.New || "0", 
              icon: <MessageSquare size={24} />, 
              color: "bg-brand",
              trend: `${statsData.inquiries?.total || 0} Total`
            },
            { 
              label: "Active Banners", 
              value: statsData.banners?.active || "0", 
              icon: <Eye size={24} />, 
              color: "bg-indigo-500",
              trend: "Live"
            },
            { 
              label: "Total Users", 
              value: statsData.users?.total || "0", 
              icon: <Users size={24} />, 
              color: "bg-slate-800",
              trend: "Registered"
            },
          ];
          setStats(liveStats);
          setRecentInquiries((inquiriesData.inquiries || []).slice(0, 5));
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error loading dashboard data:", err);
          setError("Failed to load dashboard statistics.");
          setLoading(false);
        }
      }
    };
    initDashboard();
    return () => { isMounted = false; };
  }, [token]);

  return (
    <div className="space-y-10">
      {error && (
        <div className="bg-red-50 border border-red-100 p-4 rounded-sm flex items-center justify-between">
          <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">{error}</p>
          <button 
            onClick={loadDashboardData}
            className="text-[10px] font-black text-brand uppercase tracking-widest hover:underline"
          >
            Try Again
          </button>
        </div>
      )}
      {}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm group hover:border-brand transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} text-white p-3 rounded-sm`}>
                {stat.icon}
              </div>
              <div className="text-[10px] font-black text-emerald-500 flex items-center gap-1 uppercase tracking-widest">
                <TrendingUp size={12} />
                {stat.trend}
              </div>
            </div>
            <h3 className="text-3xl font-black text-brand-blue mb-1">{stat.value}</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight">Recent Inquiries</h2>
            <Link href="/admin/inquiries" className="text-[10px] font-black text-brand uppercase tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Product</th>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Date</th>
                  <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentInquiries.map((inquiry) => (
                  <tr key={inquiry._id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-brand-blue">{inquiry.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-xs font-medium text-slate-600">{inquiry.product}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock size={12} />
                        <span className="text-[10px] font-bold uppercase">
                          {inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : "Recently"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                        inquiry.status === 'New' ? 'bg-brand/10 text-brand' :
                        inquiry.status === 'Contacted' ? 'bg-blue-100 text-blue-600' :
                        'bg-slate-100 text-slate-500'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {}
        <div className="space-y-6">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight">Quick Actions</h2>
          <div className="space-y-4">
            <Link href="/admin/products" className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-sm hover:border-brand transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand/10 text-brand flex items-center justify-center rounded-sm">
                  <Package size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Manage Products</h4>
                  <p className="text-[8px] text-slate-400 font-medium uppercase mt-0.5">Upload to catalogue</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-brand transition-colors" />
            </Link>
            
            <Link href="/admin/banners" className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-sm hover:border-brand transition-all group text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-500 flex items-center justify-center rounded-sm">
                  <ImageIcon size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Manage Banners</h4>
                  <p className="text-[8px] text-slate-400 font-medium uppercase mt-0.5">Promote an offer</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-brand transition-colors" />
            </Link>
          </div>

          <div className="bg-brand-blue text-white p-8 rounded-sm relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-black uppercase tracking-widest mb-2">System Status</h3>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <p className="text-[9px] font-black uppercase tracking-widest text-emerald-500">All systems operational</p>
              </div>
              <p className="text-[10px] text-white/50 leading-relaxed uppercase tracking-widest">
                Last synced: Today, 5:42 PM
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5">
               <Settings size={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




