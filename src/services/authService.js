import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:4000/api/login', { username, password });
    return response.data.token;
  } catch (error) {
    throw new Error('Error de autenticación');
  }
};

export const register = async (username, password) => {
  try {
    await axios.post('/api/register', { username, password });
  } catch (error) {
    throw new Error('Error al registrar');
  }
};

