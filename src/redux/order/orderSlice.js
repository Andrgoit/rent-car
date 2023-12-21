import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, { payload }) {
      state.item = payload;
    },
    clearOrder(state) {
      state.item = null;
    },
  },
});

export const { addOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
