import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts, deletePost } from '../services/postService';
import PostTable from './PostTable';
import PostCards from './PostCard';

const PostList = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  const handleEdit = (post) => {
    navigate(`/edit-post/${post._id}`);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
    <div>
      <h1 className="title has-text-white">Publicaciones</h1>
      {token ? (
        <PostTable posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      ) : (
        <PostCards posts={posts} />
      )}
    </div>
  );
};

export default PostList;

