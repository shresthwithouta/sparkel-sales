"use client";

import { useState, useEffect } from "react";
import { fetchProducts, fetchCategories, createProduct, updateProduct, deleteProduct, uploadImage } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/contexts/ToastContext";
import { validateImageFile } from "@/lib/utils";
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  MoreVertical,
  X,
  Loader2,
  Image as ImageIcon
} from "lucide-react";
import Image from "next/image";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();
  const { showToast } = useToast();
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    slug: "",
    category: "",
    price: "",
    description: "",
    images: [""]
  });
  const [isSaving, setIsSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories()
        ]);
        if (isMounted) {
          setProducts(productsData.products || []);
          setCategories(categoriesData.categories || []);
        }
      } catch (err) {
        console.error("Error loading admin products:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, []);

  const filteredProducts = (products || []).filter(p => 
    (p.name || "").toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
    (p.category || "").toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateImageFile(file);
      if (error) {
        showToast(error, "error");
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProduct = async () => {
    if (!newProduct.name || !newProduct.slug || !newProduct.category) {
      showToast("Name, Slug, and Category are required", "error");
      return;
    }
    
    if (!/^[a-z0-9-]+$/.test(newProduct.slug)) {
      showToast("Slug must contain only lowercase letters, numbers, and hyphens", "error");
      return;
    }

    try {
      setIsSaving(true);
      
      let imageUrls = [...newProduct.images];
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const uploadRes = await uploadImage(token, formData);
        imageUrls = [uploadRes.url];
      }

      const productData = {
        ...newProduct,
        images: imageUrls,
        price: Number(newProduct.price)
      };

      if (editingProduct) {
        const data = await updateProduct(token, editingProduct.slug, productData);
        setProducts(products.map(p => p.slug === editingProduct.slug ? data.product : p));
      } else {
        const data = await createProduct(token, productData);
        setProducts([...products, data.product]);
        showToast("Product created successfully", "success");
      }
      setIsAddingProduct(false);
      setEditingProduct(null);
      setNewProduct({ name: "", slug: "", category: "", price: "", description: "", images: [""] });
      setImageFile(null);
      setImagePreview("");
    } catch (err) {
      console.error("Error saving product:", err);
      showToast(err.message || "Failed to save product", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (slug) => {
    try {
      await deleteProduct(token, slug);
      setProducts(products.filter(p => p.slug !== slug));
      showToast("Product deleted successfully", "success");
    } catch (err) {
      console.error("Error deleting product:", err);
      showToast(err.message || "Failed to delete product", "error");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />
          <input 
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
          />
        </div>
        <button 
          onClick={() => {
            setEditingProduct(null);
            setNewProduct({ name: "", slug: "", category: "", price: "", description: "", images: [""] });
            setIsAddingProduct(true);
          }}
          className="bg-brand text-white py-3 px-6 rounded-sm font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
        >
          <Plus size={16} />
          Add New Product
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <Loader2 className="animate-spin text-brand" size={40} />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Inventory...</p>
          </div>
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-4 text-[8px] font-black uppercase tracking-widest text-slate-400">Product Info</th>
                  <th className="px-4 py-4 text-[8px] font-black uppercase tracking-widest text-slate-400 hidden md:table-cell">Category</th>
                  <th className="px-4 py-4 text-[8px] font-black uppercase tracking-widest text-slate-400">Price</th>
                  <th className="px-4 py-4 text-[8px] font-black uppercase tracking-widest text-slate-400 hidden md:table-cell">Status</th>
                  <th className="px-4 py-4 text-[8px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => (
                  <tr key={product.slug} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-sm relative overflow-hidden p-1 shrink-0">
                          {product.images?.[0] ? (
                            <Image src={product.images[0]} alt={product.name} fill className="object-contain" sizes="80px" />
                          ) : (
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                              <Plus size={10} />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-bold text-brand-blue line-clamp-1">{product.name}</p>
                          <p className="text-[8px] text-slate-300 font-medium uppercase tracking-widest">SKU: {product.slug?.slice(0, 6).toUpperCase() || 'N/A'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-400 text-[7px] font-black uppercase tracking-widest rounded-full">
                        {product.category?.replace(/-/g, " ") || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-[12px] font-bold text-brand-blue">₹{product.price?.toLocaleString("en-IN") || '0'}</p>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <div className="flex items-center gap-1.5 text-emerald-500">
                        <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                        <span className="text-[8px] font-black uppercase tracking-widest">In Stock</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button 
                          onClick={() => {
                            setEditingProduct(product);
                            setNewProduct({
                              name: product.name,
                              slug: product.slug,
                              category: product.category,
                              price: product.price,
                              description: product.description || "",
                              images: product.images || [""]
                            });
                            setIsAddingProduct(true);
                            setImagePreview(product.images?.[0] || "");
                            setImageFile(null);
                          }}
                          className="p-1.5 text-slate-300 hover:text-brand transition-colors"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.slug)}
                          className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"
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
      </div>

      {isAddingProduct && (
        <div className="fixed inset-0 bg-brand-blue/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden animate-reveal flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-widest">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
              <button 
                onClick={() => {
                  setIsAddingProduct(false);
                  setEditingProduct(null);
                  setImageFile(null);
                  setImagePreview("");
                }} 
                className="text-slate-400 hover:text-brand transition-colors p-2 -mr-2"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Product Name</label>
                  <input 
                    type="text" 
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                    placeholder="e.g. Flora 90 Chimney" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Slug</label>
                  <input 
                    type="text" 
                    value={newProduct.slug}
                    onChange={(e) => setNewProduct({ ...newProduct, slug: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                    placeholder="e.g. flora-90-chimney" 
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</label>
                  <select 
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium"
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => <option key={cat.slug} value={cat.slug}>{cat.name}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Price (INR)</label>
                  <input 
                    type="number" 
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium" 
                    placeholder="0.00" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Product Image</label>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-slate-50 border border-slate-200 rounded-sm overflow-hidden flex items-center justify-center relative">
                    {imagePreview || newProduct.images[0] ? (
                      <Image src={imagePreview || newProduct.images[0]} alt="Preview" fill className="object-contain" sizes="80px" />
                    ) : (
                      <ImageIcon className="text-slate-200" size={32} />
                    )}
                  </div>
                  <div className="flex-1">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden" 
                      id="product-image"
                    />
                    <label 
                      htmlFor="product-image"
                      className="inline-block px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-sm text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors"
                    >
                      {imageFile ? "Change Image" : "Upload Image"}
                    </label>
                    <p className="text-[8px] text-slate-400 mt-2 uppercase tracking-widest font-medium">MAX 5MB, JPG/PNG ONLY</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</label>
                <textarea 
                  rows="4" 
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand transition-all text-sm font-medium resize-none" 
                  placeholder="Product details..."
                ></textarea>
              </div>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4 shrink-0">
              <button 
                onClick={() => setIsAddingProduct(false)} 
                className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors"
                disabled={isSaving}
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveProduct}
                disabled={isSaving}
                className="px-8 py-3 bg-brand text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



