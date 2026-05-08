"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { createInquiry } from "@/lib/api";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await createInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `${formData.subject ? `[${formData.subject}] ` : ""}${formData.message}`
      });
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || "Something went wrong" });
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "Phone",
      details: "+91 (Your Number)",
      subtext: "Mon-Sat: 10AM - 8PM"
    },
    {
      icon: <Mail size={20} />,
      title: "Email",
      details: "sparkinnovations@gmail.com",
      subtext: "24/7 Support available"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      details: "Kolkata, West Bengal",
      subtext: "Authorized Distributor"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <SectionHeader 
          badge="Contact Us"
          title={<>LET&apos;S START A <span className="text-brand">CONVERSATION.</span></>}
          description="Have questions about our products or need a quote? Reach out to us and we&apos;ll be happy to help."
        />

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-brand-blue flex items-center justify-center rounded-sm shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.title}</h4>
                    <p className="text-lg font-black text-brand-blue mb-1">{item.details}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-blue text-white p-10 rounded-sm relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">Quick WhatsApp Inquiry</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">
                    Message us directly on WhatsApp for instant support and product catalogs.
                  </p>
                  <button className="w-full bg-[#25D366] text-white py-4 px-6 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#25D366] transition-all flex items-center justify-center gap-3">
                    <MessageSquare size={16} />
                    Chat on WhatsApp
                  </button>
               </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-sm p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.success && (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 p-4 rounded-sm text-xs font-bold animate-reveal">
                  Thank you for your inquiry! We will get back to you soon.
                </div>
              )}
              {status.error && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-sm text-xs font-bold animate-reveal">
                  {status.error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                  <input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 00000 00000"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
                  >
                    <option value="">Select subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="service">Service Request</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status.loading}
                className="w-full bg-brand-blue text-white py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand transition-all group disabled:opacity-50"
              >
                {status.loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}




