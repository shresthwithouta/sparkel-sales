"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const HERO_SLIDES = [
  {
    id: 1,
    title: "Beyond Purification",
    subtitle: "Advanced Water Healthifier",
    image: "/images/hero/purifier.png",
  },
  {
    id: 2,
    title: "i-Auto Clean Technology",
    subtitle: "Modern Smart Chimneys",
    image: "/images/hero/chimney.png",
  },
  {
    id: 3,
    title: "Modular Elegance",
    subtitle: "Bespoke Kitchen Solutions",
    image: "/images/hero/hob.png",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] lg:h-[70vh] bg-slate-900 overflow-hidden">
      {}
      {HERO_SLIDES.map((slide, idx) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <Image 
            src={slide.image} 
            alt={slide.title} 
            fill 
            className="object-cover object-center brightness-[0.7] lg:brightness-[0.8]"
            priority={idx === 0}
          />
          {}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent md:from-black/40" />
        </div>
      ))}

      {}
      <div className="relative h-full container-wide flex items-center">
        <div className="max-w-2xl text-white space-y-4 md:space-y-8 animate-reveal px-4 md:px-0">
          <div className="space-y-2 md:space-y-4">
            <p className="text-brand font-black uppercase tracking-[0.4em] text-[8px] md:text-[12px] animate-reveal delay-100">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-reveal delay-200">
              {HERO_SLIDES[currentSlide].title}
            </h1>
          </div>
          <div className="flex gap-4 animate-reveal delay-300">
            <button className="px-8 md:px-12 py-3 md:py-5 bg-brand text-white font-black uppercase tracking-widest text-[10px] md:text-[11px] rounded-sm hover:bg-white hover:text-brand-blue transition-all shadow-2xl shadow-black/20 active:scale-95">
              Shop Now
            </button>
            <button className="hidden md:block px-8 md:px-12 py-3 md:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-[10px] md:text-[11px] rounded-sm hover:bg-white/20 transition-all active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
        <button onClick={prevSlide} className="p-2 text-white/50 hover:text-brand transition-colors hidden md:block">
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-3">
          {HERO_SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === currentSlide ? 'w-12 bg-brand shadow-[0_0_15px_rgba(255,102,0,0.5)]' : 'w-3 bg-white/30'
              }`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="p-2 text-white/50 hover:text-brand transition-colors hidden md:block">
          <ChevronRight size={24} />
        </button>
      </div>

      {}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-10" />
    </section>
  );
}

        {}
        <div className="flex items-center justify-center gap-6 mt-16">
          <button onClick={prevSlide} className="p-3 text-slate-300 hover:text-brand transition-colors">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-3">
            {HERO_SLIDES.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-10 bg-brand' : 'w-3 bg-slate-100'}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-3 text-slate-300 hover:text-brand transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}





