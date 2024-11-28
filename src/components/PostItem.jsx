import React from 'react';

const PostItem = ({ post, onEdit, onDelete }) => {
  return (
    <div className="card my-4">
      <div className="card-content">
        <h2 className="title is-4 has-text-white">{post.title}</h2>
        <p className="content has-text-white">{post.body}</p>
        <p className="has-text-grey-light">{new Date(post.createdAt).toLocaleDateString()}</p>
        <div className="buttons">
          <button className="button is-info" onClick={() => onEdit(post)}>Editar</button>
          <button className="button is-danger" onClick={() => onDelete(post._id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
