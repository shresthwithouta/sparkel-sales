"use client";

import { Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const { settings } = useSettings();
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const phone = settings?.phone || "+91 98310 12345";
  const address = settings?.address || "Kolkata, West Bengal, India";
  const topBarText = settings?.topBarText || "Under Spark Innovations";
  
  const socialLinks = [
    { icon: <Facebook size={12} />, url: settings?.social?.facebook, label: "Facebook" },
    { icon: <Instagram size={12} />, url: settings?.social?.instagram, label: "Instagram" },
    { icon: <Twitter size={12} />, url: settings?.social?.twitter, label: "Twitter" },
    { icon: <Youtube size={12} />, url: settings?.social?.youtube, label: "YouTube" },
    { icon: <Linkedin size={12} />, url: settings?.social?.linkedin, label: "LinkedIn" },
  ].filter(link => link.url);

  return (
    <div className="bg-slate-900 text-white py-1.5 border-b border-white/5 relative z-[60]">
      <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Side: Announcement / Text */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-brand-light">
            {topBarText}
          </span>
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-4">
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <Phone size={10} className="text-brand" />
              <a href={`tel:${phone}`} className="text-[9px] font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-1.5 group cursor-pointer">
              <MapPin size={10} className="text-brand" />
              <span className="text-[9px] font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider truncate max-w-[200px]">
                {address}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.length > 0 ? (
            <div className="flex items-center gap-3">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          ) : (
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">Follow Us</span>
          )}
        </div>
      </div>
    </div>
  );
}
