import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    list: [],
  },
  reducers: {
    addNotification: (state, action) => {
      state.list.unshift({
        id: Date.now(),
        message: action.payload,
        read: false,
      });
    },

    markRead: (state, action) => {
      const item = state.list.find(
        (n) => n.id === action.payload
      );

      if (item) item.read = true;
    },
  },
});

export const {
  addNotification,
  markRead,
} = notificationSlice.actions;

export default notificationSlice.reducer;