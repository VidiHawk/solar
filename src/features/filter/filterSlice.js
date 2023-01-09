import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layers: [
    { id: "power_", name: "Power", isChecked: true },
    { id: "heatmap_", name: "Solar Generation", isChecked: false },
    { id: "place_", name: "Labels", isChecked: true },
  ],
  // enabledLayers: ["Power", "Labels"],
  statusType: "",
  featured: "",
  isGridOrList: true,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addLayers: (state, action) => {
      state.layers = action.payload;
    },
    // addEnabledLayers: (state, action) => {
    //   state.enabledLayers = action.payload;
    // },
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
  addLayers,
  // addEnabledLayers,
  addStatusType,
  addFeatured,
  toggleGridAndList,
} = filterSlice.actions;
export default filterSlice.reducer;
