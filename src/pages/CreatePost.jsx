import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
// import { createPost } from '../services/postService';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/admin');
  };

  return (
    <section className="section">
      <h1 className="title has-text-white">Crear Nueva Publicación</h1>
      <PostForm onSuccess={handleSuccess} />
    </section>
  );
};

export default CreatePost;
