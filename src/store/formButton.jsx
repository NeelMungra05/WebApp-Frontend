import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPrevButton: false,
  showNextButton: true,
  showSubmitButton: false,
};

const formButtonSlice = createSlice({
  name: "formButton",
  initialState,
  reducers: {
    prevButton(state, action) {
      state.showPrevButton = action.payload;
    },
    nextButton(state, action) {
      state.showNextButton = action.payload;
    },
    submitButton(state, action) {
      state.showSubmitButton = action.payload;
    },
  },
});

const formButtonReducer = formButtonSlice.reducer;

export const formButtonAction = formButtonSlice.actions;
export default formButtonReducer;
