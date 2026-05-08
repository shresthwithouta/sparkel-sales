"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { createOrder } from "@/lib/api";
import { useToast } from "@/contexts/ToastContext";
import SectionHeader from "@/components/ui/SectionHeader";
import { 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  QrCode, 
  Smartphone,
  IndianRupee,
  Loader2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const { user, token, isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();
  
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("qr");
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address?.street || "",
    city: user?.address?.city || "",
    state: user?.address?.state || "",
    zipCode: user?.address?.zipCode || "",
    country: user?.address?.country || "India"
  });

  // Enforce login for checkout to avoid "Guest Checkout Trap"
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      showToast("Please sign in to proceed to checkout.", "info");
      router.push("/auth/login?redirect=/checkout");
    }
  }, [isAuthenticated, authLoading, router, showToast]);

  const hasInitialized = useRef(false);

  // Autofill form when user data is available, but don't overwrite manual edits
  useEffect(() => {
    if (user && !hasInitialized.current) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.name || "",
        email: prev.email || user.email || "",
        phone: prev.phone || user.phone || "",
        address: prev.address || user.address?.street || "",
        city: prev.city || user.address?.city || "",
        state: prev.state || user.address?.state || "",
        zipCode: prev.zipCode || user.address?.zipCode || "",
        country: prev.country || user.address?.country || "India"
      }));
      hasInitialized.current = true;
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProcessOrder = async () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone || !formData.address) {
        showToast("Please fill in all required fields.", "error");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      try {
        setIsProcessing(true);
        const orderData = {
          items: cartItems.map(item => ({
            slug: item.slug,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.images?.[0] || item.image
          })),
          shipping: formData,
          paymentMethod
        };

        // If authenticated, token is used. If guest, token is null and backend must handle it.
        if (!token) {
          showToast("Please sign in to complete your purchase.", "error");
          setIsProcessing(false);
          return;
        }
        await createOrder(token, orderData);
        clearCart();
        setStep(3);
      } catch (err) {
        showToast(err.message || "Failed to place order. Please try again.", "error");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen pt-40 pb-20 text-center">
        <h2 className="text-2xl font-black text-brand-blue uppercase mb-4">Your cart is empty</h2>
        <Link href="/products" className="text-brand font-black uppercase tracking-widest text-xs underline">
          Go back to products
        </Link>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center animate-reveal text-center px-6">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">Order Placed Successfully!</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
          Thank you for choosing Spark Innovations. Our team will contact you shortly to confirm the delivery and installation details.
        </p>
        <Link 
          href="/" 
          className="bg-brand-blue text-white py-4 px-10 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-brand transition-all shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container-wide">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <Link href="/products" className="w-8 h-8 md:w-10 md:h-10 border border-slate-200 flex items-center justify-center rounded-full text-slate-400 hover:text-brand transition-colors">
            <ArrowLeft size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>
          <h1 className="text-xl md:text-2xl font-black text-brand-blue uppercase tracking-tight">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Checkout Flow */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Step 1: Shipping */}
            <div className={`space-y-8 ${step > 1 ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-black">1</div>
                <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">Shipping Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="checkout-name" className="text-[9px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    id="checkout-name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="checkout-email" className="text-[9px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    id="checkout-email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium" 
                    placeholder="your@email.com" 
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="checkout-phone" className="text-[9px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                  <input 
                    id="checkout-phone"
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium" 
                    placeholder="+91" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="checkout-address" className="text-[9px] font-black uppercase tracking-widest text-slate-400">Detailed Address</label>
                <textarea 
                  id="checkout-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium resize-none" 
                  placeholder="House/Flat No, Landmark, Area"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">City</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium" 
                    placeholder="Kolkata" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">PIN Code</label>
                  <input 
                    type="text" 
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium" 
                    placeholder="700001" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-slate-400">Country</label>
                <input 
                  type="text" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand text-sm font-medium" 
                  placeholder="India" 
                />
              </div>
            </div>

            {/* Step 2: Payment */}
            <div className={`space-y-8 ${step < 2 ? 'opacity-30' : ''}`}>
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-black">2</div>
                <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">Payment Method</h2>
              </div>

              {step >= 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {/* UPI Option */}
                  <div 
                    onClick={() => setPaymentMethod("qr")}
                    className={`p-6 border-2 rounded-sm cursor-pointer transition-all ${paymentMethod === 'qr' ? 'border-brand bg-brand/5 shadow-md' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-sm ${paymentMethod === 'qr' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <QrCode size={24} />
                      </div>
                      {paymentMethod === 'qr' && <CheckCircle2 size={18} className="text-brand" />}
                    </div>
                    <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest mb-1">UPI / QR Code</h4>
                    <p className="text-[10px] text-slate-500 font-medium">Scan and pay using any UPI app</p>
                  </div>

                  {/* COD Option */}
                  <div 
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-6 border-2 rounded-sm cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-brand bg-brand/5 shadow-md' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-sm ${paymentMethod === 'cod' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                        <Truck size={24} />
                      </div>
                      {paymentMethod === 'cod' && <CheckCircle2 size={18} className="text-brand" />}
                    </div>
                    <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest mb-1">Cash on Delivery</h4>
                    <p className="text-[10px] text-slate-500 font-medium">Pay securely at your doorstep</p>
                  </div>
                </div>
              )}

              {/* QR Code Display */}
              {step === 2 && paymentMethod === "qr" && (
                <div className="bg-white border border-brand/20 rounded-sm p-8 flex flex-col items-center animate-reveal">
                  <div className="text-center mb-8">
                    <p className="text-[10px] font-black text-brand uppercase tracking-[0.3em] mb-2">Scan to Pay</p>
                    <h3 className="text-2xl font-black text-brand-blue uppercase">₹{cartTotal.toLocaleString("en-IN")}</h3>
                  </div>
                  <div className="relative w-64 h-64 border-8 border-slate-50 rounded-lg overflow-hidden shadow-2xl mb-8">
                      <Image 
                        src="/images/upi-qr-placeholder.png" 
                        alt="UPI QR Code" 
                        fill 
                        className="object-cover"
                        sizes="256px"
                      />
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                    <Smartphone size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Supported by all UPI apps</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1 bg-white border border-slate-200 rounded-sm p-8 shadow-sm sticky top-32">
            <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-8 pb-4 border-b border-slate-100">Order Summary</h3>
            
            <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div key={item.slug} className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden shrink-0">
                    <Image src={item.images?.[0] || item.image} alt={item.name} fill className="object-contain" sizes="48px" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black text-brand-blue uppercase leading-tight mb-1 line-clamp-1">{item.name}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] text-slate-400 font-bold">QTY: {item.quantity}</p>
                      <p className="text-[10px] font-black text-brand">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100 mb-10">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Subtotal</span>
                <span>₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Shipping</span>
                <span className="text-emerald-500">Free</span>
              </div>
              <div className="flex justify-between text-lg font-black text-brand-blue uppercase tracking-tight pt-4 border-t border-slate-50">
                <span>Total</span>
                <div className="flex items-center gap-1 text-brand">
                  <IndianRupee size={18} strokeWidth={4} />
                  <span>{cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleProcessOrder}
              disabled={isProcessing}
              className="w-full bg-brand-blue text-white py-5 px-8 rounded-sm font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand transition-all group disabled:opacity-50"
            >
              {isProcessing ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <>
                  {step === 1 ? "Continue to Payment" : "Confirm Order"}
                  <ShieldCheck size={18} className="group-hover:scale-110 transition-transform" />
                </>
              )}
            </button>
            <p className="text-[8px] text-slate-400 text-center mt-6 uppercase tracking-widest font-medium">
              Secure Checkout • Authorized Distributor
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}




