import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ posts }) => {
  const navigate = useNavigate(); 
  const handleViewDetails = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="columns is-multiline">
      {posts.map(post => (
        <div key={post._id} className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <h2 className="title is-4">{post.title}</h2>              
              <p className="has-text-grey-light">{new Date(post.createdAt).toLocaleDateString()}</p>
              <button className="button is-link" onClick={() => handleViewDetails(post._id)}>Ver Detalles</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
