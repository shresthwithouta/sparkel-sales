"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { fetchProducts } from "@/lib/api";
import { SAMPLE_PRODUCTS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts({ featured: true });
        let list = data?.products;

        // If no featured products exist in the database, fetch regular products to keep section populated
        if (!list || list.length === 0) {
          const allProductsData = await fetchProducts({ limit: 10 });
          list = allProductsData?.products;
        }

        // If still no products, use high-quality fallback products
        if (!list || list.length === 0) {
          list = SAMPLE_PRODUCTS;
        }

        // Guarantee a minimum of 8 base items to fill space and ensure horizontal overflow even on 4K/ultrawide screens
        let baseList = [...list];
        while (baseList.length < 8) {
          baseList = [...baseList, ...list];
        }

        // Double the list for seamless infinite loop scroll
        const repeatedList = [...baseList, ...baseList];
        setProducts(repeatedList);
      } catch (error) {
        console.error("Error fetching featured products:", error);
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

  // Smooth Auto-Scrolling using scrollLeft
  useEffect(() => {
    if (loading || !scrollRef.current || products.length === 0) return;

    const scrollContainer = scrollRef.current;
    
    const animate = () => {
      if (!isPaused) {
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
  }, [loading, isPaused, products.length]);

  if (!loading && products.length === 0) {
    return null; // Premium layout hides cleanly if empty
  }

  return (
    <section className="section-padding bg-white border-t border-slate-200 overflow-hidden">
      <div className="container-wide">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader 
            badge="Best Sellers"
            title={<>FEATURED <br className="hidden md:block" /><span className="text-brand">INNOVATIONS.</span></>}
            description="Explore our best-selling smart appliances designed for the modern Indian kitchen."
            className="mb-0"
          />
          <Link href="/products" className="hidden md:flex items-center gap-3 text-brand-blue font-black uppercase tracking-widest text-[10px] cursor-pointer group opacity-60 hover:opacity-100 transition-opacity">
            View All Products
            <div className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-full group-hover:bg-brand-blue group-hover:text-white transition-all">
              <ArrowRight size={14} />
            </div>
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
              [...Array(4)].map((_, i) => (
                <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-square bg-slate-50 animate-pulse rounded-sm" />
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
          
          {/* Fading Gradients */}
          <div className="hidden md:block absolute top-0 left-0 h-full w-24 bg-linear-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="hidden md:block absolute top-0 right-0 h-full w-24 bg-linear-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/products" className="block w-full py-4 bg-brand-blue border border-brand-blue/20 text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm">
            View All Products
          </Link>
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
