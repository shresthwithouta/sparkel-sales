"use client";

import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Smartphone } from "lucide-react";
import { fetchAnalyticsData } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

const COLORS = ["#3b82f6", "#8b5cf6", "#ec4899"];

export default function DeviceCategories() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const result = await fetchAnalyticsData(token);
        if (!cancelled) {
          setData(result.data);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Error loading analytics:", err);
          setLoading(false);
        }
      }
    };

    loadData();
    return () => { cancelled = true; };
  }, [token]);

  if (loading) {
    return <div className="bg-slate-100 h-96 rounded-sm animate-pulse"></div>;
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Pie Chart */}
      <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm">
        <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Device Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data.deviceCategories}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ device, percentage }) => `${device}: ${percentage}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="sessions"
            >
              {data.deviceCategories?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm">
        <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Sessions by Device</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data.deviceCategories}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="device" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "4px" }}
            />
            <Bar dataKey="sessions" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Table */}
      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight">Device Category Details</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Device Type</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">Sessions</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.deviceCategories?.map((device, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-sm">
                        <Smartphone size={16} />
                      </div>
                      <p className="text-sm font-bold text-slate-700">{device.device}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-black text-brand-blue">{device.sessions.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-bold text-slate-600">{device.percentage.toFixed(1)}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
