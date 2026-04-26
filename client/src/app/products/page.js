"use client";

import { useState, useEffect } from "react";
import { fetchProducts, fetchCategories } from "@/lib/api";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { Search, Loader2 } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(selectedCategory !== "all" ? { category: selectedCategory } : {}),
          fetchCategories()
        ]);
        setProducts(productsData.products);
        setCategories(categoriesData.categories);
        setError(null);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           product.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <main className="min-h-screen pt-24 pb-20">
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
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-brand" size={40} />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Collection...</p>
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
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
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



