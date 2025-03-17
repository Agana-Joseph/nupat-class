import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.totalItems += 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalItems -= 1;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
