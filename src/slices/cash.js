import { createSlice } from "@reduxjs/toolkit";

export const cashSlice = createSlice({
  name: "cash",
  initialState: {
    amount: 0,
    id: 0,
    user_id: 0,
    deposit: [],
    usage: [],
  },
  reducers: {
    setAction(state, action) {
      state.amount = action.payload.amount;
      state.id = action.payload.id;
      state.user_id = action.payload.user_id;
      state.deposit = action.payload.deposit;
      state.usage = action.payload.usage;
    },
  },
});

const { reducer, actions } = cashSlice;
export const { setAction } = actions;
export default reducer;
