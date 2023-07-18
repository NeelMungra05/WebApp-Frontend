import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sourceFields: [],
  targetFields: [],
};

const fieldsSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    addSourceFields(state, action) {
      state.sourceFields = action.payload;
    },
    addTargetFields(state, action) {
      state.targetFields = action.payload;
    },
    changeSourceState(state, action) {
      state.sourceFields = { ...state.sourceFields, ...action.payload };
    },
    changeTargetState(state, action) {
      state.targetFields = { ...state.targetFields, ...action.payload };
    },
  },
});

const fieldsReducer = fieldsSlice.reducer;

export const fieldsAction = fieldsSlice.actions;
export default fieldsReducer;
