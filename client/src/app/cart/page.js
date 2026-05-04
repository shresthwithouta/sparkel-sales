"use client";

import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { 
  Trash2, 
  Minus, 
  Plus, 
  ArrowRight, 
  ShoppingBag, 
  ArrowLeft,
  IndianRupee
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/auth/login?redirect=/cart");
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen pt-40 pb-20">
        <div className="container-wide text-center">
          <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag size={40} />
          </div>
          <h1 className="text-3xl font-black text-brand-blue uppercase tracking-tight mb-4">Your cart is empty</h1>
          <p className="text-slate-500 mb-10 font-medium">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link 
            href="/products" 
            className="inline-flex bg-brand-blue text-white py-4 px-10 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-brand transition-all shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <SectionHeader 
          badge="Shopping Cart"
          title={<>REVIEW YOUR <span className="text-brand">SELECTION.</span></>}
          description="Almost there! Review your items and proceed to checkout for delivery."
        />

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
              <div className="hidden md:grid grid-cols-5 gap-6 p-6 bg-slate-50 border-b border-slate-200 text-[9px] font-black uppercase tracking-widest text-slate-400">
                <div className="col-span-2">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Subtotal</div>
              </div>

              <div className="divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <div key={item.slug} className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6 items-center group">
                    <div className="md:col-span-2 flex items-center gap-6">
                      <div className="w-20 h-20 bg-white border border-slate-200 rounded-sm relative overflow-hidden p-2 shrink-0 group-hover:border-brand transition-colors">
                        <Image src={item.images[0]} alt={item.name} fill className="object-contain" />
                      </div>
                      <div>
                        <Link href={`/products/${item.slug}`} className="text-base font-black text-brand-blue uppercase tracking-tight hover:text-brand transition-colors line-clamp-1">
                          {item.name}
                        </Link>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">
                          {item.category.replace("-", " ")}
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.slug)}
                          className="mt-4 flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-bold text-slate-600">₹{item.price.toLocaleString("en-IN")}</p>
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center border border-slate-200 rounded-sm bg-slate-50 overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="p-3 hover:bg-white transition-colors text-slate-400 hover:text-brand"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-10 text-center text-xs font-black text-brand-blue">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="p-3 hover:bg-white transition-colors text-slate-400 hover:text-brand"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-black text-brand-blue">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/products" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand transition-colors">
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
          </div>

          {}
          <div className="lg:col-span-1 bg-white border border-slate-200 rounded-sm p-10 shadow-sm sticky top-32">
            <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-10 pb-4 border-b border-slate-100">Order Summary</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Subtotal</span>
                <span className="text-slate-600">₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Shipping</span>
                <span className="text-emerald-500">Free</span>
              </div>
              <div className="flex justify-between text-2xl font-black text-brand-blue uppercase tracking-tight pt-8 border-t border-slate-100">
                <span>Total</span>
                <div className="flex items-center gap-1 text-brand">
                  <IndianRupee size={22} strokeWidth={4} />
                  <span>{cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <Link 
              href="/checkout"
              className="w-full bg-brand-blue text-white py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand transition-all shadow-lg group"
            >
              Proceed to Checkout
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-10 pt-8 border-t border-slate-50 flex items-center gap-4 text-slate-400">
              <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                <ArrowRight size={16} />
              </div>
              <p className="text-[8px] font-black uppercase tracking-widest leading-relaxed">
                Prices include all taxes. Delivery available across West Bengal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}




