import { createSlice } from "@reduxjs/toolkit";
import reviews from "../assets/data/reviews.json";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    list: reviews,
  },

  reducers: {
    approveReview: (state, action) => {
      const review = state.list.find(
        (r) => r.id === action.payload
      );

      if (review) review.approved = true;
    },

    removeReview: (state, action) => {
      state.list = state.list.filter(
        (r) => r.id !== action.payload
      );
    },
  },
});

export const {
  approveReview,
  removeReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;