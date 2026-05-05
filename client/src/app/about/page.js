"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { Award, Shield, Users, Zap } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Shield size={24} />,
      title: "Trusted Quality",
      description: "As authorized Kutchina distributors, we guarantee 100% authentic products with official warranties."
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Service",
      description: "Quick delivery and professional installation services to get your kitchen running in no time."
    },
    {
      icon: <Users size={24} />,
      title: "Expert Advice",
      description: "Our consultants help you choose the right appliances tailored to your specific kitchen needs."
    },
    {
      icon: <Award size={24} />,
      title: "After-Sales Support",
      description: "Comprehensive maintenance and support for all products purchased through our distribution center."
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <SectionHeader 
          badge="About Us"
          title={<>YOUR TRUSTED <span className="text-brand">KUTCHINA PARTNER.</span></>}
          description="Spark Innovations is a leading distributor of premium kitchen appliances, bringing innovation and style to Indian homes."
        />

        {}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="relative aspect-[4/3] bg-slate-100 rounded-sm overflow-hidden border border-slate-200">
             <div className="absolute inset-0 flex items-center justify-center bg-brand-blue/5">
                <span className="text-brand-blue/10 text-9xl font-black">SPARK</span>
             </div>
             <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Kitchen"
                fill
                className="object-cover mix-blend-multiply opacity-80"
             />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-brand-blue uppercase tracking-tight leading-tight">
              ESTABLISHING EXCELLENCE <br />IN KITCHEN SOLUTIONS.
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Spark Innovations was founded with a mission to simplify kitchen management for Indian households. We believe that a kitchen is the heart of a home, and it deserves the best technology.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Over the years, we have grown into a trusted name for Kutchina products, serving thousands of satisfied customers across the region. Our commitment to quality and service has made us the preferred choice for homeowners and interior designers alike.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-3xl font-black text-brand mb-1">500+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Products Delivered</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-brand mb-1">100%</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Authenticity Guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="bg-brand-blue text-white rounded-sm p-12 lg:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-16 text-center">OUR CORE VALUES</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {values.map((value, index) => (
                <div key={index} className="space-y-4 text-center group">
                  <div className="w-16 h-16 bg-white/10 text-brand flex items-center justify-center rounded-full mx-auto group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    {value.icon}
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest">{value.title}</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </div>
    </main>
  );
}




