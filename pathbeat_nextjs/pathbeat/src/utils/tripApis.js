import axios from 'axios';

export const baseUrl = 'https://api.pathbeat.in';

// export const baseUrl = "http://localhost:3000"
const fetchCities = async () => {
  try {
    const response = await axios.get(`${baseUrl}/pathbeat-service/cities`, {
      timeout: 20000,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    if (error.code === 'ECONNABORTED') {
      return 'The request took too long - please try again later.';
    }
    return error.message ? error.message : 'An unexpected error occurred';
  }
};
const fetchPackageByCityId = async (cityId) => {
  try {
    const response = await axios.get(
      `${baseUrl}/pathbeat-service/cities/${cityId}/packages`,
      {
        timeout: 20000, // 20 seconds timeout
      }
    );

    localStorage.setItem(
      'CITY_PACKAGE_CACHE_KEY',
      JSON.stringify(response.data)
    );
    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      return 'The request took too long - please try again later.';
    }
    return error.message ? error.message : 'An unexpected error occurred';
  }
};

export { fetchCities, fetchPackageByCityId };
