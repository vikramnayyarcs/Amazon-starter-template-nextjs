import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {state.theProducts = action.payload},
    removeProducts: (state, action) => {state.theProducts = null},
  },
});

export const {addProducts, removeProducts } = productsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectProducts = (state) => state.products.theProducts;

export default productsSlice.reducer;
