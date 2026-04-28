import api from './axios';

export const createPaymentIntent = (data) => api.post('/payments/create-intent', data);
