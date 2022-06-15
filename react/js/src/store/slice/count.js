import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count++;
    },
    decrement(state, action) {
      state.count--;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = countSlice.actions;
export default countSlice.reducer;
