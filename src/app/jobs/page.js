"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Briefcase, MapPin, Clock, ArrowRight, X, Send, Paperclip } from "lucide-react";
import { applyForJob } from "@/lib/api";

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const openPositions = [
    {
      title: "Sales Executive",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description: "Responsible for driving sales of Kutchina appliances to homeowners and builders."
    },
    {
      title: "Installation Technician",
      location: "Kolkata, West Bengal",
      type: "Full Time",
      description: "Perform professional installation and maintenance of kitchen chimneys and hobs."
    },
    {
      title: "Showroom Coordinator",
      location: "Kolkata, West Bengal",
      type: "Part Time",
      description: "Manage walk-in customers and showcase the product catalog effectively."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await applyForJob({
        ...formData,
        position: selectedJob.title
      });
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => {
        setSelectedJob(null);
        setStatus({ loading: false, success: false, error: null });
      }, 3000);
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message || "Failed to submit application" });
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <SectionHeader 
          badge="Careers"
          title={<>JOIN OUR <span className="text-brand">GROWING TEAM.</span></>}
          description="Build your career with Spark Innovations and help us redefine the modern Indian kitchen."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {openPositions.map((job, index) => (
            <div key={index} className="group bg-white border border-slate-200 rounded-sm p-8 hover:border-brand transition-all flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 text-brand-blue flex items-center justify-center rounded-sm">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight">{job.title}</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <MapPin size={14} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-brand">
                    <Clock size={14} />
                    {job.type}
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-xl">
                  {job.description}
                </p>
              </div>
              <button 
                onClick={() => setSelectedJob(job)}
                className="bg-brand-blue text-white py-4 px-8 rounded-sm font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-brand transition-all shrink-0"
              >
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-brand-blue/90 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
            <div className="relative bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-reveal">
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand mb-1">Application Form</p>
                  <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight">{selectedJob.title}</h3>
                </div>
                <button onClick={() => setSelectedJob(null)} className="p-2 hover:bg-slate-50 rounded-sm transition-colors">
                  <X size={20} className="text-slate-400" />
                </button>
              </div>

              <div className="p-8">
                {status.success ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <Send size={32} />
                    </div>
                    <h4 className="text-xl font-black text-brand-blue uppercase">Application Sent!</h4>
                    <p className="text-slate-500 text-sm font-medium">We have received your application and will contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status.error && (
                      <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-sm">
                        {status.error}
                      </div>
                    )}
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                      <input 
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                        <input 
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Cover Letter / Message</label>
                      <textarea 
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={status.loading}
                      className="w-full bg-brand-blue text-white py-4 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand transition-all disabled:opacity-50 mt-4"
                    >
                      {status.loading ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 bg-slate-50 border border-slate-100 rounded-sm p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-black text-brand-blue uppercase tracking-tight mb-4">Don&apos;t see a fitting role?</h3>
          <p className="text-slate-500 text-sm font-medium mb-8">
            Send your resume to <span className="text-brand font-black">sparkinnovations@gmail.com</span> and we&apos;ll keep you in mind for future openings.
          </p>
          <button className="text-[10px] font-black uppercase tracking-widest text-brand-blue hover:text-brand transition-colors">
            General Application →
          </button>
        </div>
      </div>
    </main>
  );
}




