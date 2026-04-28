import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import productReducer from '../redux/productSlice';
import cartReducer from '../redux/cartSlice';
import orderReducer from '../redux/orderSlice';
import reviewReducer from '../redux/reviewSlice';
import wishlistReducer from '../redux/wishlistSlice';
import paymentReducer from '../redux/paymentSlice';
import adminReducer from '../redux/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer,
    reviews: reviewReducer,
    wishlist: wishlistReducer,
    payment: paymentReducer,
    admin: adminReducer,
  },
});
