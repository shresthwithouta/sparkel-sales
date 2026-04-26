const API_URL = '/api';

export const fetchProducts = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/products?${query}`);
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

export const createProduct = async (productData) => {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
};

export const updateProduct = async (slug, productData) => {
  const res = await fetch(`${API_URL}/products/${slug}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
};

export const deleteProduct = async (slug) => {
  const res = await fetch(`${API_URL}/products/${slug}`, {
    method: 'DELETE',
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

export const createCategory = async (categoryData) => {
  const res = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData),
  });
  if (!res.ok) throw new Error('Failed to create category');
  return res.json();
};

export const deleteCategory = async (slug) => {
  const res = await fetch(`${API_URL}/categories/${slug}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete category');
  return res.json();
};

export const fetchInquiries = async () => {
  try {
    const res = await fetch(`${API_URL}/inquiries`);
    if (!res.ok) return { inquiries: [] };
    return res.json();
  } catch (error) {
    return { inquiries: [] };
  }
};

export const deleteInquiry = async (id) => {
  const res = await fetch(`${API_URL}/inquiries/${id}`, {
    method: 'DELETE',
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



