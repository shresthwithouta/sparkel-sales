"use client";

import { ShieldCheck, Wrench, Clock, HeartHandshake } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  { icon: ShieldCheck, title: "100% GENUINE", description: "Official Kutchina warranty." },
  { icon: HeartHandshake, title: "EXPERT ADVICE", description: "Guidance for every kitchen." },
  { icon: Wrench, title: "QUICK INSTALL", description: "Trained professionals." },
  { icon: Clock, title: "24/7 SUPPORT", description: "Dedicated helpdesk." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <SectionHeader 
          badge="Distributor Benefits"
          title="Why Choose Sparkel Sales"
          description="We are committed to providing the best service and quality appliances for your home."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComp = feature.icon;
            return (
              <div key={feature.title} className="bg-white p-8 rounded-lg border border-slate-100 space-y-4">
                <div className="w-12 h-12 bg-slate-50 text-brand flex items-center justify-center rounded-lg">
                  <IconComp size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-blue uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




