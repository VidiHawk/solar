import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleLayers: ["Power", "Labels"],
  statusType: "",
  featured: "",
  isGridOrList: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addVisibleLayers: (state, action) => {
      state.visibleLayers = action.payload;
    },
    addStatusType: (state, action) => {
      state.statusType = action.payload;
    },
    addFeatured: (state, action) => {
      state.featured = action.payload;
    },
    toggleGridAndList: (state, action) => {
      state.isGridOrList = action.payload;
    },
  },
});

export const {
  addVisibleLayers,
  addStatusType,
  addFeatured,
  toggleGridAndList,
} = filterSlice.actions;
export default filterSlice.reducer;
