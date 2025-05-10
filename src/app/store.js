import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/card/cardSlide"

const stateLocalStorageMiddleware = store => next => action => {
  next(action);
  localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}

export const store = configureStore({
  reducer: {
    data: cardReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(stateLocalStorageMiddleware);
  }
});