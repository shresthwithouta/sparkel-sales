"use client";

import { Bell, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="inquiry" className="section-padding bg-white border-t border-slate-100">
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-reveal">
          <div className="space-y-4">
            <p className="text-brand font-bold uppercase tracking-widest text-xs">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight tracking-tight">
              Ready to Upgrade Your Kitchen?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation or visit our showroom to experience the latest Kutchina smart appliances.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-10 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-brand transition-all shadow-xl shadow-brand-blue/10"
            >
              Call Now: {SITE_CONFIG.phone}
            </a>
            <button className="px-10 py-4 border border-slate-200 text-brand-blue font-bold uppercase tracking-widest text-xs rounded hover:bg-slate-50 transition-all">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}









