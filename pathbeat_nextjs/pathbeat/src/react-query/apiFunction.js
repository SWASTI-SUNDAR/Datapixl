import axios from 'axios';

const getRequest = async (url, token) => {
  const { data } = await axios({
    url,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const updateRequest = async (url, token, data) => {
  const { data: res } = await axios({
    url,
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });

  return res;
};

const deleteRequest = async (url, token) => {
  const { data } = await axios({
    url,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export { getRequest, updateRequest, deleteRequest };
