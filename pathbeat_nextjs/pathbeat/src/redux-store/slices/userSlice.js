import { createSlice } from '@reduxjs/toolkit';
// import {ResponseDataType} from '../../types/userTypes';
// import MixpanelInstance from '../../mixpanel/mixpanelconfig';
// import crashlytics from '@react-native-firebase/crashlytics';

const initialState = {
  responseData: {},
  isAuthenticated: false,
  monumentVisited: [],
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserSignin(state, action) {
      state.responseData = action.payload;
      state.isAuthenticated = true;
      //   MixpanelInstance.identify(state.responseData?.User?.Uuid!);
      // Identify must be called before properties are set
      //   MixpanelInstance.getPeople().set('$name', state.responseData?.User?.Name);
      //   MixpanelInstance.getPeople().set(
      //     '$email',
      //     state.responseData?.User?.Email,
      //   );
      //   MixpanelInstance.getPeople().set(
      //     '$phone',
      //     state.responseData?.User?.PhoneNumber,
      //   );

      // Firebase crashlytics analytics
      //   crashlytics().log('User signed in.');
      //   crashlytics().setUserId(state.responseData?.User?.Uuid!);
      //   crashlytics().setAttributes({
      //     email: state.responseData?.User?.Email!,
      //     username: state.responseData?.User?.Name!,
      //   });
    },
    setUserLogout(state) {
      state.responseData = null;
      state.isAuthenticated = false;
      //   MixpanelInstance.reset();
    },
    setUserUpdate(state, action) {
      if (state.responseData) {
        state.responseData = {
          ...state.responseData,
          User: { ...state.responseData.User, ...action.payload },
        };
      }
    },
    setMonumentVisited(state, action) {
      state.monumentVisited.push(action.payload);
    },
  },
});

export const {
  setUserSignin,
  setUserLogout,
  setUserUpdate,
  setMonumentVisited,
} = userSlice.actions;
export default userSlice.reducer;
