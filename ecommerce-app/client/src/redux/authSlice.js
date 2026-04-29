import { createSlice } from "@reduxjs/toolkit";
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
  setToken,
  setUser,
} from "../utils/storage";

const initialState = {
  user: getUser(),
  token: getToken(),
  isAuthenticated: !!getToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      setToken(action.payload.token);
      setUser(action.payload.user);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      removeToken();
      removeUser();
    },
  },
});

export const { loginSuccess, logout } =
  authSlice.actions;

export default authSlice.reducer;