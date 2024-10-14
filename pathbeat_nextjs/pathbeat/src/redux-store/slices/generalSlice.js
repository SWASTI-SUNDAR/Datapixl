import { createSlice } from '@reduxjs/toolkit';

const generalSlice = createSlice({
  name: 'generalSlice',
  initialState: {
    userLocation: null,
    isUserOnline: false,
    signInModalInfo: {
      isModalVisible: false,
      singInModalText: '',
    },

    offlineModalInfo: {
      isModalVisible: false,
    },
    deepLinkValue: '',
  },
  reducers: {
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
    },
    setUserInternetStatus: (state, action) => {
      state.isUserOnline = action.payload;
    },
    setSignInModalInfo: (state, action) => {
      state.signInModalInfo = action.payload;
    },
    setOfflineModalInfo: (state, action) => {
      state.offlineModalInfo = action.payload;
    },
    setDeepLinkData: (state, action) => {
      state.deepLinkValue = action.payload;
    },
  },
});

export const {
  setUserLocation,
  setUserInternetStatus,
  setSignInModalInfo,
  setOfflineModalInfo,
  setDeepLinkData,
} = generalSlice.actions;
export default generalSlice.reducer;
