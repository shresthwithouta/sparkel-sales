"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, IndianRupee, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      window.location.href = "/auth/login";
      return;
    }
    toggleWishlist(product);
  };

  return (
    <div className="group relative bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500">
      <Link href={`/products/${product.slug}`} className="block aspect-square relative p-6 md:p-8 bg-slate-50 group-hover:bg-white transition-colors duration-500">
        <Image 
          src={product.images?.[0] || product.image || "/images/placeholder-product.svg"} 
          alt={product.name} 
          fill 
          className="object-contain group-hover:scale-110 transition-transform duration-700" 
        />
        <button 
          onClick={handleWishlistClick}
          className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 z-10 ${
            isInWishlist(product.slug) 
              ? "bg-brand text-white shadow-lg shadow-brand/20 scale-110" 
              : "bg-white/80 text-slate-400 hover:text-brand hover:bg-white shadow-sm"
          }`}
        >
          <Heart size={16} fill={isInWishlist(product.slug) ? "currentColor" : "none"} strokeWidth={2.5} />
        </button>
      </Link>

      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {product.category?.replace("-", " ")}
          </p>
          <h3 className="text-lg font-bold text-brand-blue line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-brand font-bold text-xl">
            <IndianRupee size={16} strokeWidth={3} />
            <span>{product.price?.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full py-2 bg-brand-blue text-white font-bold uppercase tracking-widest text-[10px] rounded hover:bg-brand transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
    </Link>
  );
}




