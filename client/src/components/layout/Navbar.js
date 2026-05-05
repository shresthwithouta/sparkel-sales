"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Phone, Menu, X, ArrowRight, ShoppingBag, User, Heart } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/contexts/WishlistContext";

import { usePathname } from "next/navigation";
import { fetchCategories } from "@/lib/api";

export default function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        if (data && data.categories) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error("Error loading categories for navbar:", error);
      }
    };
    
    loadCategories();
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
            <div className="w-8 h-8 relative flex items-center justify-center">
              <Image src="/favicon.ico" alt="Spark Innovations Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black uppercase tracking-tighter">
                Spark <span className="text-brand">Innovations</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group/nav">
                {link.isDropdown ? (
                  <>
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand transition-colors py-2 flex items-center gap-1">
                      {link.label}
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity" />
                    </button>
                    
                    {}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-4 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-300 z-50">
                      <div className="bg-white border border-slate-100 shadow-2xl rounded-sm p-6 min-w-[240px]">
                        <div className="grid gap-4">
                          {categories.length > 0 ? (
                            categories.map((cat) => (
                              <Link 
                                key={cat.slug} 
                                href={`/categories/${cat.slug}`}
                                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors flex items-center justify-between group/cat"
                              >
                                {cat.name}
                                <ArrowRight size={12} className="opacity-0 -translate-x-2 transition-all group-hover/cat:opacity-100 group-hover/cat:translate-x-0" />
                              </Link>
                            ))
                          ) : (
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 text-center">Loading Categories...</p>
                          )}
                          <div className="pt-4 border-t border-slate-50">
                            <Link href="/products" className="text-[9px] font-black uppercase tracking-widest text-brand-blue hover:text-brand flex items-center gap-2">
                              View All Collection <ArrowRight size={10} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand transition-colors py-2 block"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {mounted && (
              <>
                <Link 
                  href={isAuthenticated ? "/wishlist" : "/auth/login?redirect=/wishlist"} 
                  className="relative text-brand-blue hover:text-brand transition-colors" 
                  aria-label={`View Wishlist (${wishlistCount} items)`}
                >
                  <Heart size={20} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <div className="relative group/cart">
                  <Link href="/cart" className="relative text-brand-blue hover:text-brand transition-colors block py-2" aria-label={`View Shopping Cart (${cartCount} items)`}>
                    <ShoppingBag size={20} />
                    {cartCount > 0 && (
                      <span className="absolute -top-0 -right-2 w-5 h-5 bg-brand text-white text-[9px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  
                  {}
                  <div className="absolute right-0 top-full pt-4 opacity-0 invisible translate-y-4 group-hover/cart:opacity-100 group-hover/cart:visible group-hover/cart:translate-y-0 transition-all duration-300 z-50">
                    <div className="w-80 bg-white border border-slate-100 shadow-2xl rounded-sm overflow-hidden">
                      <div className="p-4 bg-slate-50 border-b border-slate-100">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Shopping Bag ({cartCount})</p>
                      </div>
                      <div className="max-h-80 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                        {cartCount === 0 ? (
                          <p className="text-center py-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your bag is empty</p>
                        ) : (
                          useCart().cartItems.map((item) => (
                            <div key={item.slug} className="flex gap-4 group/item">
                              <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden shrink-0">
                                <Image src={item.images?.[0] || item.image} alt={item.name} fill className="object-contain p-2" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-black text-brand-blue uppercase leading-tight mb-1 truncate">{item.name}</p>
                                <div className="flex justify-between items-center">
                                  <p className="text-[10px] text-slate-400 font-bold">QTY: {item.quantity}</p>
                                  <p className="text-[10px] font-black text-brand">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      {cartCount > 0 && (
                        <div className="p-4 bg-white border-t border-slate-100 space-y-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total</span>
                            <span className="text-sm font-black text-brand-blue uppercase tracking-tight">₹{useCart().cartTotal.toLocaleString("en-IN")}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <Link 
                              href="/cart" 
                              className="w-full bg-slate-100 text-brand-blue py-3 px-4 rounded-sm font-black uppercase tracking-widest text-[9px] text-center hover:bg-slate-200 transition-all"
                            >
                              View Cart
                            </Link>
                            <Link 
                              href="/checkout" 
                              className="w-full bg-brand-blue text-white py-3 px-4 rounded-sm font-black uppercase tracking-widest text-[9px] text-center hover:bg-brand transition-all shadow-lg shadow-brand-blue/10"
                            >
                              Checkout
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            {mounted && isAuthenticated ? (
              <div className="flex items-center gap-4">
                {user?.role === 'admin' && (
                  <Link 
                    href="/admin" 
                    className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <Link href="/me" className="flex items-center gap-2" title={`My Dashboard - ${user?.name}`}>
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-brand-dark hover:border-brand transition-colors flex items-center justify-center bg-brand text-white shadow-sm">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={16} />
                    )}
                  </div>
                </Link>
              </div>
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
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
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
        <div className="flex flex-col h-full justify-between p-8 pt-24 pb-32">
          <div className="space-y-4">
            <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[8px] mb-8">Navigation</p>
            {NAV_LINKS.map((link, i) => (
              <div 
                key={link.label}
                className={`transform transition-all duration-700 delay-[${i * 100}ms] ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                {link.isDropdown ? (
                  <div className="space-y-4">
                    <p className="text-3xl font-black text-brand-blue uppercase tracking-tighter">{link.label}</p>
                    <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-brand/20">
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/categories/${cat.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-black text-slate-400 uppercase tracking-widest hover:text-brand transition-colors flex items-center justify-between"
                        >
                          {cat.name}
                          <ArrowRight size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-black text-brand-blue uppercase tracking-tighter hover:text-brand transition-colors flex items-center justify-between group"
                  >
                    {link.label}
                    <ArrowRight className="opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={24} />
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className={`space-y-8 transform transition-all duration-700 delay-500 ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 font-black uppercase tracking-widest text-[8px] mb-4">Connect With Us</p>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-2xl font-black text-brand-blue hover:text-brand transition-colors">{SITE_CONFIG.phone}</a>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-6 py-3 z-50 flex items-center justify-between safe-area-pb shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
        <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' ? 'text-brand' : 'text-slate-400'}`}>
          <div className={`p-1.5 rounded-xl transition-all ${pathname === '/' ? 'bg-brand/10' : ''}`}>
            <User size={18} className="rotate-0" /> {}
            <div className="w-18 h-18 relative">
              <ShoppingBag size={18} className={pathname === '/' ? 'hidden' : 'block'} />
              {pathname === '/' && <ArrowRight size={18} className="rotate-180" />}
            </div>
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Home</span>
        </Link>

        <Link href="/products" className={`flex flex-col items-center gap-1 ${pathname === '/products' ? 'text-brand' : 'text-slate-400'}`}>
          <div className={`p-1.5 rounded-xl transition-all ${pathname === '/products' ? 'bg-brand/10' : ''}`}>
            <ShoppingBag size={18} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Catalogue</span>
        </Link>

        <Link href="/cart" className={`flex flex-col items-center gap-1 ${pathname === '/cart' ? 'text-brand' : 'text-slate-400'} relative`}>
          <div className={`p-1.5 rounded-xl transition-all ${pathname === '/cart' ? 'bg-brand/10' : ''}`}>
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand text-white text-[7px] font-black flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Cart</span>
        </Link>

        <Link href="/me" className={`flex flex-col items-center gap-1 ${pathname === '/me' ? 'text-brand' : 'text-slate-400'}`}>
          <div className={`p-1.5 rounded-xl transition-all ${pathname === '/me' ? 'bg-brand/10' : ''}`}>
            <User size={18} />
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">Profile</span>
        </Link>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex flex-col items-center gap-1 ${mobileMenuOpen ? 'text-brand' : 'text-slate-400'}`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${mobileMenuOpen ? 'bg-brand/10' : ''}`}>
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </div>
          <span className="text-[7px] font-black uppercase tracking-widest">More</span>
        </button>
      </div>
    </nav>
  );
}






