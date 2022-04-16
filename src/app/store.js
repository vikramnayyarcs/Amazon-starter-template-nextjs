import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import termReducer from "../slices/termSlice";
import productsReducer from "../slices/productsSlice";

/**
 * @author Vikram Nayyar
 * 
 * The store is the container for the application's state.
 * 
 * Reducer - Function that determines changes to an application's state.
 * 
 * basket - Relates to the items in the basket (add/remove).
 * term - Relates to the search term which filters results.
 * products - Relates to the site's products.
 * 
 * 
 */

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    term: termReducer,
    products: productsReducer
  },
});
