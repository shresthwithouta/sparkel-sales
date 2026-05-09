"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fetchBanners } from "@/lib/api";

const HERO_SLIDES = [
  {
    id: 1,
    title: "Revolutionary Water Healthifiers",
    subtitle: "Advanced RO+UV+UF Technology",
    description: "Experience the purest drinking water with 7-stage purification and mineral enrichment.",
    image: "/images/hero/purifier.png",
    accent: "text-brand",
    bg: "bg-orange-50/10"
  },
  {
    id: 2,
    title: "i-Auto Clean Smart Chimneys",
    subtitle: "Power Meet Intelligence",
    description: "Industry-leading suction power with filterless technology and motion sensor controls.",
    image: "/images/hero/chimney.png",
    accent: "text-brand",
    bg: "bg-orange-50/10"
  },
  {
    id: 3,
    title: "Premium Built-in Hobs",
    subtitle: "The Heart of Your Kitchen",
    description: "Toughened glass surface with high-efficiency brass burners for the modern Indian chef.",
    image: "/images/hero/hob.png",
    accent: "text-brand",
    bg: "bg-orange-50/10"
  }
];

export default function HeroSection() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadBanners = async () => {
      try {
        const data = await fetchBanners();
        const activeBanners = (data.banners || []).filter(b => b.active);
        
        if (activeBanners.length > 0) {
          // Format dynamic banners to match slide structure
          const formattedBanners = activeBanners.map(b => ({
            id: b._id,
            title: b.title,
            subtitle: b.subtitle || "Premium Collection",
            description: b.description || "Discover our latest range of innovative home appliances.",
            image: b.image,
            link: b.link || "/products"
          }));
          setBanners(formattedBanners);
        } else {
          // Fallback to static slides if no active banners in DB
          setBanners(HERO_SLIDES);
        }
      } catch (err) {
        console.error("Error loading hero banners:", err);
        setBanners(HERO_SLIDES);
      } finally {
        setLoading(false);
      }
    };
    loadBanners();
  }, []);

  const nextSlide = useCallback(() => {
    if (banners.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    if (banners.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide, banners.length]);

  if (loading) {
    return (
      <div className="w-full h-[50vh] md:h-[85vh] bg-slate-50 animate-pulse flex items-center justify-center">
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Loading Experience...</div>
      </div>
    );
  }

  const slide = banners[currentSlide] || HERO_SLIDES[0];

  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] bg-white overflow-hidden group pt-24 md:pt-32">
      <div className="absolute inset-0 z-0">
        {banners.map((s, idx) => (
          <div 
            key={s.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image 
              src={s.image} 
              alt={s.title} 
              fill 
              className="object-cover md:object-contain lg:object-cover object-center"
              priority={idx === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-white via-white/20 md:via-white/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent z-10" />
          </div>
        ))}
      </div>

      <div className="relative h-full container-wide flex items-center z-20">
        <div className="max-w-2xl space-y-4 md:space-y-8 animate-reveal">
          <div className="space-y-2 md:space-y-4">
            <div className="inline-flex items-center gap-2 px-2 md:px-3 py-1 bg-white border border-slate-100 rounded-sm">
              <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-brand" />
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                {slide.subtitle}
              </p>
            </div>
            <h1 className="text-3xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
              {slide.title}
            </h1>
            <p className="hidden md:block text-slate-600 text-sm md:text-lg font-medium max-w-lg leading-relaxed">
              {slide.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href={slide.link || "/products"} 
              className="px-6 md:px-10 py-3 md:py-4 bg-brand text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] rounded-sm hover:bg-brand-dark transition-all flex items-center gap-2 group/btn"
            >
              Shop Now
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-20 flex items-center gap-2 md:gap-3 z-30">
        {banners.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 md:h-1.5 transition-all duration-500 rounded-full ${
              idx === currentSlide ? 'w-8 md:w-12 bg-brand' : 'w-2 md:w-4 bg-slate-200 hover:bg-slate-300'
            }`}
          />
        ))}
      </div>

      <div className="absolute right-10 bottom-10 gap-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 bg-white border border-slate-100 text-slate-900 flex items-center justify-center rounded-full hover:bg-brand hover:text-white transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 bg-white border border-slate-100 text-slate-900 flex items-center justify-center rounded-full hover:bg-brand hover:text-white transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
