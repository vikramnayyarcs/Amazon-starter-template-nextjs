import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theTerm: null
};

export const termSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    addTerm: (state, action) => {state.theTerm = action.payload},
    removeTerm: (state, action) => {state.theTerm = null},
  },
});

export const { addToterm, removeFromterm, addTerm, removeTerm } = termSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectTerm = (state) => state.term.theTerm;

export default termSlice.reducer;
