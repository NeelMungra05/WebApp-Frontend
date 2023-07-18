import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sourceFile: [],
  targetFile: [],
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    addSourceFile(state, action) {
      const filteredFiles = Array.from(action.payload).filter(
        (file) => file.size <= 50 * 1024 * 1024
      );
      state.sourceFile = [...state.sourceFile, ...filteredFiles];
    },
    removeSourceFile(state, action) {
      state.sourceFile = state.sourceFile.filter(
        (file) => file.name !== action.payload
      );
    },
    addTargetFile(state, action) {
      state.targetFile = [...state.targetFile, ...action.payload];
    },
    removeTargetFile(state, action) {
      state.targetFile = state.targetFile.filter(
        (file) => file.name !== action.payload
      );
    },
  },
});

const fileReducer = fileSlice.reducer;

export const fileAction = fileSlice.actions;
export default fileReducer;
