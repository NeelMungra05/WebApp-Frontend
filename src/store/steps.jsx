import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: 1,
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    next(state) {
      state.steps++;
    },
    previous(state) {
      state.steps--;
    },
  },
});

const stepsReducer = stepsSlice.reducer;

export const stepsAction = stepsSlice.actions;

export default stepsReducer;
