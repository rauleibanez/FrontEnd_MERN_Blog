import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { getPost, updatePost } from '../services/postService';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getPost(id);
      setPost(data);
    };
    fetchData();
  }, [id]);

  const handleSuccess = () => {
    navigate('/admin');
  };

  return (
    <div className="container">
      <h1 className="title has-text-white">Editar Publicación</h1>
      {post && <PostForm post={post} onSuccess={handleSuccess} />}
    </div>
  );
};

export default EditPost;
