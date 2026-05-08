const API_URL = '/api';

// Centralized request helper to handle 401s and common logic
const apiRequest = async (endpoint, options = {}) => {
  const { token, ...fetchOptions } = options;
  
  const headers = {
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...fetchOptions.headers,
  };

  // Only set application/json if body is not FormData
  if (!(fetchOptions.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...fetchOptions,
      headers,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    // Handle 401 Unauthorized globally
    if (res.status === 401) {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('unauthorized'));
      }
    }

    if (!res.ok) {
      let errorMessage = `Request failed with status ${res.status}`;
      try {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // Not JSON
      }
      throw new Error(errorMessage);
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async (params = {}) => {
  try {
    if (!params.limit) params.limit = 100;
    const query = new URLSearchParams(params).toString();
    return await apiRequest(`/products?${query}`);
  } catch (error) {
    console.warn("Backend not reachable, using fallback data.");
    return { products: [], total: 0 };
  }
};

export const searchProducts = async (params = {}) => {
  try {
    if (!params.limit) params.limit = 100;
    const query = new URLSearchParams(params).toString();
    return await apiRequest(`/products/search?${query}`);
  } catch (error) {
    console.warn("Backend not reachable, using fallback data.");
    return { products: [], total: 0 };
  }
};

export const fetchProductBySlug = async (slug) => {
  try {
    return await apiRequest(`/products/${slug}`);
  } catch (error) {
    return null;
  }
};

export const createProduct = (token, productData) => 
  apiRequest('/products', { method: 'POST', token, body: JSON.stringify(productData) });

export const updateProduct = (token, slug, productData) => 
  apiRequest(`/products/${slug}`, { method: 'PUT', token, body: JSON.stringify(productData) });

export const deleteProduct = (token, slug) => 
  apiRequest(`/products/${slug}`, { method: 'DELETE', token });

export const fetchCategories = async () => {
  try {
    return await apiRequest('/categories');
  } catch (error) {
    return { categories: [] };
  }
};

export const createCategory = (token, categoryData) => 
  apiRequest('/categories', { method: 'POST', token, body: JSON.stringify(categoryData) });

export const updateCategory = (token, slug, categoryData) => 
  apiRequest(`/categories/${slug}`, { method: 'PUT', token, body: JSON.stringify(categoryData) });

export const deleteCategory = (token, slug) => 
  apiRequest(`/categories/${slug}`, { method: 'DELETE', token });

export const fetchInquiries = async (token) => {
  try {
    return await apiRequest('/inquiries', { token });
  } catch (error) {
    return { inquiries: [] };
  }
};

export const deleteInquiry = (token, id) => 
  apiRequest(`/inquiries/${id}`, { method: 'DELETE', token });

export const loginUser = (credentials) => 
  apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });

export const registerUser = (userData) => 
  apiRequest('/auth/register', { method: 'POST', body: JSON.stringify(userData) });

export const fetchUserMe = (token) => 
  apiRequest('/auth/me', { token });

export const createInquiry = (inquiryData) => 
  apiRequest('/inquiries', { method: 'POST', body: JSON.stringify(inquiryData) });

export const updateInquiryStatus = (token, id, status) => 
  apiRequest(`/inquiries/${id}`, { method: 'PUT', token, body: JSON.stringify({ status }) });

export const updateUserProfile = (token, profileData) => 
  apiRequest('/auth/me', { method: 'PUT', token, body: JSON.stringify(profileData) });

export const createOrder = (token, orderData) => 
  apiRequest('/orders', { method: 'POST', token, body: JSON.stringify(orderData) });

export const fetchUserOrders = async (token, limit = 10, page = 1) => {
  try {
    return await apiRequest(`/orders/me?limit=${limit}&page=${page}`, { token });
  } catch (error) {
    return { orders: [] };
  }
};

export const fetchOrderById = (token, id) => 
  apiRequest(`/orders/${id}`, { token });

export const fetchBanners = async () => {
  try {
    return await apiRequest('/settings/banners');
  } catch (error) {
    return { banners: [] };
  }
};

export const updateBanner = (token, id, bannerData) => 
  apiRequest(`/settings/banners/${id}`, { method: 'PUT', token, body: JSON.stringify(bannerData) });

export const createBanner = (token, bannerData) => 
  apiRequest('/settings/banners', { method: 'POST', token, body: JSON.stringify(bannerData) });

export const deleteBanner = (token, id) => 
  apiRequest(`/settings/banners/${id}`, { method: 'DELETE', token });

export const fetchSiteSettings = async () => {
  try {
    return await apiRequest('/settings/site');
  } catch (error) {
    return { settings: null };
  }
};

export const updateSiteSettings = (token, settingsData) => 
  apiRequest('/settings/site', { method: 'PUT', token, body: JSON.stringify(settingsData) });

export const loginWithGoogle = (idToken) => 
  apiRequest('/auth/google', { method: 'POST', body: JSON.stringify({ token: idToken }) });

export const fetchStats = (token) => 
  apiRequest('/admin/stats', { token });

export const fetchWishlist = async (token) => {
  try {
    return await apiRequest('/wishlist', { token });
  } catch (error) {
    return { items: [] };
  }
};

export const addToWishlist = (token, product) => 
  apiRequest('/wishlist', { method: 'POST', token, body: JSON.stringify(product) });

export const removeFromWishlist = (token, slug) => 
  apiRequest(`/wishlist/${slug}`, { method: 'DELETE', token });

export const clearWishlistApi = (token) => 
  apiRequest('/wishlist/clear', { method: 'DELETE', token });

export const fetchCart = async (token) => {
  try {
    return await apiRequest('/cart', { token });
  } catch (error) {
    return { items: [] };
  }
};

export const addToCartApi = (token, product) => 
  apiRequest('/cart', { method: 'POST', token, body: JSON.stringify(product) });

export const removeFromCartApi = (token, slug) => 
  apiRequest(`/cart/${slug}`, { method: 'DELETE', token });

export const updateCartItemApi = (token, slug, quantity) => 
  apiRequest(`/cart/${slug}`, { method: 'PUT', token, body: JSON.stringify({ quantity }) });

export const clearCartApi = (token) => 
  apiRequest('/cart/clear', { method: 'DELETE', token });

export const updateOrderStatus = (token, id, status) => 
  apiRequest(`/admin/orders/${id}/status`, { method: 'PATCH', token, body: JSON.stringify({ status }) });

export const fetchAllOrders = (token) => 
  apiRequest('/admin/orders', { token });

export const uploadImage = (token, formData) => {
  // Client-side validation: Max 5MB, images only
  const file = formData.get('image');
  if (file) {
    if (file.size > 5 * 1024 * 1024) throw new Error("File size exceeds 5MB limit");
    if (!file.type.startsWith('image/')) throw new Error("Only image files are allowed");
  }
  return apiRequest('/upload', { method: 'POST', body: formData });
};

export const fetchUsers = (token) => 
  apiRequest('/admin/users', { token });

export const updateAdminUser = (token, id, data) => 
  apiRequest(`/admin/users/${id}`, { method: 'PATCH', token, body: JSON.stringify(data) });

export const updateProfile = (token, profileData) => 
  apiRequest('/auth/profile', { method: 'PUT', token, body: JSON.stringify(profileData) });

export const updatePassword = (token, passwordData) => 
  apiRequest('/auth/password', { method: 'PUT', token, body: JSON.stringify(passwordData) });

export const applyForJob = (jobData) => 
  apiRequest('/jobs/apply', { method: 'POST', body: JSON.stringify(jobData) });
