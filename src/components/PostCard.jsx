import React from 'react';

const PostCard = ({ posts }) => {
  return (
    <div className="columns is-multiline">
      {posts.map(post => (
        <div key={post._id} className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <h2 className="title is-4">{post.title}</h2>
              <p className="content">{post.body}</p>
              <p className="has-text-grey-light">{new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
