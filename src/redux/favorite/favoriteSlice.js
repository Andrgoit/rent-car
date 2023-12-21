import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, { payload }) {
      const idx = state.items.findIndex((item) => item.id === payload.id);
      if (idx === -1) {
        state.items.push(payload);
      } else {
        state.items.splice(idx, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
