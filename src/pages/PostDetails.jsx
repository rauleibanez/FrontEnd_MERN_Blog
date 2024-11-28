import React from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/postService';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPost(data);
      } catch (error) {
        console.error('Error al obtener la publicación', error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="section">
      <h1 className="title has-text-white">{post.title}</h1>
      <p className="has-text-grey-light">Created: {new Date(post.createdAt).toLocaleDateString()}</p>
      <p className="content has-text-white">{post.body}</p>
      <p className="has-text-grey-light">Updated: {new Date(post.updatedAt).toLocaleDateString()}</p>
    </section>
  );
};

export default PostDetail;
