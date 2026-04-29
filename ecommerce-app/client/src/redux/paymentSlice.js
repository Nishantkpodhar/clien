import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  methods: ["UPI", "Card", "NetBanking", "Wallet", "COD"],
  selectedMethod: "UPI",
  transactions: [],
  coupon: null,
  discount: 0,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    selectPaymentMethod: (state, action) => {
      state.selectedMethod = action.payload;
    },

    applyCoupon: (state, action) => {
      const coupons = {
        SHOP10: 10,
        FEST20: 20,
        NEWUSER25: 25,
      };

      const discount = coupons[action.payload];

      if (discount) {
        state.coupon = action.payload;
        state.discount = discount;
      }
    },

    saveTransaction: (state, action) => {
      state.transactions.unshift(action.payload);
    },

    clearCoupon: (state) => {
      state.coupon = null;
      state.discount = 0;
    },
  },
});

export const {
  selectPaymentMethod,
  applyCoupon,
  saveTransaction,
  clearCoupon,
} = paymentSlice.actions;

export default paymentSlice.reducer;