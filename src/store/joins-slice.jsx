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
    addSourceJoinsFields(state, action) {
      const { type, selectedOptions, index } = action.payload;

      state.sourceJoins = { ...state.sourceJoins };
      state.sourceJoins.joinOn[index] = {
        ...state.sourceJoins.joinOn[index],
        [type]: selectedOptions,
      };
    },
    removeSourceJoins(state, action) {
      const { index } = action.payload;
      state.sourceJoins.fileOrder =
        index == 0 ? [] : state.sourceJoins.fileOrder.slice(0, index + 1);
      state.sourceJoins.joinOn = state.sourceJoins.joinOn.slice(0, index);
      state.sourceJoins.joinType = state.sourceJoins.joinType.slice(0, index);
    },
  },
});

const joinsReducer = joinsSlice.reducer;

export const joinsActions = joinsSlice.actions;

export default joinsReducer;
