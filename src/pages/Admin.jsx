import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostList from '../components/PostList';
import { getPosts } from '../services/postService';

const Admin = () => {
  const [token] = useState(localStorage.getItem('authToken') || null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  // const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  /*
  const handleEdit = (post) => { 
    navigate(`/edit-post/${post._id}`); 
  }; 
    
  const handleDelete = async (id) => { 
    await deletePost(id); 
    setPosts(posts.filter(post => post._id !== id)); 
  }; 
  */  
 
  const handleCreate = () => { 
    navigate('/create-post'); 
  };

  return (
    <section className="section">      
      <h1 className="title has-text-white has-text-centered">Admin Panel</h1>      
      <button className="button is-small is-primary mb-4" onClick={handleCreate}>Crear Nueva Publicación</button>
      <PostList token={token} />
    </section>
  );
};

export default Admin;
