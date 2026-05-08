"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "@/lib/api";
import { SAMPLE_PRODUCTS } from "@/lib/constants";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ProductMarquee() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data && data.products && data.products.length > 0) {
          setProducts(data.products);
        } else {
          setProducts(SAMPLE_PRODUCTS);
        }
      } catch (error) {
        setProducts(SAMPLE_PRODUCTS);
      }
    };
    getProducts();
  }, []);

  const marqueeItems = [...products, ...products, ...products, ...products];

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      {}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <p className="text-[20rem] font-black whitespace-nowrap">NEW ARRIVALS • SMART LIVING • INNOVATION • </p>
      </div>

      <div className="flex whitespace-nowrap animate-marquee hover:pause py-4">
        {marqueeItems.map((product, idx) => (
          <Link 
            href={`/products/${product.slug}`}
            key={`${product.slug}-${idx}`} 
            className="inline-flex items-center gap-8 px-16 group relative"
          >
            {}
            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 blur-3xl transition-all duration-700 rounded-full scale-50 group-hover:scale-100"></div>
            
            <div className="relative z-10 flex items-center gap-8">
              <div className="relative w-24 h-24 bg-white rounded-2xl border border-slate-100 p-3 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                <Image 
                  src={product.images[0]} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-2"
                  sizes="96px"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={10} className="text-brand animate-pulse" />
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand transition-colors">
                    {product.category}
                  </p>
                </div>
                <h3 className="text-lg font-black text-brand-blue uppercase tracking-tighter group-hover:text-brand transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] font-bold text-slate-400 line-through">₹{(product.price * 1.2).toLocaleString("en-IN")}</span>
                  <span className="text-sm font-black text-brand">₹{product.price?.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200 mx-8 opacity-50"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}




