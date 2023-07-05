import { configureStore } from "@reduxjs/toolkit";
import stepsReducer from "./steps";
import formButtonReducer from "./formButton";
import fileReducer from "./files";
import fieldsReducer from "./fields-slice";
import validationReducer from "./validations";

const store = configureStore({
  reducer: {
    steps: stepsReducer,
    formButton: formButtonReducer,
    files: fileReducer,
    fields: fieldsReducer,
    validation: validationReducer,
  },
});

export { store };
