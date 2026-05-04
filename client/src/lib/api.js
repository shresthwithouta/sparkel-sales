const API_URL = '/api';

export const fetchProducts = async (params = {}) => {
  try {
    if (!params.limit) params.limit = 100;
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/products?${query}`);
    if (!res.ok) return { products: [], total: 0 };
    return res.json();
  } catch (error) {
    console.warn("Backend not reachable, using fallback data.");
    return { products: [], total: 0 };
  }
};

export const searchProducts = async (params = {}) => {
  try {
    if (!params.limit) params.limit = 100;
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/products/search?${query}`);
    if (!res.ok) return { products: [], total: 0 };
    return res.json();
  } catch (error) {
    console.warn("Backend not reachable, using fallback data.");
    return { products: [], total: 0 };
  }
};

export const fetchProductBySlug = async (slug) => {
  try {
    const res = await fetch(`${API_URL}/products/${slug}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
};

export const createProduct = async (token, productData) => {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
};

export const updateProduct = async (token, slug, productData) => {
  const res = await fetch(`${API_URL}/products/${slug}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
};

export const deleteProduct = async (token, slug) => {
  const res = await fetch(`${API_URL}/products/${slug}`, {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
};

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${API_URL}/categories`);
    if (!res.ok) return { categories: [] };
    return res.json();
  } catch (error) {
    return { categories: [] };
  }
};

export const createCategory = async (token, categoryData) => {
  const res = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(categoryData),
  });
  if (!res.ok) throw new Error('Failed to create category');
  return res.json();
};

export const updateCategory = async (token, slug, categoryData) => {
  const res = await fetch(`${API_URL}/categories/${slug}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(categoryData),
  });
  if (!res.ok) throw new Error('Failed to update category');
  return res.json();
};

export const deleteCategory = async (token, slug) => {
  const res = await fetch(`${API_URL}/categories/${slug}`, {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error('Failed to delete category');
  return res.json();
};

export const fetchInquiries = async (token) => {
  try {
    const res = await fetch(`${API_URL}/inquiries`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) return { inquiries: [] };
    return res.json();
  } catch (error) {
    return { inquiries: [] };
  }
};

export const deleteInquiry = async (token, id) => {
  const res = await fetch(`${API_URL}/inquiries/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error('Failed to delete inquiry');
  return res.json();
};

export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  
  if (!res.ok) {
    if (res.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    }
    let errorMessage = 'Login failed';
    try {
      const error = await res.json();
      errorMessage = error.message || errorMessage;
    } catch (e) {
      errorMessage = `Server error (${res.status}). Please ensure the backend is running.`;
    }
    throw new Error(errorMessage);
  }
  return res.json();
};

export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  
  if (!res.ok) {
    if (res.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    }
    let errorMessage = 'Registration failed';
    try {
      const error = await res.json();
      errorMessage = error.message || errorMessage;
    } catch (e) {
      errorMessage = `Server error (${res.status}). Please ensure the backend is running.`;
    }
    throw new Error(errorMessage);
  }
  return res.json();
};

export const fetchUserMe = async (token) => {
  const res = await fetch(`${API_URL}/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
};

export const createInquiry = async (inquiryData) => {
  const res = await fetch(`${API_URL}/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiryData),
  });
  if (!res.ok) throw new Error('Failed to create inquiry');
  return res.json();
};

export const updateInquiryStatus = async (token, id, status) => {
  const res = await fetch(`${API_URL}/inquiries/${id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update inquiry status');
  return res.json();
};

export const updateUserProfile = async (token, profileData) => {
  const res = await fetch(`${API_URL}/auth/me`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(profileData),
  });
  if (!res.ok) throw new Error('Failed to update profile');
  return res.json();
};

export const createOrder = async (token, orderData) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(orderData),
  });
  if (!res.ok) throw new Error('Failed to create order');
  return res.json();
};

export const fetchUserOrders = async (token) => {
  const res = await fetch(`${API_URL}/orders/me`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) return { orders: [] };
  return res.json();
};

export const fetchBanners = async () => {
  try {
    const res = await fetch(`${API_URL}/settings/banners`);
    if (!res.ok) return { banners: [] };
    return res.json();
  } catch (error) {
    return { banners: [] };
  }
};

export const updateBanner = async (token, id, bannerData) => {
  const res = await fetch(`${API_URL}/settings/banners/${id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(bannerData),
  });
  if (!res.ok) throw new Error('Failed to update banner');
  return res.json();
};

export const createBanner = async (token, bannerData) => {
  const res = await fetch(`${API_URL}/settings/banners`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(bannerData),
  });
  if (!res.ok) throw new Error('Failed to create banner');
  return res.json();
};

export const deleteBanner = async (token, id) => {
  const res = await fetch(`${API_URL}/settings/banners/${id}`, {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${token}` 
    }
  });
  if (!res.ok) throw new Error('Failed to delete banner');
  return res.json();
};

export const fetchSiteSettings = async () => {
  try {
    const res = await fetch(`${API_URL}/settings/site`);
    if (!res.ok) return { settings: null };
    return res.json();
  } catch (error) {
    return { settings: null };
  }
};

export const updateSiteSettings = async (token, settingsData) => {
  const res = await fetch(`${API_URL}/settings/site`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(settingsData),
  });
  if (!res.ok) throw new Error('Failed to update site settings');
  return res.json();
};

export const loginWithGoogle = async (idToken) => {
  const res = await fetch(`${API_URL}/auth/google`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: idToken }),
  });
  
  if (!res.ok) {
    let errorMessage = 'Google login failed';
    try {
      const error = await res.json();
      errorMessage = error.message || errorMessage;
    } catch (e) {
      errorMessage = `Server error (${res.status}).`;
    }
    throw new Error(errorMessage);
  }
  return res.json();
};

export const fetchStats = async (token) => {
  const res = await fetch(`${API_URL}/admin/stats`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
};

export const fetchWishlist = async (token) => {
  const res = await fetch(`${API_URL}/wishlist`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) return { items: [] };
  return res.json();
};

export const addToWishlist = async (token, product) => {
  const res = await fetch(`${API_URL}/wishlist`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Failed to add to wishlist');
  return res.json();
};

export const removeFromWishlist = async (token, slug) => {
  const res = await fetch(`${API_URL}/wishlist/${slug}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to remove from wishlist');
  return res.json();
};

export const clearWishlistApi = async (token) => {
  const res = await fetch(`${API_URL}/wishlist/clear`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to clear wishlist');
  return res.json();
};

export const updateOrderStatus = async (token, id, status) => {
  const res = await fetch(`${API_URL}/admin/orders/${id}/status`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Failed to update order status');
  return res.json();
};

export const fetchAllOrders = async (token) => {
  const res = await fetch(`${API_URL}/admin/orders`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Failed to fetch all orders');
  return res.json();
};

export const uploadImage = async (token, formData) => {
  const res = await fetch(`${API_URL}/upload`, {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${token}` 
    },
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to upload image');
  return res.json();
};
