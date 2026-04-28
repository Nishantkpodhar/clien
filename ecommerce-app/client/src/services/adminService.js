import api from './axios';

export const fetchDashboard = () => api.get('/admin/dashboard');
