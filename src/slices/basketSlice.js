import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      //Go through basket and find the product that matches our ID.
      const index = state.items.findIndex(item => item.id === action.payload.id);

      //Create a copy of the basket for us to manipulate.
      let newBasket = [...state.items];

      //If the item exists then remove it (NOT -1)
      if (index >= 0) {
        newBasket.splice(index,1) //Removes it.
      }
      else {
        console.warn(`Cannot remove product (id: ${action.payload.id}) as it's not in the basket!`)
      }
      
      state.items = newBasket; //Updates the basket to the new one.
    },
  },
});

export const { addToBasket, removeFromBasket} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

// Loop through items and add each price to the total! Default is 0.
export const selectTotal = (state) => state.basket.items.reduce((total,item) => total+item.price,0);

export default basketSlice.reducer;
