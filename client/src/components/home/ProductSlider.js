"use client";

import { useEffect, useState, useRef } from "react";
import { SAMPLE_PRODUCTS } from "@/lib/constants";
import { fetchProducts } from "@/lib/api";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts({ limit: 10 });
        const list = data?.products?.length > 0 ? data.products : SAMPLE_PRODUCTS;
        
        // Guarantee a minimum of 8 base items to fill space and ensure horizontal overflow even on 4K/ultrawide screens
        let baseList = [...list];
        while (baseList.length < 8) {
          baseList = [...baseList, ...list];
        }

        // Double the list for seamless infinite loop scroll
        const repeatedList = [...baseList, ...baseList];
        setProducts(repeatedList);
      } catch (error) {
        console.error("Error fetching products for slider:", error);
        let baseList = [...SAMPLE_PRODUCTS];
        while (baseList.length < 8) {
          baseList = [...baseList, ...SAMPLE_PRODUCTS];
        }
        const repeatedList = [...baseList, ...baseList];
        setProducts(repeatedList);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Smooth Auto-Scrolling using scrollLeft (allows manual scroll)
  useEffect(() => {
    if (loading || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    
    const animate = () => {
      if (!isPaused) {
        // Increment scrollLeft slightly every frame
        scrollContainer.scrollLeft += 0.8;
        
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const halfScroll = scrollContainer.scrollWidth / 2;
        // Safety threshold: loop back if we hit the half-way mark or get close to the scroll end
        const loopThreshold = Math.min(halfScroll, maxScroll - 5);

        if (scrollContainer.scrollLeft >= loopThreshold) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [loading, isPaused]);

  return (
    <section className="section-padding bg-slate-50/50 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-reveal">
          <SectionHeader 
            badge="Trending"
            title="Premium Selection"
            description="Our latest smart appliances, curated for the modern lifestyle."
            className="mb-0"
          />
          
          <Link href="/products" className="w-fit px-6 py-3 bg-brand-blue text-white font-black uppercase tracking-widest text-[9px] rounded-sm hover:bg-brand transition-all flex items-center gap-2">
            View All Products
          </Link>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex flex-nowrap gap-6 md:gap-8 overflow-x-auto pb-8 scrollbar-hide select-none cursor-grab active:cursor-grabbing"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'auto'
            }}
          >
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-square bg-slate-100 animate-pulse rounded-sm" />
              ))
            ) : (
              products.map((product, idx) => (
                <div 
                  key={`${product._id || product.slug}-${idx}`} 
                  className="min-w-[280px] md:min-w-[320px] shrink-0 transition-all duration-500 hover:scale-[1.03] hover:z-20"
                >
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
          
          {/* Side Gradients (Removed on small mobile to avoid "white box" issues) */}
          <div className="hidden md:block absolute top-0 left-0 h-full w-24 bg-linear-to-r from-slate-50/50 to-transparent pointer-events-none z-10" />
          <div className="hidden md:block absolute top-0 right-0 h-full w-24 bg-linear-to-l from-slate-50/50 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
