import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name != action.payload.name
      );
    },
    updateQuantity: (state, action) => {
      const typeUpdate = action.payload.typeUpdate;
      const itemInput = action.payload.item;
      const foundItem = state.items.find(
        (item) => item.name === itemInput.name
      );
      if (!foundItem) return;

      if (typeUpdate === "increase") foundItem.quantity++;
      else if (typeUpdate === "decrease") {
        if (foundItem.quantity > 0) foundItem.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
