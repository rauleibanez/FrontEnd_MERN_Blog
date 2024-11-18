import axios from 'axios';

export const login = async (username, password) => {
  const response = await axios.post('/api/login', { username, password });
  return response.data.token;
};

export const register = async (username, password) => {
  await axios.post('/api/register', { username, password });
};
