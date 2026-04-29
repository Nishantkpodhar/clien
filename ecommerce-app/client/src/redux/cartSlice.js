import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload.id
      );

      if (item) item.qty += 1;
      else state.items.push({ ...action.payload, qty: 1 });
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;