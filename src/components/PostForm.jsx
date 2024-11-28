import React, { useState } from 'react';
import { createPost, updatePost } from '../services/postService';

const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [body, setBody] = useState(post ? post.body : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post) {
      await updatePost(post._id, { title, body });
    } else {
      await createPost({ title, body });
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <div className="field">
        <label className="label has-text-white">Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label has-text-white">Body</label>
        <div className="control">
          <textarea
            className="textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="control">
        <button className="button is-primary" type="submit">{post ? 'Update' : 'Create'}</button>
      </div>
    </form>
  );
};

export default PostForm;

