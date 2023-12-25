import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";
import orderReducer from "./order/orderSlice";
import favoriteReducer from "./favorite/favoriteSlice";
import filterReducer from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    order: orderReducer,
    favorite: favoriteReducer,
    filter: filterReducer,
  },
});
