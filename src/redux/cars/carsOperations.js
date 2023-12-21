import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAdverts from "../../api/fetchAdverts";

export const fetchCars = createAsyncThunk("cars/fetchCars", async (page, _) => {
  try {
    const response = await fetchAdverts(page);
    return response;
  } catch (error) {
    console.log(error);
  }
});
