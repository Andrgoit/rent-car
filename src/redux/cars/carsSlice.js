import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  isShowLoadBtn: true,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCarList(state) {
      state.cars = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.length < 8) {
        state.isShowLoadBtn = false;
      }
      state.cars = [...state.cars, ...payload];
    });
    builder.addCase(fetchCars.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export const { clearCarList } = carsSlice.actions;

export default carsSlice.reducer;
