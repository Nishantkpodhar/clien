import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// AUTH ENDPOINTS
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (data) => api.post('/auth/signup', data),
  refreshToken: () => api.post('/auth/refresh'),
};

// PRODUCT ENDPOINTS
export const productAPI = {
  fetchAll: () => api.get('/products'),
  fetchById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

// CART ENDPOINTS
export const cartAPI = {
  getCart: () => api.get('/cart'),
  addItem: (data) => api.post('/cart/add', data),
  removeItem: (productId) => api.delete(`/cart/${productId}`),
  updateQuantity: (productId, quantity) => api.patch(`/cart/${productId}`, { quantity }),
  clearCart: () => api.delete('/cart'),
};

// ORDER ENDPOINTS
export const orderAPI = {
  create: (order) => api.post('/orders', order),
  fetchAll: () => api.get('/orders'),
  fetchById: (id) => api.get(`/orders/${id}`),
  cancel: (id) => api.patch(`/orders/${id}/cancel`),
  track: (id) => api.get(`/orders/${id}/track`),
};

// PAYMENT ENDPOINTS
export const paymentAPI = {
  createIntent: (data) => api.post('/payments/create-intent', data),
  confirmPayment: (data) => api.post('/payments/confirm', data),
};

// ADMIN ENDPOINTS
export const adminAPI = {
  getDashboard: () => api.get('/admin/dashboard'),
  getUsers: () => api.get('/admin/users'),
  getOrders: () => api.get('/admin/orders'),
  updateOrderStatus: (id, status) => api.patch(`/admin/orders/${id}`, { status }),
};

export default api;
