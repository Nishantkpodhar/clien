import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: { items: [] },
  reducers: {
    setReviews: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
