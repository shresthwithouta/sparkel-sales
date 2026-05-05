import Link from "next/link";
import { Ghost, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full text-center">
        <div className="mb-12 relative">
          <div className="text-[180px] font-black text-slate-50 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center text-brand animate-bounce-slow">
              <Ghost size={48} />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-brand-blue uppercase tracking-tight mb-4">
          PAGE NOT <span className="text-brand">FOUND.</span>
        </h1>
        
        <p className="text-slate-500 font-medium leading-relaxed mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-3 bg-brand-blue text-white py-4 px-8 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-brand transition-all shadow-lg"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center gap-3 bg-slate-50 text-brand-blue py-4 px-8 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </main>
  );
}
