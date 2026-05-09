"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollInterval = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts({ limit: 12 });
        if (data && data.products && data.products.length > 0) {
          // Double the products to create a seamless loop
          setProducts([...data.products, ...data.products]);
        } else {
          setProducts([...SAMPLE_PRODUCTS, ...SAMPLE_PRODUCTS]);
        }
      } catch (error) {
        console.error("Error fetching products for slider:", error);
        setProducts([...SAMPLE_PRODUCTS, ...SAMPLE_PRODUCTS]);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Automatic Smooth Scroll Logic
  useEffect(() => {
    if (loading || isPaused || !scrollRef.current) return;

    const startScrolling = () => {
      scrollInterval.current = setInterval(() => {
        if (!scrollRef.current) return;
        
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // If we've reached the halfway point (end of the first set of products)
        // Reset to start instantly without animation for seamless loop
        if (scrollLeft >= (scrollWidth / 2)) {
          scrollRef.current.scrollTo({ left: 1, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }, 30); // Higher interval + small step = ultra smooth
    };

    startScrolling();

    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, [loading, isPaused]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.6 
        : scrollLeft + clientWidth * 0.6;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 border border-slate-200 flex items-center justify-center rounded-full hover:bg-brand hover:text-white hover:border-brand transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 border border-slate-200 flex items-center justify-center rounded-full hover:bg-brand hover:text-white hover:border-brand transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <Link href="/products" className="px-6 py-3 bg-brand-blue text-white font-black uppercase tracking-widest text-[9px] rounded-sm hover:bg-brand transition-all flex items-center gap-2">
              All Products
            </Link>
          </div>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 scrollbar-hide select-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {loading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-[4/5] bg-slate-100 animate-pulse rounded-sm" />
              ))
            ) : (
              products.map((product, idx) => (
                <div key={`${product._id || product.slug}-${idx}`} className="min-w-[280px] md:min-w-[320px] shrink-0">
                  <ProductCard product={product} />
                </div>
              ))
            )}
          </div>
          
          {/* Side Gradients */}
          <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-slate-50/50 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-slate-50/50 to-transparent pointer-events-none z-10" />
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
