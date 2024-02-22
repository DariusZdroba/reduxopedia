import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "Worlds longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zeeland",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {},
});
export const destinationReducer = destinationSlice.reducer;
