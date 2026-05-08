"use client";

import { useState, useEffect } from "react";
import { Save, LayoutTemplate, Type, Phone, Share2, Loader2 } from "lucide-react";
import { fetchSiteSettings, updateSiteSettings } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { token } = useAuth();
  const { showToast } = useToast();

  const [settings, setSettings] = useState({
    websiteName: "",
    metaDescription: "",
    heroHeadline: "",
    heroSubheadline: "",
    phone: "",
    email: "",
    address: "",
    mapsUrl: "",
    social: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: ""
    }
  });

  const loadSettings = async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      const data = await fetchSiteSettings();
      if (data.settings) {
        setSettings(prev => ({
          ...prev,
          ...data.settings,
          social: {
            ...prev.social,
            ...(data.settings.social || {})
          }
        }));
      }
    } catch (err) {
      console.error("Error loading settings:", err);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const initSettings = async () => {
      try {
        const data = await fetchSiteSettings();
        if (isMounted && data.settings) {
          setSettings(prev => ({
            ...prev,
            ...data.settings,
            social: {
              ...prev.social,
              ...(data.settings.social || {})
            }
          }));
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error loading settings:", err);
          setLoading(false);
        }
      }
    };
    initSettings();
    return () => { isMounted = false; };
  }, []);

  const handleSaveSettings = async () => {
    try {
      setIsSaving(true);
      await updateSiteSettings(token, settings);
      showToast("Settings saved successfully!", "success");
    } catch (err) {
      console.error("Error saving settings:", err);
      showToast(err.message || "Failed to save settings", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const tabs = [
    { id: "general", label: "General Information", icon: <LayoutTemplate size={16} /> },
    { id: "homepage", label: "Homepage Layout", icon: <Type size={16} /> },
    { id: "contact", label: "Contact Details", icon: <Phone size={16} /> },
    { id: "social", label: "Social Links", icon: <Share2 size={16} /> },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight">Site Settings</h2>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-1">Configure global layout and contact info.</p>
        </div>
        <button 
          onClick={handleSaveSettings}
          disabled={isSaving || loading}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[9px] hover:bg-brand-dark transition-all shadow-lg disabled:opacity-50"
        >
          {isSaving ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />} 
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4 bg-white border border-slate-200 rounded-sm">
          <Loader2 className="animate-spin text-brand" size={32} />
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Loading Settings...</p>
        </div>
      ) : (

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="bg-white border border-slate-200 rounded-sm p-1.5 shadow-sm lg:sticky lg:top-6 overflow-x-auto custom-scrollbar no-scrollbar lg:overflow-visible">
          <nav className="flex lg:flex-col gap-1 min-w-max lg:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-[9px] font-black uppercase tracking-widest rounded-sm transition-all text-left whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-brand/10 text-brand"
                    : "text-slate-400 hover:bg-slate-50 hover:text-brand-blue"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white border border-slate-200 rounded-sm shadow-sm p-6 md:p-8">
            {activeTab === "general" && (
              <div className="space-y-6">
                <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">General Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Website Name</label>
                    <input 
                      type="text" 
                      value={settings.websiteName}
                      onChange={(e) => setSettings({ ...settings, websiteName: e.target.value })}
                      className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Meta Description (SEO)</label>
                    <textarea 
                      value={settings.metaDescription}
                      onChange={(e) => setSettings({ ...settings, metaDescription: e.target.value })}
                      rows={3} 
                      className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-all resize-none"
                    ></textarea>
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
                    <input 
                      type="text" 
                      value={settings.heroHeadline}
                      onChange={(e) => setSettings({ ...settings, heroHeadline: e.target.value })}
                      className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm font-black text-brand-blue focus:border-brand outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Hero Subheadline</label>
                    <input 
                      type="text" 
                      value={settings.heroSubheadline}
                      onChange={(e) => setSettings({ ...settings, heroSubheadline: e.target.value })}
                      className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" 
                    />
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
                      <input 
                        type="text" 
                        value={settings.phone}
                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                        className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Support Email</label>
                      <input 
                        type="email" 
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Office Address</label>
                    <textarea 
                      value={settings.address}
                      onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                      rows={3} 
                      className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Google Maps Embed URL</label>
                    <input 
                      type="text" 
                      value={settings.mapsUrl}
                      onChange={(e) => setSettings({ ...settings, mapsUrl: e.target.value })}
                      placeholder="https://maps.google.com/..." 
                      className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" 
                    />
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
                      <input 
                        type="url" 
                        value={settings.social?.[social.toLowerCase()] || ""}
                        onChange={(e) => setSettings({ 
                          ...settings, 
                          social: { 
                            ...settings.social, 
                            [social.toLowerCase()]: e.target.value 
                          } 
                        })}
                        placeholder={`https://${social.toLowerCase()}.com/yourpage`} 
                        className="w-full border border-slate-200 rounded-sm px-4 py-3 text-sm focus:border-brand outline-none transition-all" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
