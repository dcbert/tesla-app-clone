import { state } from '@/models/state';
import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
  name: 'car',
  initialState: {
    name:'NCC-1701',
    batteryPercentage:50,
    remainingRange:200,
    isCharging:true,
  },
  reducers: {
    toggleCharge: (state) => {
      state.isCharging = !state.isCharging;
    },
  },
});

export const { toggleCharge } = carSlice.actions;

export const selectCarInfo = (state: state) => state.car;

export default carSlice.reducer;