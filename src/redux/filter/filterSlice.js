import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: null };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.items = { ...payload };
    },
    resetFilter(state) {
      state.items = null;
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
