import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sourceJoins: [],
  targetJoins: [],
};

const joinsSlice = createSlice({
  name: "interalFilesJoins",
  initialState,
  reducers: {
    addSourceJoins(state, action) {
      state.sourceJoins = state.sourceJoins;
    },
  },
});

const joinsReducer = joinsSlice.reducer();

export const joinsActions = joinsSlice.actions();

export default joinsReducer;
