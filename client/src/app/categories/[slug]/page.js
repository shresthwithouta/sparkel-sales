"use client";

import { use, useState, useEffect } from "react";
import { fetchProducts, fetchCategories } from "@/lib/api";
import { CATEGORIES, SAMPLE_PRODUCTS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CategoryDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts({ category: slug }),
          fetchCategories()
        ]);
        
        if (categoriesData && categoriesData.categories && categoriesData.categories.length > 0) {
          const currentCat = categoriesData.categories.find(c => c.slug === slug);
          setCategory(currentCat || CATEGORIES.find(c => c.slug === slug));
        } else {
          setCategory(CATEGORIES.find(c => c.slug === slug));
        }
        
        if (productsData && productsData.products && productsData.products.length > 0) {
          setProducts(productsData.products);
        } else {
          setProducts(SAMPLE_PRODUCTS.filter(p => p.category === slug));
        }
      } catch (err) {
        console.error("Error loading category data:", err);
        setError("Failed to load category.");
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
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Category...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          All Products
        </Link>

        <SectionHeader 
          badge="Category"
          title={<>{category?.name || slug.replace(/-/g, " ")} <span className="text-brand">COLLECTION.</span></>}
          description={category?.description || `Explore our range of premium ${slug.replace(/-/g, " ")}.`}
        />

        {products.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12 mt-16">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-sm mt-16">
            <p className="text-slate-500 font-medium">No products found in this category.</p>
            <Link 
              href="/products"
              className="mt-4 inline-block text-brand font-black uppercase tracking-widest text-[10px]"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}








