import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",

  initialState: {
    messages: [],
  },

  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: Date.now(),
        sender: action.payload.sender,
        text: action.payload.text,
        createdAt: new Date().toISOString(),
      });
    },
  },
});

export const { sendMessage } =
  chatSlice.actions;

export default chatSlice.reducer;