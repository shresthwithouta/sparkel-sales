"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IndianRupee, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useAuth } from "@/contexts/AuthContext";

export default function ProductCard({ product }) {
  const router = useRouter();
  const pathname = usePathname();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      router.push(`/auth/login?redirect=${pathname}`);
      return;
    }
    toggleWishlist(product);
  };

  return (
    <div className="group relative bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <Link href={`/products/${product.slug}`} className="block aspect-[4/5] relative p-4 md:p-8 bg-[#fcfcfc] group-hover:bg-white transition-colors duration-500">
        <Image 
          src={product.images?.[0] || product.image || "/images/placeholder-product.svg"} 
          alt={product.name} 
          fill 
          className="object-contain p-4 md:p-6 group-hover:scale-110 transition-transform duration-700" 
          sizes="(max-width: 1023px) 50vw, 25vw"
        />
        {}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-2 z-10">
          <button 
            onClick={handleWishlistClick}
            className={`p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300 ${
              isInWishlist(product.slug) 
                ? "bg-brand text-white shadow-lg shadow-brand/20 scale-110" 
                : "bg-white/90 text-slate-400 hover:text-brand hover:bg-white shadow-sm border border-slate-100"
            }`}
          >
            <Heart size={14} className="md:w-4 md:h-4" fill={isInWishlist(product.slug) ? "currentColor" : "none"} strokeWidth={2.5} />
          </button>
        </div>

        {product.isNew && (
          <div className="absolute top-2 left-2 md:top-4 md:left-4">
            <span className="bg-brand-blue text-white text-[7px] md:text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-sm">New</span>
          </div>
        )}
      </Link>

      <div className="p-4 md:p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-1 md:space-y-2 mb-4">
          <p className="text-[7px] md:text-[9px] font-black text-brand uppercase tracking-[0.2em] mb-1">
            {product.category?.replace(/-/g, " ")}
          </p>
          <h3 className="text-xs md:text-base font-black text-brand-blue line-clamp-2 leading-tight tracking-tight uppercase">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-brand font-black text-sm md:text-xl">
            <IndianRupee size={12} className="md:w-4 md:h-4" strokeWidth={4} />
            <span>{product.price?.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <button 
          onClick={handleAddToCart}
          className="w-full py-2.5 md:py-3.5 bg-brand-blue text-white font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px] rounded-sm hover:bg-brand transition-all flex items-center justify-center gap-2 group-hover:translate-y-0 active:scale-95 shadow-lg shadow-brand-blue/10"
        >
          <ShoppingBag size={12} className="md:w-4 md:h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}




