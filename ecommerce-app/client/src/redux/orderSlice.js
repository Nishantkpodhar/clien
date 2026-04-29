import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },

    updateOrderStatus: (state, action) => {
      const order = state.orders.find(
        (o) => o.id === action.payload.id
      );

      if (order) {
        order.status = action.payload.status;
      }
    },
  },
});

export const {
  placeOrder,
  updateOrderStatus,
} = orderSlice.actions;

export default orderSlice.reducer;