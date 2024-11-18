import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('/api/posts');
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
