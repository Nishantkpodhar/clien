import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sellers: [
    {
      id: 1,
      name: "Tech World",
      email: "seller@gmail.com",
      rating: 4.7,
      revenue: 240000,
      products: [],
    },
  ],
  currentSeller: null,
  inventory: [],
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,

  reducers: {
    setCurrentSeller: (state, action) => {
      state.currentSeller = action.payload;
    },

    addProductToInventory: (state, action) => {
      state.inventory.unshift({
        id: Date.now(),
        ...action.payload,
      });
    },

    updateStock: (state, action) => {
      const item = state.inventory.find(
        (p) => p.id === action.payload.id
      );

      if (item) {
        item.stock = action.payload.stock;
      }
    },

    deleteInventoryItem: (state, action) => {
      state.inventory = state.inventory.filter(
        (p) => p.id !== action.payload
      );
    },
  },
});

export const {
  setCurrentSeller,
  addProductToInventory,
  updateStock,
  deleteInventoryItem,
} = sellerSlice.actions;

export default sellerSlice.reducer;