import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    loginAction(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutAction(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer, actions } = userSlice;
export const { loginAction, logoutAction } = actions;
export default reducer;
