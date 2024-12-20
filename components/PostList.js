import React from 'react';
import PropTypes from 'prop-types';

function PostList({ posts, onEdit }) {
  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => onEdit(post)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default PostList;