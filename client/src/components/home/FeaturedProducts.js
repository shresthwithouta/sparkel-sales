"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, IndianRupee } from "lucide-react";
import { SAMPLE_PRODUCTS } from "@/lib/constants";
import { fetchProducts } from "@/lib/api";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts({ featured: true });
        if (data && data.products && data.products.length > 0) {
          setProducts(data.products.slice(0, 4));
        } else {
          setProducts(SAMPLE_PRODUCTS.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(SAMPLE_PRODUCTS.slice(0, 4));
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="section-padding bg-white border-t border-slate-200">
      <div className="container-wide">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-slate-50 animate-pulse rounded-sm"></div>
            ))
          ) : (
            products.map((product, idx) => (
              <div key={product.slug || product._id} className={`animate-reveal delay-${(idx + 1) * 100}`}>
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/products" className="block w-full py-4 bg-brand-blue border border-brand-blue/20 text-white text-center font-black uppercase tracking-widest text-[10px] rounded-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}




