import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reconType: {
    preload: false,
    postload: true,
    financial: false,
  },
};

const subServiceSlice = createSlice({
  name: "subService",
  initialState,
  reducers: {
    change(state, action) {
      state.reconType = action.payload;
    },
  },
});

const subServiceReducer = subServiceSlice.reducer;

export const subServiceAction = subServiceReducer.actions;

export default subServiceReducer;
