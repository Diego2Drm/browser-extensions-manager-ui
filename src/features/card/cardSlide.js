import { createSlice } from "@reduxjs/toolkit";
import JsonData from "../../data.json"

const initialState = JsonData

export const cardSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    removeExtension: (state, action) => {
      const IdName = action.payload;
      return state.filter(extension => extension.name !== IdName)
    },
    isActiveExtencion: (state, action) => {
      const actives = [...state];
      const activeIndex = actives.findIndex(
        active => active.name == action.payload
      );
      if (activeIndex !== -1) {
        actives[activeIndex].isActive = !actives[activeIndex].isActive
      }
    },
    setAllExtensions: () => {
      return initialState
    },
  }
});

export const { removeExtension, isActiveExtencion, setAllExtensions } = cardSlice.actions;
export default cardSlice.reducer;
