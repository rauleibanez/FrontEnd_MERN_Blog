import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/api/posts');
  return response.data;
};

export const getPost = async (id) => {
   const response = await axios.get(`http://localhost:4000/api/posts/${id}`); 
   return response.data;
};   

export const createPost = async (post) => {
  const response = await axios.post('/api/posts', post);
  return response.data;
};

export const updatePost = async (id, post) => {
  const response = await axios.put(`/api/posts/${id}`, post);
  return response.data;
};

export const deletePost = async (id) => { 
  const response = await axios.delete(`/api/posts/${id}`); 
  return response.data; 
};