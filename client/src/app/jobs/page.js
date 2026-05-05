"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export default function JobsPage() {
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
              <button className="bg-brand-blue text-white py-4 px-8 rounded-sm font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-brand transition-all shrink-0">
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

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




