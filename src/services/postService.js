import axios from 'axios';

const getAuthToken = () => localStorage.getItem('authToken');

export const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/api/posts');
  return response.data;
};

export const getPost = async (id) => {
   const response = await axios.get(`http://localhost:4000/api/posts/${id}`); 
   return response.data;
};   

export const createPost = async (post) => {
  const token = getAuthToken();
  const response = await axios.post('http://localhost:4000/api/posts', post, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

export const updatePost = async (id, post) => {
  const token = getAuthToken();
  const response = await axios.put(`http://localhost:4000/api/posts/${id}`, post, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

export const deletePost = async (id) => {
  const token = getAuthToken();
  const response = await axios.delete(`http://localhost:4000/api/posts/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};