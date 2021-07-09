// /lib/slices/index.js
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "@reduxjs/toolkit";

import { userSlice } from "./user";
import { paymentSlice } from "./payment";
import { cashSlice } from "./cash";

export const reducer = (state = {}, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    [userSlice.name]: userSlice.reducer,
    [paymentSlice.name]: paymentSlice.reducer,
    [cashSlice.name]: cashSlice.reducer,
  })(state, action);
};
