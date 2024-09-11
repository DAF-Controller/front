import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com';

const login = async (id, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { id, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (name, id, password, inviteCode) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, {
      name,
      id,
      password,
      inviteCode,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
  signup,
};
