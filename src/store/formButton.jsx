import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  showPrevButton: false,
  showNextButton: true,
  showSubmitButton: false,
};

const formButtonSlice = createSlice({
  name: "formButton",
  initialState,
  reducers: {
    prevButton(state) {
      state.showNextButton = false;
      (state.showSubmitButton = false), (state.showPrevButton = true);
    },
    nextButton(state) {
      state.showNextButton = true;
      state.showPrevButton = false;
      state.showSubmitButton = false;
    },
    submitButton(state) {
      state.showNextButton = false;
      state.showPrevButton = false;
      state.showSubmitButton = true;
    },
  },
});

const formButtonReducer = formButtonSlice.reducer;

export const formButtonAction = formButtonSlice.actions;
export default formButtonReducer;
