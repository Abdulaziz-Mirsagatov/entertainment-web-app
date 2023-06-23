import { configureStore } from "@reduxjs/toolkit";
import searchStringReducer from "../features/searchSlice.js";

export const store = configureStore({
  reducer: {
    searchString: searchStringReducer,
  },
});
