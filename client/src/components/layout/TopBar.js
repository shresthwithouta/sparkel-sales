"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";
import { usePathname } from "next/navigation";

// Custom SVG Brand Icons since they are missing in the current lucide-react version
const FacebookIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const YoutubeIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);
const LinkedinIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function TopBar() {
  const { settings } = useSettings();
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const phone = settings?.phone || "";
  const email = settings?.email || "";
  const address = settings?.address || "";
  const topBarText = settings?.topBarText || "";
  
  const socialLinks = [
    { icon: <FacebookIcon size={12} />, url: settings?.social?.facebook, label: "Facebook" },
    { icon: <InstagramIcon size={12} />, url: settings?.social?.instagram, label: "Instagram" },
    { icon: <TwitterIcon size={12} />, url: settings?.social?.twitter, label: "Twitter" },
    { icon: <YoutubeIcon size={12} />, url: settings?.social?.youtube, label: "YouTube" },
    { icon: <LinkedinIcon size={12} />, url: settings?.social?.linkedin, label: "LinkedIn" },
  ].filter(link => link.url);

  return (
    <div className="bg-linear-to-r from-brand-blue to-[#051c36] text-white py-1.5 md:py-2.5 border-b border-white/5 relative z-60">
      <div className="container-wide flex flex-row justify-between items-center gap-4">
        {/* Left Side: Contact Info & Announcement */}
        <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <span className="w-1 h-1 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">
              {topBarText}
            </span>
          </div>
          
          <div className="flex items-center gap-3 md:gap-8 lg:border-l lg:border-white/10 lg:pl-8">
            <div className="flex items-center gap-1.5 group cursor-pointer shrink-0">
              <Phone size={11} className="text-brand" />
              <a href={`tel:${phone}`} className="text-[10px] md:text-xs font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider whitespace-nowrap">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-1.5 group cursor-pointer shrink-0">
              <Mail size={11} className="text-brand" />
              <a href={`mailto:${email}`} className="text-[10px] md:text-xs font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider whitespace-nowrap">
                {email}
              </a>
            </div>
            <div className="hidden xl:flex items-center gap-1.5 group cursor-pointer shrink-0">
              <MapPin size={11} className="text-brand" />
              <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors tracking-wider truncate max-w-50">
                {address}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="hidden sm:flex items-center shrink-0">
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-3">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-brand transition-all duration-300 hover:-translate-y-0.5 border border-white/5"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
