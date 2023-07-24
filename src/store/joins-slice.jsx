import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sourceJoins: {
    fileOrder: [],
    joinType: [],
    joinOn: [],
  },
  targetJoins: {},
};

const JOINS = {
  "Inner Join": "inner",
  "Left Join": "left",
};

const joinsSlice = createSlice({
  name: "interalFilesJoins",
  initialState,
  reducers: {
    addSourceJoins(state, action) {
      const { type, tables } = action.payload;
      state.sourceJoins.fileOrder = tables;
      state.sourceJoins.joinType = [...state.sourceJoins.joinType, JOINS[type]];
    },
  },
});

const joinsReducer = joinsSlice.reducer;

export const joinsActions = joinsSlice.actions;

export default joinsReducer;
