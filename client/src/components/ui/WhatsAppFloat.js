"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isDismissed]);


  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleClick = () => {
    window.open(
      `https://wa.me/918808409295?text=Hi! I'm interested in Kutchina products from Spark Innovations.`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex flex-col items-end group">
      {isVisible && (
        <div className="mb-4 bg-white/90 backdrop-blur-xl text-brand-blue p-4 rounded-sm shadow-2xl animate-reveal max-w-[200px] relative border border-slate-200">
          <button 
            onClick={() => { setIsVisible(false); setIsDismissed(true); }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-brand text-white flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <X size={10} />
          </button>
          <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand mb-1">Live Support</p>
          <p className="text-[11px] font-bold leading-tight">Expert advice & best deals on WhatsApp.</p>
        </div>
      )}

      <button
        onClick={handleClick}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-200 flex items-center justify-center transition-all hover:bg-brand group shadow-2xl hover:shadow-brand/40 active:scale-90 rounded-full"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={20} className="text-brand group-hover:text-white transition-colors md:w-[24px] md:h-[24px]" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-brand rounded-full animate-ping" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-brand rounded-full border-2 border-white" />
      </button>
    </div>
  );
}





