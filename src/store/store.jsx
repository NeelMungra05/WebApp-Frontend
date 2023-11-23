import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "./steps";
import formButtonReducer from "./formButton";
import fileReducer from "./files";
import fieldsReducer from "./fields-slice";
import joinsReducer from "./joins-slice";
import reconJoinReducer from "./recon-join-slice";
import subServiceReducer from "./subService-slice";

const store = configureStore({
  reducer: {
    steps: stepsReducer,
    formButton: formButtonReducer,
    files: fileReducer,
    fields: fieldsReducer,
    joins: joinsReducer,
    reconJoins: reconJoinReducer,
    subService: subServiceReducer,
  },
});

export { store };
