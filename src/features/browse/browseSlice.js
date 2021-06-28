import { createSlice } from "@reduxjs/toolkit";

const initialState = { houses: [] };

export const browseSlice = createSlice({
  name: "browse",
  initialState,
  reducers: {
    setHousesReducer: (state, action) => {
      state.houses = action.payload;
    },
  },
});

export const { setHousesReducer } = browseSlice.actions;

export const selectHouses = (state) => state.houses;

export default browseSlice.reducer;
