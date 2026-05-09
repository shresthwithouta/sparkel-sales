"use client";

import { useState, useEffect } from "react";
import { fetchProducts, fetchCategories } from "@/lib/api";
import { SAMPLE_PRODUCTS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import { Search, Loader2 } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const params = { limit: 12, page: 1 };
        if (selectedCategory !== "all") params.category = selectedCategory;
        if (debouncedSearchQuery) params.search = debouncedSearchQuery;

        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(params),
          fetchCategories()
        ]);
        
        if (productsData && productsData.products && productsData.products.length > 0) {
          setProducts(productsData.products);
          setHasMore(productsData.page < productsData.pages);
        } else {
          // Fallback to sample products matching the category if any
          const fallback = selectedCategory === "all" 
            ? SAMPLE_PRODUCTS 
            : SAMPLE_PRODUCTS.filter(p => p.category === selectedCategory);
          setProducts(fallback);
          setHasMore(false);
        }
        setPage(1);
        setCategories(categoriesData.categories || []);
        setError(null);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCategory, debouncedSearchQuery]);

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const params = { limit: 12, page: nextPage };
      if (selectedCategory !== "all") params.category = selectedCategory;
      if (debouncedSearchQuery) params.search = debouncedSearchQuery;
      
      const productsData = await fetchProducts(params);
      
      setProducts(prev => [...prev, ...(productsData.products || [])]);
      setHasMore(productsData.page < productsData.pages);
      setPage(nextPage);
    } catch (err) {
      console.error("Failed to load more products:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 md:pt-40 pb-20">
      <div className="container-wide">
        <SectionHeader 
          badge="Product Catalogue"
          title={<>DISCOVER OUR <span className="text-brand">COLLECTION.</span></>}
          description="Explore our wide range of premium kitchen appliances designed for excellence."
        />

        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start lg:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                selectedCategory === "all" 
                ? "bg-brand-blue text-white" 
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  selectedCategory === cat.slug 
                  ? "bg-brand-blue text-white" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
            {[...Array(8)].map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-20 border border-dashed border-red-100 rounded-sm bg-red-50/30">
            <p className="text-red-500 font-medium">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-brand font-black uppercase tracking-widest text-[10px]"
            >
              Retry Connection
            </button>
          </div>
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            {hasMore && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="px-8 py-3 bg-slate-100 text-brand-blue font-black uppercase tracking-widest text-[10px] rounded-sm hover:bg-slate-200 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {loadingMore ? (
                    <><Loader2 className="animate-spin" size={14} /> Loading...</>
                  ) : (
                    "Load More Products"
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-sm">
            <p className="text-slate-500 font-medium">No products found matching your criteria.</p>
            <button 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="mt-4 text-brand font-black uppercase tracking-widest text-[10px]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}




