"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Phone, Menu, X, ArrowRight, ShoppingBag, User, Heart, MessageSquare } from "lucide-react";
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
  const { cartCount, cartItems } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "py-2 shadow-sm" : "py-3 md:py-4"
      } border-b border-slate-50`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 relative flex items-center justify-center">
              <Image src="/favicon.ico" alt="Spark Innovations Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black uppercase tracking-tighter">
                Spark <span className="text-brand">Innovations</span>
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group/nav">
                {link.isDropdown ? (
                  <>
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand transition-colors py-2 flex items-center gap-1">
                      {link.label}
                      <span className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity" />
                    </button>
                    
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
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 text-center">Loading...</p>
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

          <div className="hidden lg:flex items-center gap-6">
            {mounted && (
              <>
                <Link 
                  href={isAuthenticated ? "/wishlist" : "/auth/login?redirect=/wishlist"} 
                  className="relative text-brand-blue hover:text-brand transition-colors" 
                >
                  <Heart size={18} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-brand text-white text-[8px] font-bold flex items-center justify-center rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </Link>

                <div className="relative group">
                  <Link href="/cart" className="relative text-brand-blue hover:text-brand transition-colors block py-1" aria-label={`View Shopping Cart (${cartCount} items)`}>
                    <ShoppingBag size={18} />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-2 w-4 h-4 bg-brand text-white text-[8px] font-bold flex items-center justify-center rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                  
                  {/* Cart Dropdown Hover Card */}
                  <div className="absolute right-0 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                    <div className="w-80 bg-white border border-slate-100 shadow-2xl rounded-sm p-6">
                      <h3 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] mb-4 pb-2 border-b border-slate-50">Shopping Cart</h3>
                      
                      {cartItems.length > 0 ? (
                        <>
                          <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar space-y-4 mb-6">
                            {cartItems.map((item) => (
                              <div key={item.slug} className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden shrink-0">
                                  <Image src={item.images?.[0] || item.image || "/images/placeholder.png"} alt={item.name} fill className="object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-black text-brand-blue uppercase leading-tight truncate mb-1">{item.name}</p>
                                  <div className="flex justify-between items-center">
                                    <p className="text-[9px] text-slate-400 font-bold">QTY: {item.quantity}</p>
                                    <p className="text-[10px] font-black text-brand">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="space-y-3">
                            <Link 
                              href="/cart" 
                              className="w-full block text-center py-3 border border-slate-200 text-brand-blue font-black uppercase tracking-widest text-[9px] hover:bg-slate-50 transition-colors"
                            >
                              View Cart
                            </Link>
                            <Link 
                              href="/checkout" 
                              className="w-full block text-center py-3 bg-brand-blue text-white font-black uppercase tracking-widest text-[9px] hover:bg-brand transition-colors"
                            >
                              Checkout
                            </Link>
                          </div>
                        </>
                      ) : (
                        <div className="py-8 text-center">
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your cart is empty</p>
                          <Link href="/products" className="text-[10px] font-black text-brand uppercase underline mt-2 block">Start Shopping</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}

            {mounted && isAuthenticated ? (
              <Link href="/me" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-brand-dark flex items-center justify-center bg-brand text-white">
                  {user?.avatar ? (
                    <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                  ) : (
                    <User size={14} />
                  )}
                </div>
              </Link>
            ) : (
              <Link 
                href="/auth/login"
                className="text-[9px] font-bold uppercase tracking-widest text-brand-blue hover:text-brand transition-colors"
              >
                Login
              </Link>
            )}

            <Link 
              href="/inquiry"
              className="px-5 py-2 bg-brand text-white font-bold uppercase tracking-widest text-[9px] rounded-sm hover:bg-brand-dark transition-all"
            >
              Inquiry
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-brand-blue"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-[60] transition-all duration-500 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col min-h-full p-8 pt-24 pb-12 relative">
          {/* Close Button Inside Menu */}
          <button
            className="absolute top-6 right-6 p-2 text-brand-blue bg-slate-50 rounded-full"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          <div className="space-y-6">
            <p className="text-slate-500 font-black uppercase tracking-[0.4em] text-[8px] mb-6">Menu</p>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.isDropdown ? (
                  <div className="space-y-4">
                    <button 
                      onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                      className="w-full flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-brand"
                    >
                      {link.label}
                      <ArrowRight size={14} className={`transition-transform duration-300 ${mobileCategoriesOpen ? 'rotate-90 text-brand' : ''}`} />
                    </button>
                    
                    <div className={`grid gap-4 pl-4 border-l-2 border-slate-50 overflow-hidden transition-all duration-300 ${mobileCategoriesOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/categories/${cat.slug}`}
                          className="text-2xl font-black text-brand-blue uppercase tracking-tight block hover:text-brand transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="text-3xl font-black text-brand-blue uppercase tracking-tighter block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col gap-3">
            <Link 
              href="/cart"
              className="flex items-center justify-between bg-slate-50 p-4 rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-brand" />
                <span className="font-black text-brand-blue uppercase tracking-tight text-sm">Shopping Cart ({cartCount})</span>
              </div>
              <ArrowRight size={16} className="text-slate-300" />
            </Link>

            <Link 
              href={isAuthenticated ? "/wishlist" : "/auth/login?redirect=/wishlist"}
              className="flex items-center justify-between bg-slate-50 p-4 rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <Heart size={20} className="text-rose-400" />
                <span className="font-black text-brand-blue uppercase tracking-tight text-sm">My Wishlist ({wishlistCount})</span>
              </div>
              <ArrowRight size={16} className="text-slate-300" />
            </Link>
            
            <Link 
              href="/inquiry"
              className="flex items-center justify-between bg-brand text-white p-4 rounded-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-3">
                <MessageSquare size={20} />
                <span className="font-black uppercase tracking-tight text-sm">Quick Inquiry</span>
              </div>
              <ArrowRight size={16} />
            </Link>

            {isAuthenticated ? (
              <Link 
                href="/me"
                className="flex items-center justify-between bg-slate-50 p-4 rounded-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <User size={20} className="text-slate-400" />
                  <span className="font-black text-brand-blue uppercase tracking-tight text-sm">My Account</span>
                </div>
                <ArrowRight size={16} className="text-slate-300" />
              </Link>
            ) : (
              <Link 
                href="/auth/login"
                className="flex items-center justify-center bg-brand-blue text-white p-4 rounded-sm font-black uppercase tracking-widest text-[10px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login to Account
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
