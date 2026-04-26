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

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col h-full bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-md transition-all"
    >
      <div className="relative aspect-square w-full bg-slate-50 p-6 flex items-center justify-center">
        <Image
          src={product.images?.[0] || "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

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



