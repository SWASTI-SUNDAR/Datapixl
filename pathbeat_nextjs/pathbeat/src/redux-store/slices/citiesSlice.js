import { createSlice } from '@reduxjs/toolkit';

const citiesSlice = createSlice({
  name: 'citiesSlice',
  initialState: {
    cities: [],
    cityName: '',
  },
  reducers: {
    setCities(state, action) {
      state.cities = action.payload;
    },
    setCityName(state, action) {
      state.cityName = action.payload;
    },
  },
});

export const { setCities, setCityName } = citiesSlice.actions;
export default citiesSlice.reducer;
