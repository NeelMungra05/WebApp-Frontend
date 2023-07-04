import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileUpload: {
    source: {
      isLessThan5: true,
      isZero: true,
      areLessThan50MB: true,
      isValidFileFormat: true,
    },
    target: {
      isLessThan5: true,
      isZero: true,
      areLessThan50MB: true,
      isValidFileFormat: true,
    },
  },
};
