"use client";

import { useState } from "react";
import { Save, LayoutTemplate, Type, Phone, Share2 } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General Information", icon: <LayoutTemplate size={16} /> },
    { id: "homepage", label: "Homepage Layout", icon: <Type size={16} /> },
    { id: "contact", label: "Contact Details", icon: <Phone size={16} /> },
    { id: "social", label: "Social Links", icon: <Share2 size={16} /> },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight">Site Settings</h2>
          <p className="text-sm text-slate-500 mt-1">Configure global layout, headlines, and contact info.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-brand-dark transition-all shadow-lg">
          <Save size={16} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="bg-white border border-slate-200 rounded-sm p-2 shadow-sm sticky top-6">
          <nav className="flex flex-col space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase tracking-widest rounded-sm transition-all text-left ${
                  activeTab === tab.id
                    ? "bg-brand/10 text-brand"
                    : "text-slate-500 hover:bg-slate-50 hover:text-brand-blue"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-8">
            {activeTab === "general" && (
              <div className="space-y-6">
                <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">General Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Website Name</label>
                    <input type="text" defaultValue="Sparkel Sales" className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Meta Description (SEO)</label>
                    <textarea defaultValue="Authorized Kutchina Distributor in Kolkata offering the best chimneys, hobs, and water purifiers." rows={3} className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-none"></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                       <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Logo Upload</label>
                       <div className="border-2 border-dashed border-slate-200 rounded-sm p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-brand transition-colors bg-slate-50">
                         <LayoutTemplate size={24} className="text-slate-300 mb-2" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Click to replace</span>
                       </div>
                    </div>
                    <div>
                       <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Favicon Upload</label>
                       <div className="border-2 border-dashed border-slate-200 rounded-sm p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-brand transition-colors bg-slate-50">
                         <LayoutTemplate size={24} className="text-slate-300 mb-2" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Click to replace</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "homepage" && (
              <div className="space-y-6">
                <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">Homepage Layout</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Hero Headline</label>
                    <input type="text" defaultValue="REDEFINING MODERN KITCHENS." className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm font-black text-brand-blue focus:border-brand outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Hero Subheadline</label>
                    <input type="text" defaultValue="Experience culinary excellence with Kutchina's premium appliances." className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" />
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Featured Categories to Display</label>
                    <div className="space-y-3">
                      {["Kitchen Chimneys", "Built-in Hobs", "Water Purifiers", "Dishwashers"].map((cat, i) => (
                        <label key={i} className="flex items-center gap-3 p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-brand transition-colors">
                          <input type="checkbox" defaultChecked className="w-4 h-4 text-brand rounded-sm border-slate-300 focus:ring-brand" />
                          <span className="text-sm font-bold text-slate-700">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">Contact Details</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Primary Phone</label>
                      <input type="text" defaultValue="+91 98310 12345" className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Support Email</label>
                      <input type="email" defaultValue="support@sparkelsales.com" className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Office Address</label>
                    <textarea defaultValue="123, Park Street, Kolkata, West Bengal - 700016" rows={3} className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all resize-none"></textarea>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Google Maps Embed URL</label>
                    <input type="text" placeholder="https://maps.google.com/..." className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="space-y-6">
                <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">Social Media Links</h3>
                
                <div className="space-y-4">
                  {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map(social => (
                    <div key={social}>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{social} URL</label>
                      <input type="url" placeholder={`https://${social.toLowerCase()}.com/yourpage`} className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
