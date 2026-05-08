"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  ShoppingBag, 
  Search, 
  Calendar,
  ChevronRight,
  Filter,
  CheckCircle2,
  Truck,
  Clock,
  XCircle,
  IndianRupee,
  Loader2,
  Package
} from "lucide-react";
import Image from "next/image";
import { useToast } from "@/contexts/ToastContext";
import { fetchAllOrders, updateOrderStatus } from "@/lib/api";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { token } = useAuth();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const loadOrders = async (showLoading = true) => {
    if (!token) return;
    try {
      if (showLoading) setLoading(true);
      const data = await fetchAllOrders(token);
      setOrders(data.orders || []);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initOrders = async () => {
      if (!token) return;
      try {
        const data = await fetchAllOrders(token);
        if (isMounted) {
          setOrders(data.orders || []);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch orders", err);
          setLoading(false);
        }
      }
    };
    initOrders();
    return () => { isMounted = false; };
  }, [token]);

  const handleUpdateStatus = async (id, status) => {
    try {
      setIsUpdating(true);
      await updateOrderStatus(token, id, status);
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o));
      if (selectedOrder?._id === id) setSelectedOrder({ ...selectedOrder, status });
      showToast(`Order status updated to ${status}`, "success");
    } catch (err) {
      showToast(err.message || "Failed to update status", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'bg-emerald-100 text-emerald-600 border-emerald-200';
      case 'shipped': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'confirmed': return 'bg-indigo-100 text-indigo-600 border-indigo-200';
      case 'pending': return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'cancelled': return 'bg-rose-100 text-rose-600 border-rose-200';
      default: return 'bg-slate-100 text-slate-500';
    }
  };

  const filteredOrders = (orders || []).filter(o => 
    (o._id || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (o.shipping?.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (o.user?.email || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide main page scrollbar */
        html, body {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none !important;
        }

        /* Keep aside scrollbar visible */
        .scrollbar-visible::-webkit-scrollbar {
          width: 6px !important;
          display: block !important;
        }
        .scrollbar-visible::-webkit-scrollbar-track {
          background: #f8fafc !important;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb {
          background: #cbd5e1 !important;
          border-radius: 10px !important;
        }
        .scrollbar-visible::-webkit-scrollbar-thumb:hover {
          background: #f58220 !important;
        }
      `}} />

      <div className="flex items-center gap-4 bg-white p-2 border border-slate-200 rounded-sm">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text"
            placeholder="Search by Order ID, Name or Email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border-l border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors">
          <Filter size={14} />
          Filter
        </button>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 bg-white border border-slate-200 rounded-sm">
            <Loader2 className="animate-spin text-brand" size={32} />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fetching Orders...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOrders.map((order) => (
              <div 
                key={order._id}
                onClick={() => setSelectedOrder(order)}
                className={`bg-white border p-6 rounded-sm cursor-pointer transition-all hover:shadow-lg group ${selectedOrder?._id === order._id ? 'border-brand shadow-md' : 'border-slate-200'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-sm font-black text-brand-blue uppercase tracking-tight">#{order._id.substring(order._id.length - 8).toUpperCase()}</h3>
                      <span className="text-slate-300">/</span>
                      <span className="text-xs font-bold text-slate-500">{order.shipping?.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={12} /> {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-slate-200">|</span>
                      <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-1 text-brand">
                        <IndianRupee size={12} /> {order.total?.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 border text-[8px] font-black uppercase tracking-widest rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && filteredOrders.length === 0 && (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-sm">
            <p className="text-slate-400 text-sm italic">No orders found.</p>
          </div>
        )}
      </div>

      {/* Order Details Slide-over Aside */}
      {selectedOrder && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setSelectedOrder(null)} 
          />
          
          {/* Aside Panel */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
              <div>
                <h2 className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Order Management</h2>
                <p className="text-xs font-bold text-slate-500 mt-1">#{selectedOrder._id.substring(selectedOrder._id.length - 8).toUpperCase()}</p>
              </div>
              <button 
                onClick={() => setSelectedOrder(null)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-brand hover:border-brand transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-10 scrollbar-visible">
              {/* Update Status Section */}
              <div className="bg-brand/5 p-6 rounded-sm border border-brand/10">
                <label className="text-[9px] font-black uppercase tracking-widest text-brand mb-4 block">Update Order Status</label>
                <div className="grid grid-cols-2 gap-2">
                  {['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'].map((status) => (
                    <button 
                      key={status}
                      disabled={isUpdating || selectedOrder.status === status}
                      onClick={() => handleUpdateStatus(selectedOrder._id, status)}
                      className={`py-2.5 px-1 text-[8px] font-black uppercase tracking-widest rounded-sm transition-colors border ${
                        selectedOrder.status === status 
                        ? 'bg-slate-200 text-slate-500 border-slate-300' 
                        : status === 'cancelled' 
                          ? 'bg-white text-rose-400 border-rose-100 hover:border-rose-400 hover:text-rose-500 col-span-2'
                          : 'bg-white text-brand-blue border-slate-200 hover:border-brand hover:text-brand'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Items Summary</label>
                <div className="space-y-4">
                  {selectedOrder.items?.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-3 bg-slate-50 rounded-sm border border-slate-100">
                      <div className="w-14 h-14 bg-white rounded-sm overflow-hidden border border-slate-200 relative shrink-0">
                        <Image src={item.image || "/images/placeholder.png"} alt={item.name} fill className="object-contain" sizes="48px" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-brand-blue uppercase leading-tight">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold mt-1">QTY: {item.quantity} × ₹{item.price?.toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Amount</p>
                   <p className="text-xl font-black text-brand flex items-center gap-1">
                     <IndianRupee size={20} /> {selectedOrder.total?.toLocaleString("en-IN")}
                   </p>
                </div>
              </div>

              <div className="pb-10">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Shipping Address</label>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 text-slate-600 text-xs leading-relaxed font-medium">
                  <p className="text-brand-blue font-black mb-3 uppercase tracking-tight">{selectedOrder.shipping?.name}</p>
                  <p className="mb-1">{selectedOrder.shipping?.address}</p>
                  <p className="mb-4">{selectedOrder.shipping?.city}, {selectedOrder.shipping?.pincode}</p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-brand-blue font-bold flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-widest text-slate-400">Phone:</span> {selectedOrder.shipping?.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
