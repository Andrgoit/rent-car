import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./carsOperations";
import { toast } from "react-toastify";

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  isShowLoadBtn: true,
  page: 1,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearCarList(state) {
      state.cars = [];
    },
    nextPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
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
      if (state.page === 1) {
        state.cars = [...payload];
      } else {
        state.cars = [...state.cars, ...payload];
      }
    });
    builder.addCase(fetchCars.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
      toast.error("Oops! Something wrong!");
    });
  },
});

export const { clearCarList, nextPage, resetPage } = carsSlice.actions;

export default carsSlice.reducer;
