import axios from 'axios';
import { baseUrl } from './tripApis';

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const handleRegisterPress = async ({ email, password }) => {
  try {
    const response = await axios.post(
      baseUrl + '/pathbeat-service/users/register',
      {
        email,
        password,
      }
    );
    return response;
  } catch (error) {
    return error.message
      ? error.message
      : 'API Error, Failed to register user.';
  }
};

const SignInWithBackend = async (authCode) => {
  try {
    const response = await axios.get(
      baseUrl +
        `/pathbeat-service/oauth/google/redirect?code=${authCode}&platform=web`,
      {
        timeout: 20000,
      }
    );
    setLocalStorage('pathbeatUserData', JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    return error.message ? error.message : 'An unexpected error occurred';
  }
};

const handleEmailLoginPress = async ({ email, password }) => {
  try {
    const response = await axios.post(
      baseUrl + '/pathbeat-service/users/login',
      {
        email,
        password,
      }
    );
    await localStorage.setItem(
      'pathbeatUserData',
      JSON.stringify(response.data)
    );
    return response;
  } catch (error) {
    return error;
  }
};
// Handle Logout
const handleLogoutPress = async () => {
  try {
    localStorage.removeItem('pathbeatUserData');
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};

// Update User Info
const updateUserInfo = async (data, Uuid) => {
  try {
    const response = await axios.patch(
      baseUrl + `/pathbeat-service/users/${Uuid}`,
      data,
      { timeout: 20000 }
    );
    return response.data;
  } catch (error) {
    return error.message ? error.message : 'An unexpected error occurred';
  }
};

// Validate User Token
const validateUserToken = async () => {
  try {
    let token = getLocalStorage('pathbeatUserData');
    token = token.Token;
    if (!token) {
      return { error: 'Token not found' };
    }
    const response = await axios.put(
      baseUrl + '/pathbeat-service/oauth/token/validate',
      token,
      {
        timeout: 20000,
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      }
    );
    // console.log("valid data api==>",response.data)
    return { data: response.data };
  } catch (error) {
    return { error: error.message };
  }
};

// Fetch User Data from Local Storage
const fetchUserLocalData = async () => {
  try {
    const data = getLocalStorage('pathbeatUserData');
    return data ? data : null;
  } catch (error) {
    return error;
  }
};

// Update Local Storage
const updateLocalStorage = async (updates) => {
  try {
    const existingData = getLocalStorage('pathbeatUserData');
    if (!existingData) {
      return { success: false, message: 'No data found in local storage.' };
    }

    const updatedData = {
      ...existingData,
      ...updates,
      Token: { ...existingData.Token, ...updates.Token },
      User: { ...existingData.User, ...updates.User },
    };

    setLocalStorage('pathbeatUserData', updatedData);
    return { success: true, message: 'Data updated successfully.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export {
  SignInWithBackend,
  handleEmailLoginPress,
  handleLogoutPress,
  updateUserInfo,
  validateUserToken,
  fetchUserLocalData,
  updateLocalStorage,
  handleRegisterPress,
};
