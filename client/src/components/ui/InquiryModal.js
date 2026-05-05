"use client";

import { useState } from "react";
import { X, CheckCircle, Loader2, Send } from "lucide-react";
import { createInquiry } from "@/lib/api";

export default function InquiryModal({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: product ? `I'm interested in the ${product.name}. Please provide more details.` : "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      await createInquiry({
        ...formData,
        product: product?.name || "General Inquiry",
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch (err) {
      setError(err.message || "Failed to send inquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-blue/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-reveal">
        {success ? (
          <div className="p-12 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tight mb-2">Message Sent!</h2>
            <p className="text-slate-500 font-medium">Our team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div>
                <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">Product Inquiry</h2>
                {product && <p className="text-[10px] text-brand font-bold uppercase mt-1">{product.name}</p>}
              </div>
              <button onClick={onClose} className="text-slate-400 hover:text-brand">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-sm text-xs font-bold animate-reveal">
                  {error}
                </div>
              )}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                      placeholder="Rahul Sharma" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                      placeholder="+91 98300..." 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                    placeholder="rahul@example.com" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Message</label>
                  <textarea 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl shadow-brand-blue/20 hover:bg-brand transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
