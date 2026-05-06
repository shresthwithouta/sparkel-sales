"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { createInquiry } from "@/lib/api";

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setError("");
      await createInquiry(formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", product: "", message: "" });
    } catch (err) {
      setError(err.message || "Failed to send inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-20">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              <div className="space-y-10">
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-brand-blue uppercase tracking-tighter leading-none mb-6">
                    Connect with <span className="text-brand">Spark</span>
                  </h1>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                    Looking for a bulk order or a custom kitchen solution? Our experts are ready to help you innovate your kitchen space.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                      <p className="text-xl font-black text-brand-blue">+91 91100 00000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                      <p className="text-xl font-black text-brand-blue">sales@sparkinnovations.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Visit Us</p>
                      <p className="text-xl font-black text-brand-blue">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-100 shadow-2xl rounded-sm p-8 md:p-12 relative overflow-hidden">
                {isSuccess ? (
                  <div className="py-20 text-center space-y-6 animate-reveal">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tight">Inquiry Sent!</h3>
                      <p className="text-slate-500 font-medium mt-2">Our team will get back to you within 24 hours.</p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-4 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-brand transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full border-b-2 border-slate-100 py-3 focus:border-brand outline-none transition-all text-brand-blue font-bold"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full border-b-2 border-slate-100 py-3 focus:border-brand outline-none transition-all text-brand-blue font-bold"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full border-b-2 border-slate-100 py-3 focus:border-brand outline-none transition-all text-brand-blue font-bold"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Interested Product</label>
                        <input 
                          type="text" 
                          value={formData.product}
                          onChange={(e) => setFormData({...formData, product: e.target.value})}
                          className="w-full border-b-2 border-slate-100 py-3 focus:border-brand outline-none transition-all text-brand-blue font-bold"
                          placeholder="e.g. Kitchen Chimney"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Message</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full border-b-2 border-slate-100 py-3 focus:border-brand outline-none transition-all text-brand-blue font-bold resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    {error && (
                      <p className="text-rose-500 text-[10px] font-bold uppercase tracking-widest">{error}</p>
                    )}

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl shadow-brand/20 hover:bg-brand-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                      {isSubmitting ? "Processing..." : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
