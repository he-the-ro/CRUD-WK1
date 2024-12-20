import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function PostForm({ onCreate, onUpdate, editingPost, onClose }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle('');
      setBody('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPost) {
      onUpdate({ ...editingPost, title, body });
    } else {
      onCreate({ title, body });
    }
    onClose();
  };

  return (
    <div className="post-form">
      <h2>{editingPost ? 'Edit Post' : 'Add New Post'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </label>
        <label>
          Body:
          <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required />
        </label>
        <div className="form-buttons">
          <button type="submit">{editingPost ? 'Update' : 'Create'}</button>
          {editingPost && <button type="button" onClick={onClose}>Cancel</button>}
        </div>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  editingPost: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired
};

PostForm.defaultProps = {
  editingPost: null
};

export default PostForm;
