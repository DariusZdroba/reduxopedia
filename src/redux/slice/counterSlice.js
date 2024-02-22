import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //here we define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    multiplyCount: (state, action) => {
      state.count *= action.payload;
    },
    decrementMultiply: (state, action) => {
      state.count /= action.payload;
    },
  },
});

export const { increment, decrement, multiplyCount, decrementMultiply } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
