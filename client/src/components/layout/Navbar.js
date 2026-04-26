"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight, ShoppingBag, User } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "py-3 shadow-md" : "py-6"
      } border-b border-slate-100`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-brand flex items-center justify-center rounded">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand-blue uppercase tracking-tighter leading-none">
                Sparkel<span className="text-brand">Sales</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href || "#"}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/cart" className="relative text-brand-blue hover:text-brand transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <Link href="/me" className="flex items-center gap-2" title={`My Dashboard - ${user?.name}`}>
                <div className="w-8 h-8 bg-brand text-white rounded-full flex items-center justify-center border-2 border-brand-dark hover:bg-brand-dark transition-colors">
                  <User size={16} />
                </div>
              </Link>
            ) : (
              <Link 
                href="/auth/login"
                className="text-[10px] font-bold uppercase tracking-widest text-brand-blue hover:text-brand transition-colors"
              >
                Login
              </Link>
            )}

            <button className="px-6 py-2 bg-brand text-white font-bold uppercase tracking-widest text-[9px] rounded hover:bg-brand-dark transition-all">
              Inquiry
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-brand-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full justify-between p-8 pt-24">
          <div className="space-y-4">
            <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[8px] mb-8">Navigation</p>
            <div 
              className={`transform transition-all duration-700 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black text-brand uppercase tracking-tighter hover:text-brand-blue transition-colors flex items-center justify-between group"
              >
                Cart ({cartCount})
                <ShoppingBag className="opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={24} />
              </Link>
            </div>
            {NAV_LINKS.map((link, i) => (
              <div 
                key={link.label}
                className={`transform transition-all duration-700 delay-[${i * 100}ms] ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <Link
                  href={link.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black text-brand-blue uppercase tracking-tighter hover:text-brand transition-colors flex items-center justify-between group"
                >
                  {link.label}
                  <ArrowRight className="opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={24} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className={`space-y-8 transform transition-all duration-700 delay-500 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 font-black uppercase tracking-widest text-[8px] mb-4">Connect With Us</p>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-2xl font-black text-brand-blue hover:text-brand transition-colors">{SITE_CONFIG.phone}</a>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {isAuthenticated ? (
                  <>
                    <Link 
                      href="/me"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-4 bg-brand-blue text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm shadow-lg"
                    >
                      My Account
                    </Link>
                    {user?.role === 'admin' && (
                      <Link 
                        href="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-4 bg-slate-800 text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm shadow-lg"
                      >
                        Admin Panel
                      </Link>
                    )}
                    {user?.role !== 'admin' && (
                      <button 
                        onClick={() => {
                          logout()
                          setMobileMenuOpen(false)
                        }}
                        className="py-4 bg-red-600 text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm shadow-lg"
                      >
                        Logout
                      </button>
                    )}
                  </>
                ) : (
                  <Link 
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-4 bg-brand-blue text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm shadow-lg col-span-2"
                  >
                    Login / Register
                  </Link>
                )}
                <div className="py-4 bg-brand text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm cursor-pointer shadow-lg shadow-brand/20 {user?.role !== 'admin' ? 'col-span-2' : ''}">
                  Request Quote
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}





