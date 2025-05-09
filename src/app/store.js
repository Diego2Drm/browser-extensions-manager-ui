import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/card/cardSlide"

export const store = configureStore({
  reducer: {
    data: cardReducer,
  }
});