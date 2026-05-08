"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductBySlug } from "@/lib/api";
import { SITE_CONFIG, SAMPLE_PRODUCTS } from "@/lib/constants";
import { ArrowLeft, Check, IndianRupee, MessageSquare, Phone, ShieldCheck, Zap, Loader2, Heart, ShoppingBag, Plus, Minus } from "lucide-react";
import { notFound } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import InquiryModal from "@/components/ui/InquiryModal";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const [settings, setSettings] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productData, settingsData] = await Promise.all([
          fetchProductBySlug(slug),
          import("@/lib/api").then(m => m.fetchSiteSettings())
        ]);
        
        if (productData && productData.product) {
          setProduct(productData.product);
        } else {
          const fallback = SAMPLE_PRODUCTS.find(p => p.slug === slug);
          if (fallback) {
            setProduct(fallback);
          } else {
            setError("Product not found");
          }
        }
        
        if (settingsData) {
          setSettings(settingsData.settings);
        }
      } catch (err) {
        console.error("Error loading product data:", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-brand" size={40} />
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Product...</p>
      </div>
    );
  }

  if (error || !product) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand transition-colors mb-8 md:mb-12"
        >
          <ArrowLeft size={14} />
          Back to Catalogue
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-4">
            <div className="relative aspect-square bg-white border border-slate-200 rounded-sm overflow-hidden p-8 md:p-16">
                <Image
                  src={product.images?.[0] || "/images/placeholder-product.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images?.map((img, i) => (
                <div key={i} className={`aspect-square bg-slate-50 border rounded-sm flex items-center justify-center p-2 cursor-pointer transition-all hover:border-brand ${i === 0 ? 'border-brand' : 'border-slate-200'}`}>
                  <Image src={img} alt={`${product.name} ${i}`} width={60} height={60} className="object-contain opacity-50" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-8 md:mb-12">
              <span className="px-3 py-1 bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest rounded-full mb-4 inline-block">
                {product.category?.replace(/-/g, " ")}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-brand-blue uppercase leading-tight mb-6 tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-2 text-brand font-black text-4xl">
                  <IndianRupee size={28} strokeWidth={4} />
                  <span>{product.price?.toLocaleString("en-IN")}</span>
                </div>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-sm border transition-all ${
                    isInWishlist(product.slug) 
                    ? "bg-red-50 border-red-100 text-red-500" 
                    : "bg-slate-50 border-slate-100 text-slate-400 hover:text-red-500"
                  }`}
                >
                  <Heart size={24} fill={isInWishlist(product.slug) ? "currentColor" : "none"} />
                </button>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-sm">
                <div className="w-10 h-10 bg-brand-blue text-white flex items-center justify-center rounded-sm shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-1">Authentic Product</h4>
                  <p className="text-xs text-slate-500 font-medium">Genuine Kutchina Warranty</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-sm">
                <div className="w-10 h-10 bg-brand text-white flex items-center justify-center rounded-sm shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-blue mb-1">Fast Delivery</h4>
                  <p className="text-xs text-slate-500 font-medium">Professional Installation</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center border border-slate-200 rounded-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-slate-50 transition-colors text-slate-400"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-black text-brand-blue">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-slate-50 transition-colors text-slate-400"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart({ ...product, quantity })}
                  className="flex-1 bg-brand text-white py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 group"
                >
                  <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                  Add to Cart
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="flex-1 bg-brand-blue text-white py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand transition-all group"
                >
                  <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                  Inquire Now
                </button>
                <a 
                  href={`tel:${(settings?.phone || SITE_CONFIG.phone).replace(/[^\d+]/g, '')}`}
                  className="flex-1 border-2 border-brand-blue text-brand-blue py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all group"
                >
                  <Phone size={18} />
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 border-t border-slate-100 pt-20">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-brand-blue uppercase tracking-tight mb-8">Technical Specifications</h2>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {product.specs?.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-slate-100">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{spec.label}</span>
                    <span className="text-sm font-bold text-brand-blue">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-blue text-white p-10 rounded-sm relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase tracking-tight mb-4">Interested in this product?</h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">
                  Our sales experts will help you find the perfect fit for your kitchen and provide the best pricing.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Free Consultation', 'Bulk Discount Available', 'Expert Installation'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                      <Check size={14} className="text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="w-full bg-brand py-4 px-6 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-brand-blue transition-all"
                >
                  Request Call Back
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <MessageSquare size={200} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InquiryModal 
        isOpen={isInquiryModalOpen} 
        onClose={() => setIsInquiryModalOpen(false)} 
        product={product} 
      />
    </main>
  );
}


