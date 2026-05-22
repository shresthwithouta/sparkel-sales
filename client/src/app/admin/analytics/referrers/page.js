"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Link2 } from "lucide-react";
import { fetchAnalyticsData } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

export default function TopReferrers() {
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
      {/* Chart */}
      <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm">
        <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight mb-6">Top Referrers Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.topReferrers}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="referrer" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "4px" }}
            />
            <Legend />
            <Bar dataKey="sessions" fill="#3b82f6" name="Sessions" radius={[8, 8, 0, 0]} />
            <Bar dataKey="users" fill="#8b5cf6" name="Users" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Table */}
      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-black text-brand-blue uppercase tracking-tight">Referrer Details</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Referrer</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">Sessions</th>
                <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">Users</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.topReferrers?.map((referrer, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-sm">
                        <Link2 size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700">{referrer.referrer}</p>
                        <p className="text-[10px] text-slate-400">Referral Source</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-black text-brand-blue">{referrer.sessions.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-bold text-slate-600">{referrer.users.toLocaleString()}</span>
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
