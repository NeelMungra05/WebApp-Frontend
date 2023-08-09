import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sourcePK: [],
  targetPK: [],
  sourceOrder: [],
  targetOrder: [],
};

const reconJoinSlice = createSlice({
  name: "reconJoin",
  initialState,
  reducers: {
    changeSourcePK(state, action) {
      state.sourcePK = action.payload;
    },
    changeTargetPK(state, action) {
      state.targetPK = action.payload;
    },
    changeSourceOrder(state, action) {
      state.sourceOrder = action.payload;
    },
    changeTargetOrder(state, action) {
      state.targetOrder = action.payload;
    },
  },
});
const reconJoinReducer = reconJoinSlice.reducer;

export const reconJoinAction = reconJoinSlice.actions;
export default reconJoinReducer;
