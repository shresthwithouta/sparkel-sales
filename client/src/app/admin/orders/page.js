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
import { fetchAllOrders, updateOrderStatus } from "@/lib/api";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const loadOrders = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const data = await fetchAllOrders(token);
      setOrders(data.orders || []);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, [token]);

  const handleUpdateStatus = async (id, status) => {
    try {
      setIsUpdating(true);
      await updateOrderStatus(token, id, status);
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o));
      if (selectedOrder?._id === id) setSelectedOrder({ ...selectedOrder, status });
    } catch (err) {
      alert(err.message || "Failed to update status");
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
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
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

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 bg-white border border-slate-200 rounded-sm">
            <Loader2 className="animate-spin text-brand" size={32} />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fetching Orders...</p>
          </div>
        ) : (
          <div className="space-y-4">
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
            {filteredOrders.length === 0 && (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-sm">
                <p className="text-slate-400 text-sm italic">No orders found.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="lg:col-span-1">
        {selectedOrder ? (
          <div className="bg-white border border-slate-200 rounded-sm p-8 sticky top-32 animate-reveal">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">Order Details</h2>
              <button onClick={() => setSelectedOrder(null)} className="text-slate-300 hover:text-brand">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Items Summary</label>
                <div className="space-y-4">
                  {selectedOrder.items?.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-sm overflow-hidden border border-slate-100 relative shrink-0">
                        <Image src={item.image || "/images/placeholder.png"} alt={item.name} fill className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-brand-blue uppercase leading-tight">{item.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold">QTY: {item.quantity} × ₹{item.price?.toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Amount</p>
                   <p className="text-lg font-black text-brand flex items-center gap-1">
                     <IndianRupee size={16} /> {selectedOrder.total?.toLocaleString("en-IN")}
                   </p>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Shipping Address</label>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 text-slate-600 text-xs leading-relaxed font-medium">
                  <p className="text-brand-blue font-black mb-2 uppercase">{selectedOrder.shipping?.name}</p>
                  <p>{selectedOrder.shipping?.address}</p>
                  <p>{selectedOrder.shipping?.city}, {selectedOrder.shipping?.pincode}</p>
                  <p className="mt-4 text-brand-blue font-bold">Phone: {selectedOrder.shipping?.phone}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100 pb-10">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Update Order Status</label>
                <div className="grid grid-cols-2 gap-2">
                  {['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'].map((status) => (
                    <button 
                      key={status}
                      disabled={isUpdating || selectedOrder.status === status}
                      onClick={() => handleUpdateStatus(selectedOrder._id, status)}
                      className={`py-2.5 px-1 text-[8px] font-black uppercase tracking-widest rounded-sm transition-colors border ${
                        selectedOrder.status === status 
                        ? 'bg-slate-50 text-slate-300 border-slate-100' 
                        : status === 'cancelled' 
                          ? 'bg-white text-rose-400 border-rose-100 hover:border-rose-400 hover:text-rose-500 col-span-2 mt-1'
                          : 'bg-white text-brand-blue border-slate-200 hover:border-brand hover:text-brand'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-100 border border-dashed border-slate-300 rounded-sm p-12 text-center h-[400px] flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300">
              <Package size={32} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select an order to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
