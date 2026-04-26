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
    <section className="relative bg-white min-h-[50vh] md:min-h-[65vh] flex items-center overflow-hidden pt-32 pb-12">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {}
          <div className="space-y-8 animate-reveal">
            <div className="space-y-4">
              <p className="text-brand font-bold uppercase tracking-[0.3em] text-[10px] animate-reveal delay-100">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-blue leading-[1.1] tracking-tight animate-reveal delay-200">
                {HERO_SLIDES[currentSlide].title}
              </h1>
            </div>
            <button className="px-10 py-4 bg-brand text-white font-bold uppercase tracking-widest text-[10px] rounded hover:bg-brand-dark transition-all shadow-xl shadow-brand/10 animate-reveal delay-300">
              Discover More
            </button>
          </div>

          {}
          <div className="relative aspect-square w-full max-w-md mx-auto bg-slate-50 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 animate-reveal delay-500">
            <Image 
              key={HERO_SLIDES[currentSlide].id}
              src={HERO_SLIDES[currentSlide].image} 
              alt={HERO_SLIDES[currentSlide].title} 
              fill 
              className="object-cover transition-all duration-1000 ease-in-out"
              priority
            />
          </div>
        </div>

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




