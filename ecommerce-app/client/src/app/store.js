import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import productReducer from "../redux/productSlice";
import cartReducer from "../redux/cartSlice";
import orderReducer from "../redux/orderSlice";
import adminReducer from "../redux/adminSlice";
import paymentReducer from "../redux/paymentSlice";
import wishlistReducer from "../redux/wishlistSlice";
import notificationReducer from "../redux/notificationSlice";
import sellerReducer from "../redux/sellerSlice";
import reviewReducer from "../redux/reviewSlice";
import chatReducer from "../redux/chatSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    admin: adminReducer,
    payment: paymentReducer,
    wishlist: wishlistReducer,
    notification: notificationReducer,
    seller: sellerReducer,
    reviews: reviewReducer,
    chat: chatReducer,
  },
});

export default store;