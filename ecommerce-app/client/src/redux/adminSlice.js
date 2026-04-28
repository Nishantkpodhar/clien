import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: { dashboardData: null },
  reducers: {
    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
  },
});

export const { setDashboardData } = adminSlice.actions;
export default adminSlice.reducer;
