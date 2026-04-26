"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProductBySlug } from "@/lib/api";
import { ArrowLeft, Check, IndianRupee, MessageSquare, Phone, ShieldCheck, Zap, Loader2 } from "lucide-react";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductBySlug(slug);
        setProduct(data.product);
      } catch (err) {
        console.error("Error loading product:", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
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
                {product.category?.replace("-", " ")}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-brand-blue uppercase leading-tight mb-6 tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 text-brand font-black text-4xl mb-8">
                <IndianRupee size={28} strokeWidth={4} />
                <span>{product.price?.toLocaleString("en-IN")}</span>
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

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <button className="flex-1 bg-brand-blue text-white py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand transition-all group">
                <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                Inquire Now
              </button>
              <button className="flex-1 border-2 border-brand-blue text-brand-blue py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all group">
                <Phone size={18} />
                Contact Sales
              </button>
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
                <button className="w-full bg-brand py-4 px-6 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-brand-blue transition-all">
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
    </main>
  );
}

