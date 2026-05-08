"use client";
import { Phone, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();


  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-br from-brand-blue to-[#051c36] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand via-brand-blue to-brand" />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
             backgroundSize: '32px 32px'
           }} />
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-24">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-default">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image src="/favicon.ico" alt="Spark Innovations Logo" fill className="object-contain" sizes="40px" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">
                Spark <span className="text-brand">Innovations</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brand mb-10">Support</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-5 cursor-default">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-brand/60 mb-1">Direct Call</p>
                  <p className="font-black text-white">{SITE_CONFIG.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-5 cursor-default">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-brand/60 mb-1">Email Inquiry</p>
                  <p className="font-black text-white">{SITE_CONFIG.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-brand mb-10">Authorized Partner</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Spark Innovations is a certified premium distributor of Kutchina appliances. 
              Bringing world-class kitchen technology to your doorstep with expert support.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] text-center md:text-left">
            © {currentYear} Spark Innovations | All Rights Reserved
          </p>
          <div className="flex items-center gap-12">
            <div className="flex gap-12">
              <Link href="/terms" className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-400 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-brand hover:bg-brand-dark flex items-center justify-center rounded-full transition-all duration-300 shadow-lg shadow-brand/20 group"
            >
              <ArrowUp size={16} className="text-white transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}




