import api from './axios';

export const login = (credentials) => api.post('/auth/login', credentials);
export const signup = (data) => api.post('/auth/signup', data);
export const refreshToken = () => api.post('/auth/refresh');
