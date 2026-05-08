"use client";

import { useState, useEffect } from "react";
import { Plus, Image as ImageIcon, Trash2, Edit2, Link as LinkIcon, Check, X, Loader2 } from "lucide-react";
import { fetchBanners, createBanner, updateBanner, deleteBanner, uploadImage } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import Image from "next/image";

export default function BannersPage() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddingBanner, setIsAddingBanner] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const { token } = useAuth();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    link: "",
    active: true
  });
  const [isSaving, setIsSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    let isMounted = true;
    const initBanners = async () => {
      try {
        const data = await fetchBanners();
        if (isMounted) {
          setBanners(data.banners || []);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error loading banners:", err);
          setLoading(false);
        }
      }
    };
    initBanners();
    return () => { isMounted = false; };
  }, []);

  const loadBanners = async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);
      const data = await fetchBanners();
      setBanners(data.banners || []);
    } catch (err) {
      console.error("Error loading banners:", err);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  const handleSaveBanner = async () => {
    if (!formData.title || !formData.image) {
      showToast("Title and Image URL are required", "error");
      return;
    }

    try {
      setIsSaving(true);

      let imageUrl = formData.image;
      if (imageFile) {
        const formDataUpload = new FormData();
        formDataUpload.append("image", imageFile);
        const uploadRes = await uploadImage(token, formDataUpload);
        imageUrl = uploadRes.url;
      }

      const bannerData = {
        ...formData,
        image: imageUrl
      };

      if (editingBanner) {
        const data = await updateBanner(token, editingBanner._id, bannerData);
        setBanners(banners.map(b => b._id === editingBanner._id ? data.banner : b));
      } else {
        const data = await createBanner(token, bannerData);
        setBanners([...banners, data.banner]);
      }
      setIsAddingBanner(false);
      setEditingBanner(null);
      setFormData({ title: "", image: "", link: "", active: true });
      setImageFile(null);
      setImagePreview("");
    } catch (err) {
      console.error("Error saving banner:", err);
      showToast(err.message || "Failed to save banner", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showToast("Only image files are allowed", "error");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast("Image size should be less than 5MB", "error");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteBanner = async (id) => {
    try {
      await deleteBanner(token, id);
      setBanners(banners.filter(b => b._id !== id));
      showToast("Banner deleted successfully", "success");
    } catch (err) {
      console.error("Error deleting banner:", err);
      showToast(err.message || "Failed to delete banner", "error");
    }
  };

  const toggleStatus = async (banner) => {
    try {
      const data = await updateBanner(token, banner._id, { active: !banner.active });
      setBanners(banners.map(b => b._id === banner._id ? data.banner : b));
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight">Manage Banners</h2>
          <p className="text-sm text-slate-500 mt-1">Upload and organize homepage carousel banners.</p>
        </div>
        <button 
          onClick={() => {
            setEditingBanner(null);
            setFormData({ title: "", image: "", link: "", active: true });
            setIsAddingBanner(true);
          }}
          className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-brand-dark transition-all shadow-lg"
        >
          <Plus size={16} /> Add New Banner
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4 bg-white border border-slate-200 rounded-sm">
          <Loader2 className="animate-spin text-brand" size={32} />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Banners...</p>
        </div>
      ) : (

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
              <tr key={banner._id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 w-64">
                  <div className="aspect-[3/1] bg-slate-100 rounded-sm border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                    {banner.image ? (
                      <Image src={banner.image} alt={banner.title} fill className="object-cover" sizes="100vw" />
                    ) : (
                      <ImageIcon size={24} className="text-slate-300" />
                    )}
                     <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                       <span className="text-[10px] font-black text-brand uppercase">View Full</span>
                     </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="font-bold text-brand-blue">{banner.title}</p>
                  <div className="flex items-center gap-1 text-slate-400 mt-1">
                    <LinkIcon size={12} />
                    <span className="text-xs">{banner.link || "No link"}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => toggleStatus(banner)}
                    className="focus:outline-none"
                  >
                    {banner.active ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100 hover:bg-emerald-100 transition-colors">
                        <Check size={10} /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200 transition-colors">
                        <X size={10} /> Hidden
                      </span>
                    )}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button 
                      onClick={() => {
                        setEditingBanner(banner);
                        setFormData({ title: banner.title, image: banner.image, link: banner.link, active: banner.active });
                        setIsAddingBanner(true);
                        setImagePreview(banner.image || "");
                        setImageFile(null);
                      }}
                      className="p-2 text-slate-400 hover:text-brand transition-colors bg-white border border-slate-200 rounded-sm hover:border-brand"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button 
                      onClick={() => handleDeleteBanner(banner._id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors bg-white border border-slate-200 rounded-sm hover:border-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

      {isAddingBanner && (
        <div className="fixed inset-0 bg-brand-blue/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-reveal">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">
                {editingBanner ? "Edit Banner" : "Add New Banner"}
              </h2>
              <button 
                onClick={() => {
                  setIsAddingBanner(false);
                  setImageFile(null);
                  setImagePreview("");
                }} 
                className="text-slate-400 hover:text-brand"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Banner Title</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                  placeholder="e.g. Summer Sale" 
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Banner Image</label>
                <div className="flex items-center gap-6">
                  <div className="w-32 h-16 bg-slate-50 border border-slate-200 rounded-sm overflow-hidden flex items-center justify-center relative">
                    {imagePreview || formData.image ? (
                      <Image src={imagePreview || formData.image} alt="Preview" fill className="object-cover" sizes="100vw" />
                    ) : (
                      <ImageIcon className="text-slate-200" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden" 
                      id="banner-image"
                    />
                    <label 
                      htmlFor="banner-image"
                      className="inline-block px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-sm text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors"
                    >
                      {imageFile ? "Change Image" : "Upload Image"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Redirect Link</label>
                <input 
                  type="text" 
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                  placeholder="/products?sale=true" 
                />
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="active"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="w-4 h-4 text-brand rounded-sm border-slate-300 focus:ring-brand" 
                />
                <label htmlFor="active" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active</label>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
              <button 
                onClick={() => setIsAddingBanner(false)} 
                className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors"
                disabled={isSaving}
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveBanner}
                disabled={isSaving}
                className="px-8 py-3 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Banner"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
