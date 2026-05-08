"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { registerUser } from "@/lib/api";
import { Loader2 } from "lucide-react";
import { useToast } from "@/contexts/ToastContext";
import GoogleLoginComponent from "@/components/GoogleLogin";

export default function SignupPage() {
  const router = useRouter();
  const { register } = useAuth();
  const { showToast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await registerUser(formData);
      register(data.token, data.user);
      router.push("/");
      showToast("Account created successfully", "success");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      showToast(err.message || "Registration failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden animate-reveal">
        <div className="p-8 sm:p-10">
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 relative flex items-center justify-center transition-transform group-hover:scale-110">
                <Image src="/favicon.ico" alt="Spark Innovations Logo" fill className="object-contain" sizes="32px" />
              </div>
              <span className="text-3xl font-black text-brand-blue uppercase tracking-tighter">
                Spark <span className="text-brand">Innovations</span>
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-brand-blue tracking-tight">Create Account</h2>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1">Join the premium community</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest rounded text-center">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all"
                placeholder="Full Name"
              />
            </div>

            <div className="space-y-1">
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all"
                placeholder="Email Address"
              />
            </div>

            <div className="space-y-1">
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all"
                placeholder="Password"
              />
            </div>

            <div className="space-y-1">
              <input
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg text-sm focus:bg-white focus:border-brand focus:ring-4 focus:ring-brand/5 outline-none transition-all"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-brand transition-all disabled:opacity-50 active:scale-[0.98] mt-2 shadow-lg shadow-brand-blue/10"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin mx-auto" />
              ) : (
                "Get Started"
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                <span className="bg-white px-3">Quick Connect</span>
              </div>
            </div>

            <GoogleLoginComponent />
          </div>
        </div>
        
        <div className="bg-slate-50 py-6 text-center border-t border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Already have an account? <Link href="/auth/login" className="text-brand hover:text-brand-dark transition-colors">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
