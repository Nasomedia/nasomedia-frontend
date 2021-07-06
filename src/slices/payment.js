import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    method: "",
    amount: 0,
    orderId: "",
    orderName: "",
    customerName: "",
    successUrl: "",
    failUrl: "",
  },
  reducers: {
    setAction(state, action) {
      state.method = action.payload.method;
      state.amount = action.payload.amount;
      state.orderId = action.payload.orderId;
      state.orderName = action.payload.orderName;
      state.customerName = action.payload.customerName;
    },
    setUrlAction(state, action) {
      state.successUrl = action.payload.successUrl;
      state.failUrl = action.payload.failUrl;
    },
    setMethodAction(state, action) {
      state.method = action.payload.method;
    },

    setAmountAction(state, action) {
      state.amount = action.payload.amount;
    },

    setOrderNameAction(state, action) {
      state.orderName = action.payload.orderNAme;
    },
  },
});

const { reducer, actions } = paymentSlice;
export const {
  setAction,
  setUrlAction,
  setAmountAction,
  setMethodAction,
  setOrderNameAction,
} = actions;
export default reducer;
