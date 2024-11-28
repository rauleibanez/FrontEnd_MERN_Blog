import React, { useState, useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { getPosts } from '../services/postService';

const Admin = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  const handleSuccess = () => {
    setEditingPost(null);
    // Reload posts
  };

  return (
    <section className="section">
      <h1 className="title has-text-white has-text-centered">Admin Panel</h1>      
      <PostList token={token} />
    </section>
  );
};

export default Admin;
