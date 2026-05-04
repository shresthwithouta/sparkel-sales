"use client";

import { useState, useEffect } from "react";
import { fetchCategories, createCategory, updateCategory, deleteCategory, uploadImage } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  X,
  Loader2,
  Layers,
  ImageIcon,
  Image as ImageIconLucide
} from "lucide-react";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  
  const [newCategory, setNewCategory] = useState({
    name: "",
    slug: "",
    description: "",
    image: ""
  });
  const [isSaving, setIsSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const loadCategories = async (isMounted = true) => {
    try {
      setLoading(true);
      const data = await fetchCategories();
      if (isMounted) setCategories(data.categories || []);
    } catch (err) {
      console.error("Error loading categories:", err);
    } finally {
      if (isMounted) setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    loadCategories(isMounted);
    return () => { isMounted = false; };
  }, []);

  const handleSaveCategory = async () => {
    if (!newCategory.name || !newCategory.slug) {
      alert("Name and Slug are required");
      return;
    }
    
    try {
      setIsSaving(true);

      let imageUrl = newCategory.image;
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const uploadRes = await uploadImage(token, formData);
        imageUrl = uploadRes.url;
      }

      const categoryData = {
        ...newCategory,
        image: imageUrl
      };

      if (editingCategory) {
        const data = await updateCategory(token, editingCategory.slug, categoryData);
        setCategories(categories.map(c => c.slug === editingCategory.slug ? data.category : c));
      } else {
        const data = await createCategory(token, categoryData);
        setCategories([...categories, data.category]);
      }
      setIsAddingCategory(false);
      setEditingCategory(null);
      setNewCategory({ name: "", slug: "", description: "", image: "" });
      setImageFile(null);
      setImagePreview("");
    } catch (err) {
      console.error("Error saving category:", err);
      alert(err.message || "Failed to save category");
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteCategory = async (slug) => {
    if (!confirm(`Are you sure you want to delete category: ${slug}?`)) return;
    
    try {
      await deleteCategory(token, slug);
      setCategories(categories.filter(c => c.slug !== slug));
    } catch (err) {
      console.error("Error deleting category:", err);
      alert(err.message || "Failed to delete category");
    }
  };

  const filteredCategories = (categories || []).filter(c => 
    (c.name || "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />
          <input 
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
          />
        </div>
        <button 
          onClick={() => {
            setEditingCategory(null);
            setNewCategory({ name: "", slug: "", description: "" });
            setIsAddingCategory(true);
          }}
          className="bg-brand text-white py-3 px-6 rounded-sm font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
        >
          <Plus size={16} />
          Add New Category
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="animate-spin text-brand" size={40} />
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Categories...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div key={category._id || category.slug} className="bg-white border border-slate-200 rounded-sm p-6 hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm text-brand">
                  <Layers size={24} />
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setEditingCategory(category);
                      setNewCategory({
                        name: category.name,
                        slug: category.slug,
                        description: category.description || "",
                        image: category.image || ""
                      });
                      setIsAddingCategory(true);
                      setImagePreview(category.image || "");
                      setImageFile(null);
                    }}
                    className="p-2 text-slate-300 hover:text-brand transition-colors"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button 
                    onClick={() => handleDeleteCategory(category.slug)}
                    className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-1">{category.name}</h3>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mb-4">Slug: {category.slug}</p>
              <p className="text-xs text-slate-500 line-clamp-2">{category.description || "No description provided."}</p>
            </div>
          ))}
          
          {filteredCategories.length === 0 && (
            <div className="col-span-full text-center py-20 border border-dashed border-slate-200 rounded-sm">
              <p className="text-slate-400 text-sm font-medium italic">No categories found.</p>
            </div>
          )}
        </div>
      )}

      {isAddingCategory && (
        <div className="fixed inset-0 bg-brand-blue/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-lg rounded-sm shadow-2xl overflow-hidden animate-reveal">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h2>
              <button 
                onClick={() => {
                  setIsAddingCategory(false);
                  setEditingCategory(null);
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
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category Name</label>
                <input 
                  type="text" 
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                  placeholder="e.g. Kitchen Chimneys" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Slug</label>
                <input 
                  type="text" 
                  value={newCategory.slug}
                  onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                  placeholder="e.g. kitchen-chimneys" 
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category Image</label>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-slate-50 border border-slate-200 rounded-sm overflow-hidden flex items-center justify-center relative">
                    {imagePreview || newCategory.image ? (
                      <img src={imagePreview || newCategory.image} alt="Preview" className="w-full h-full object-contain" />
                    ) : (
                      <ImageIconLucide className="text-slate-200" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden" 
                      id="category-image"
                    />
                    <label 
                      htmlFor="category-image"
                      className="inline-block px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-sm text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors"
                    >
                      {imageFile ? "Change Image" : "Upload Image"}
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</label>
                <textarea 
                  rows="3" 
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium resize-none" 
                  placeholder="Category details..."
                ></textarea>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
              <button 
                onClick={() => setIsAddingCategory(false)} 
                className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors"
                disabled={isSaving}
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveCategory}
                disabled={isSaving}
                className="px-8 py-3 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Category"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




