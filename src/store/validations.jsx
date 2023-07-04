import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileUpload: {
    source: {
      isLessThan5: true,
      isNotZero: true,
      areLessThan50MB: true,
      isValidFileFormat: true,
    },
    target: {
      isLessThan5: true,
      isNotZero: true,
      areLessThan50MB: true,
      isValidFileFormat: true,
    },
    isValid: false,
  },
};

const validationSlice = createSlice({
  initialState,
  name: "validation",
  reducers: {
    changeUploadFileValidation(state, action) {
      state.fileUpload.source = action.payload.source;
      state.fileUpload.target = action.payload.target;
      state.fileUpload.isValid = Object.values(
        action.payload.source && action.payload.target
      ).reduce(prev, (curr) => prev && curr);
    },
  },
});

const validationReducer = validationSlice.reducer;

export const validationAction = validationSlice.actions;
export default validationReducer;
