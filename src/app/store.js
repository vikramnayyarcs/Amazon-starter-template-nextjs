import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import termReducer from "../slices/termSlice";
import productsReducer from "../slices/productsSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    term: termReducer,
    products: productsReducer
  },
});
