"use client";

import { useState } from "react";
import { Plus, Image as ImageIcon, Trash2, Edit2, Link as LinkIcon, Check, X } from "lucide-react";

export default function BannersPage() {
  const [banners, setBanners] = useState([
    { id: 1, title: "Summer Sale", image: "https://via.placeholder.com/1200x400", link: "/products?sale=true", active: true },
    { id: 2, title: "New Chimneys", image: "https://via.placeholder.com/1200x400", link: "/products/chimneys", active: true },
    { id: 3, title: "Water Purifier Promo", image: "https://via.placeholder.com/1200x400", link: "/products/water-purifiers", active: false },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight">Manage Banners</h2>
          <p className="text-sm text-slate-500 mt-1">Upload and organize homepage carousel banners.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-brand-dark transition-all shadow-lg">
          <Plus size={16} /> Add New Banner
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Banner Preview</th>
              <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Details</th>
              <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400">Status</th>
              <th className="px-6 py-4 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {banners.map(banner => (
              <tr key={banner.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 w-64">
                  <div className="aspect-[3/1] bg-slate-100 rounded-sm border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                     {/* Placeholder for image */}
                     <ImageIcon size={24} className="text-slate-300" />
                     <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                       <span className="text-[10px] font-black text-brand uppercase">View Full</span>
                     </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-brand-blue">{banner.title}</p>
                  <div className="flex items-center gap-1 text-slate-400 mt-1">
                    <LinkIcon size={12} />
                    <span className="text-xs">{banner.link}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {banner.active ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <Check size={10} /> Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 border border-slate-200">
                      <X size={10} /> Hidden
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-brand transition-colors bg-white border border-slate-200 rounded-sm hover:border-brand">
                      <Edit2 size={14} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-500 transition-colors bg-white border border-slate-200 rounded-sm hover:border-red-500">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
