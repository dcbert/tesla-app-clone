import { state } from "@/models/state";
import { createSlice } from "@reduxjs/toolkit";

export const appConfigurationSlice = createSlice({
  name: "appConfiguration",
  initialState: {
    activeMenus: [
      {
        id: "charge-stats",
        title: "Charge Stats",
        icon: "bolt",
        href: "/charge-stats",
      },
      {
        id: "schedule",
        title: "Schedule",
        icon: "clock",
        href: "/schedule",
      },
      {
        id: "location",
        title: "Location",
        icon: "map",
        href: "/location",
      },
    ],
    quickControls:[
      {
        id: "lock",
        icon: "lock",
      },
      {
        id: "vent",
        icon: "window-maximize",
      },
      {
        id: "charge-port",
        icon: "bolt",
      },
      {
        id: "trunk",
        icon: "car",
      },
    ]
  },
  reducers: {

  },
});

export const {  } = appConfigurationSlice.actions;

export const selectAppConfiguration = (state: state) => state.appConfiguration;

export default appConfigurationSlice.reducer;
