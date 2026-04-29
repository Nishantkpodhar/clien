import { createSlice } from "@reduxjs/toolkit";
import products from "../assets/data/products.json";

const initialState = {
  products,
  filteredProducts: products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.filteredProducts = state.products.filter(
        (item) => item.category === action.payload
      );
    },

    resetProducts: (state) => {
      state.filteredProducts = state.products;
    },
  },
});

export const { filterByCategory, resetProducts } =
  productSlice.actions;

export default productSlice.reducer;