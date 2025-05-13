import { createSlice } from "@reduxjs/toolkit";
import JsonData from "../../data.json"

const DEFAULT_STATE = JsonData
// const DEFAULT_STATE = JsonData.map(item => ({ ...item, isDeleted: false }));

const initialState = (() => {
  const stateLocalStorage = localStorage.getItem("__redux__state__");
  if (stateLocalStorage) return JSON.parse(stateLocalStorage).data;
  return DEFAULT_STATE;

})();

export const cardSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    removeExtension: (state, action) => {
      // const IdName = action.payload;
      // return state.filter(extension => extension.name !== IdName)
      const itemIndex = state.findIndex(extension => extension.name === action.payload);
      if (itemIndex !== -1) {
        state[itemIndex].isDeleted = true
      }
    },
    restoreExtension: (state, action) => {
      const itemIndex = state.findIndex(extension => extension.name === action.payload);
      if (itemIndex !== -1) {
        state[itemIndex].isDeleted = false;
      }
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

export const { removeExtension, isActiveExtencion, setAllExtensions, restoreExtension } = cardSlice.actions;
export default cardSlice.reducer;
