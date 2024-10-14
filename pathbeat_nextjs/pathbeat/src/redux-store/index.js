
import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from './slices/citiesSlice';
import packagesSlice from './slices/packageSlice';
import generalSlice from './slices/generalSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    citiesSlice: citiesSlice,
    packagesSlice: packagesSlice,
    generalSlice: generalSlice,
    userSlice: userSlice,
  },
});
