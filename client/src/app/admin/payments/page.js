"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import {
  Search,
  Filter,
  IndianRupee,
  Loader2,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronRight,
  Phone,
  AtSign,
  Eye,
  ShoppingBag,
  User
} from "lucide-react";
import Image from "next/image";
import { fetchAdminPayments, updatePaymentStatus } from "@/lib/api";

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [screenshotPreview, setScreenshotPreview] = useState(null);
  const { token } = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    let cancelled = false;

    const loadPayments = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const data = await fetchAdminPayments(token, filter === "all" ? "" : filter);
        if (!cancelled) {
          setPayments(data.payments || []);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Failed to fetch payments", err);
          setLoading(false);
        }
      }
    };

    loadPayments();
    return () => { cancelled = true; };
  }, [token, filter]);

  const handleAction = async (id, status) => {
    try {
      setIsUpdating(true);
      const data = await updatePaymentStatus(token, id, status);
      setPayments(prev => prev.map(p => p._id === id ? data.payment : p));
      if (selected?._id === id) setSelected(data.payment);
      showToast(`Payment ${status}`, "success");
    } catch (err) {
      showToast(err.message || "Failed to update payment", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "accepted": return { color: "bg-emerald-100 text-emerald-600 border-emerald-200", icon: <CheckCircle2 size={12} /> };
      case "declined": return { color: "bg-rose-100 text-rose-600 border-rose-200", icon: <XCircle size={12} /> };
      default: return { color: "bg-amber-100 text-amber-600 border-amber-200", icon: <Clock size={12} /> };
    }
  };

  const filtered = payments.filter(p => {
    const q = searchQuery.toLowerCase();
    return (
      (p.user?.name || "").toLowerCase().includes(q) ||
      (p.user?.email || "").toLowerCase().includes(q) ||
      (p.senderPhone || "").includes(q) ||
      (p.senderUpi || "").toLowerCase().includes(q)
    );
  });

  const pendingCount = payments.filter(p => p.status === "pending").length;

  return (
    <div className="space-y-6 animate-reveal">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          { label: "Total", value: payments.length, color: "text-brand-blue" },
          { label: "Pending", value: pendingCount, color: "text-amber-500" },
          { label: "Accepted", value: payments.filter(p => p.status === "accepted").length, color: "text-emerald-500" },
          { label: "Declined", value: payments.filter(p => p.status === "declined").length, color: "text-rose-500" },
        ].map(s => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-sm p-4 md:p-5">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{s.label}</p>
            <p className={`text-2xl md:text-3xl font-black mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1 bg-white border border-slate-200 rounded-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search by name, email, phone or UPI..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-sm focus:outline-none rounded-sm"
          />
        </div>
        <div className="flex gap-1 bg-white border border-slate-200 rounded-sm p-1">
          {["all", "pending", "accepted", "declined"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 md:px-4 py-2 text-[9px] font-black uppercase tracking-widest rounded-sm transition-all ${
                filter === f ? "bg-brand text-white" : "text-slate-400 hover:text-brand-blue"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Cards */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4 bg-white border border-slate-200 rounded-sm">
          <Loader2 className="animate-spin text-brand" size={32} />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Payments...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white border border-slate-200 rounded-sm">
          <IndianRupee size={48} className="text-slate-200 mx-auto mb-3" />
          <p className="text-slate-400 text-sm">No payments found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(payment => {
            const badge = getStatusBadge(payment.status);
            return (
              <div
                key={payment._id}
                onClick={() => setSelected(payment)}
                className={`bg-white border rounded-sm p-5 md:p-6 cursor-pointer transition-all hover:shadow-lg group ${
                  selected?._id === payment._id ? "border-brand shadow-md" : "border-slate-200"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-brand/10 text-brand rounded-full flex items-center justify-center shrink-0">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-brand-blue leading-tight">{payment.user?.name || "Unknown"}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{payment.user?.email}</p>
                    </div>
                  </div>
                  <span className={`flex items-center gap-1.5 px-3 py-1 border text-[8px] font-black uppercase tracking-widest rounded-full ${badge.color}`}>
                    {badge.icon} {payment.status}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold">
                    <span className="flex items-center gap-1"><Phone size={11} />{payment.senderPhone}</span>
                    <span className="flex items-center gap-1"><AtSign size={11} />{payment.senderUpi}</span>
                  </div>
                  <p className="text-sm font-black text-brand flex items-center gap-0.5">
                    <IndianRupee size={14} />{payment.amount?.toLocaleString("en-IN")}
                  </p>
                </div>

                <p className="text-[9px] text-slate-300 font-bold mt-3 uppercase tracking-widest">
                  {new Date(payment.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  {" "}at{" "}
                  {new Date(payment.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Slide-over */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => { setSelected(null); setScreenshotPreview(null); }}
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="p-5 md:p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
              <div>
                <h2 className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Payment Verification</h2>
                <p className="text-xs font-bold text-slate-500 mt-1">{selected.user?.name}</p>
              </div>
              <button
                onClick={() => { setSelected(null); setScreenshotPreview(null); }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-brand hover:border-brand transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              {/* Action Buttons */}
              {selected.status === "pending" && (
                <div className="bg-amber-50 border border-amber-100 rounded-sm p-5">
                  <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-4">Awaiting Your Decision</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      disabled={isUpdating}
                      onClick={() => handleAction(selected._id, "accepted")}
                      className="flex items-center justify-center gap-2 py-3 bg-emerald-500 text-white rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all disabled:opacity-50"
                    >
                      <CheckCircle2 size={16} /> Accept
                    </button>
                    <button
                      disabled={isUpdating}
                      onClick={() => handleAction(selected._id, "declined")}
                      className="flex items-center justify-center gap-2 py-3 bg-rose-500 text-white rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all disabled:opacity-50"
                    >
                      <XCircle size={16} /> Decline
                    </button>
                  </div>
                </div>
              )}

              {selected.status !== "pending" && (
                <div className={`p-5 rounded-sm border ${
                  selected.status === "accepted"
                    ? "bg-emerald-50 border-emerald-100"
                    : "bg-rose-50 border-rose-100"
                }`}>
                  <p className={`text-[10px] font-black uppercase tracking-widest ${
                    selected.status === "accepted" ? "text-emerald-600" : "text-rose-600"
                  }`}>
                    Payment {selected.status === "accepted" ? "Accepted" : "Declined"}
                  </p>
                </div>
              )}

              {/* Payment Screenshot */}
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Payment Screenshot</label>
                <div
                  className="relative w-full aspect-square bg-slate-50 border border-slate-200 rounded-sm overflow-hidden cursor-pointer group"
                  onClick={() => setScreenshotPreview(selected.screenshot)}
                >
                  <Image src={selected.screenshot} alt="Payment proof" fill className="object-contain" sizes="400px" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Eye size={24} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Sender Details */}
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Sender Details</label>
                <div className="bg-slate-50 rounded-sm border border-slate-100 divide-y divide-slate-100">
                  {[
                    { label: "Phone", value: selected.senderPhone, icon: <Phone size={14} /> },
                    { label: "UPI ID", value: selected.senderUpi, icon: <AtSign size={14} /> },
                    { label: "Amount Sent", value: `₹${selected.amount?.toLocaleString("en-IN")}`, icon: <IndianRupee size={14} /> },
                  ].map(row => (
                    <div key={row.label} className="flex items-center gap-4 px-5 py-4">
                      <span className="text-brand">{row.icon}</span>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{row.label}</p>
                        <p className="text-sm font-bold text-brand-blue">{row.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Details */}
              {selected.order && (
                <div className="pb-8">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Linked Order</label>
                  <div className="bg-slate-50 rounded-sm border border-slate-100 p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShoppingBag size={16} className="text-brand" />
                        <p className="text-[10px] font-black text-brand-blue uppercase tracking-tight">
                          #{selected.order._id?.substring(selected.order._id.length - 8).toUpperCase()}
                        </p>
                      </div>
                      <p className="text-sm font-black text-brand flex items-center gap-0.5">
                        <IndianRupee size={14} />{selected.order.total?.toLocaleString("en-IN")}
                      </p>
                    </div>
                    {selected.order.items?.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                        <span className="text-slate-300">•</span>
                        {item.name} <span className="text-slate-300">× {item.quantity}</span>
                      </div>
                    ))}
                    {selected.order.items?.length > 3 && (
                      <p className="text-[9px] text-slate-400 font-bold">+{selected.order.items.length - 3} more items</p>
                    )}

                    {selected.order.shipping && (
                      <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium space-y-1">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Ship To</p>
                        <p className="font-bold text-brand-blue">{selected.order.shipping.name}</p>
                        <p>{selected.order.shipping.address}</p>
                        <p>{selected.order.shipping.city} {selected.order.shipping.pincode}</p>
                        <p className="text-brand-blue font-bold">{selected.order.shipping.phone}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full Screenshot Preview Modal */}
      {screenshotPreview && (
        <div
          className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setScreenshotPreview(null)}
        >
          <div className="relative w-full max-w-lg max-h-[90vh]">
            <Image
              src={screenshotPreview}
              alt="Screenshot full view"
              width={600}
              height={600}
              className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
            />
            <button
              onClick={() => setScreenshotPreview(null)}
              className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-500 hover:text-brand shadow-lg"
            >
              <XCircle size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
