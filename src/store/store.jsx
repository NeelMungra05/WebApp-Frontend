import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import stepsReducer from "./steps";
import formButtonReducer from "./formButton";
import fileReducer from "./files";

const store = configureStore({
  reducer: {
    steps: stepsReducer,
    formButton: formButtonReducer,
    files: fileReducer,
  },
});

export default store;
