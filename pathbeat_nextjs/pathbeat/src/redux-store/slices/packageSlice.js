import { createSlice } from '@reduxjs/toolkit';

const packagesSlice = createSlice({
  name: 'packagesSlice',
  initialState: {
    packages: [],
    packageDetails: {},
  },
  reducers: {
    setPackages(state, action) {
      state.packages = action.payload;
    },
    setLoadMorePackages(state, action) {
      state.packages = [...state.packages, ...action.payload];
    },
    setPackageDetails(state, action) {
      state.packageDetails = action.payload;
    },
  },
});

export const { setPackages, setLoadMorePackages, setPackageDetails } =
  packagesSlice.actions;
export default packagesSlice.reducer;
