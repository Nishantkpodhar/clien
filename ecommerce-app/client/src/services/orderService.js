import api from './axios';

export const createOrder = (order) => api.post('/orders', order);
export const fetchOrders = () => api.get('/orders');
