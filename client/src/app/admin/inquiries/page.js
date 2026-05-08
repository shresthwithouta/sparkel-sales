"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { 
  MessageSquare, 
  Search, 
  Trash2, 
  Mail, 
  Phone, 
  Calendar,
  ChevronRight,
  Filter,
  CheckCircle2,
  XCircle,
  Loader2
} from "lucide-react";
import { fetchInquiries, updateInquiryStatus, deleteInquiry } from "@/lib/api";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const { token } = useAuth();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const loadInquiries = async (showLoading = true) => {
    if (!token) return;
    try {
      if (showLoading) setLoading(true);
      const data = await fetchInquiries(token);
      setInquiries(data.inquiries || []);
    } catch (err) {
      console.error("Failed to fetch inquiries", err);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initInquiries = async () => {
      if (!token) return;
      try {
        const data = await fetchInquiries(token);
        if (isMounted) {
          setInquiries(data.inquiries || []);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch inquiries", err);
          setLoading(false);
        }
      }
    };
    initInquiries();
    return () => { isMounted = false; };
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await deleteInquiry(token, id);
      setInquiries(inquiries.filter(i => i._id !== id));
      if (selectedInquiry?._id === id) setSelectedInquiry(null);
      showToast("Inquiry deleted successfully", "success");
    } catch (err) {
      console.error("Failed to delete inquiry", err);
      showToast(err.message || "Failed to delete inquiry", "error");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-brand/10 text-brand border-brand/20';
      case 'Contacted': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'Closed': return 'bg-slate-100 text-slate-500 border-slate-200';
      default: return 'bg-slate-100 text-slate-500';
    }
  };

  const filteredInquiries = (inquiries || []).filter(i => 
    (i.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (i.product || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
    (i.message || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-4 bg-white p-2 border border-slate-200 rounded-sm">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text"
              placeholder="Search inquiries..."
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
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fetching Inquiries...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInquiries.map((inquiry) => (
              <div 
                key={inquiry._id}
                onClick={() => setSelectedInquiry(inquiry)}
                className={`bg-white border p-6 rounded-sm cursor-pointer transition-all hover:shadow-lg group ${selectedInquiry?._id === inquiry._id ? 'border-brand shadow-md' : 'border-slate-200'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-base font-black text-brand-blue uppercase tracking-tight mb-1">{inquiry.name}</h3>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                        <Calendar size={12} /> {inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString() : "N/A"}
                      </span>
                      <span className="text-slate-200">|</span>
                      <span className="text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                        <MessageSquare size={12} /> {inquiry.product}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 border text-[8px] font-black uppercase tracking-widest rounded-full ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-2 italic">&quot;{inquiry.message}&quot;</p>
              </div>
            ))}
            {filteredInquiries.length === 0 && (
              <div className="text-center py-20 bg-white border border-slate-200 rounded-sm">
                <p className="text-slate-400 text-sm italic">No inquiries found.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="lg:col-span-1">
        {selectedInquiry ? (
          <div className="bg-white border border-slate-200 rounded-sm p-8 sticky top-32 animate-reveal">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">Inquiry Details</h2>
              <button onClick={() => setSelectedInquiry(null)} className="text-slate-300 hover:text-brand">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Customer Info</label>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-brand-blue">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-sm text-brand">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Email Address</p>
                      <p className="text-xs font-bold">{selectedInquiry.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-brand-blue">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-sm text-brand">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Phone Number</p>
                      <p className="text-xs font-bold">{selectedInquiry.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Inquiry Message</label>
                <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 italic text-slate-600 text-sm leading-relaxed">
                  &quot;{selectedInquiry.message}&quot;
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4 block">Update Status</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={async () => {
                      try {
                        await updateInquiryStatus(token, selectedInquiry._id, 'Contacted');
                        setInquiries(inquiries.map(i => i._id === selectedInquiry._id ? { ...i, status: 'Contacted' } : i));
                        setSelectedInquiry({ ...selectedInquiry, status: 'Contacted' });
                        showToast("Inquiry status updated to Contacted", "success");
                      } catch (err) {
                        console.error("Failed to update status", err);
                        showToast("Failed to update status", "error");
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-3 bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest rounded-sm hover:bg-blue-600 transition-colors"
                  >
                    <CheckCircle2 size={14} />
                    Contacted
                  </button>
                  <button 
                    onClick={async () => {
                      try {
                        await updateInquiryStatus(token, selectedInquiry._id, 'Closed');
                        setInquiries(inquiries.map(i => i._id === selectedInquiry._id ? { ...i, status: 'Closed' } : i));
                        setSelectedInquiry({ ...selectedInquiry, status: 'Closed' });
                        showToast("Inquiry closed", "info");
                      } catch (err) {
                        console.error("Failed to update status", err);
                        showToast("Failed to update status", "error");
                      }
                    }}
                    className="flex items-center justify-center gap-2 py-3 bg-slate-800 text-white text-[9px] font-black uppercase tracking-widest rounded-sm hover:bg-black transition-colors"
                  >
                    <XCircle size={14} />
                    Close
                  </button>
                </div>
              </div>

              <button 
                onClick={() => handleDelete(selectedInquiry._id)}
                className="w-full flex items-center justify-center gap-2 py-4 text-red-500 text-[9px] font-black uppercase tracking-widest border border-red-100 hover:bg-red-50 transition-colors rounded-sm mt-4"
              >
                <Trash2 size={14} />
                Delete Inquiry
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-100 border border-dashed border-slate-300 rounded-sm p-12 text-center h-[400px] flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-300">
              <MessageSquare size={32} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select an inquiry to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}




