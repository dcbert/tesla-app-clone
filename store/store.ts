import { configureStore } from '@reduxjs/toolkit';
import appConfigurationReducer from './modules/appConfigurationSlice';
import carReducer from './modules/carSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    appConfiguration: appConfigurationReducer
  },
});