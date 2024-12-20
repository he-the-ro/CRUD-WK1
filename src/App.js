import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Limit to the first 10 for display
        setPosts(data.slice(0, 10));
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleCreate = (newPost) => {
    // Send POST request to create a new post
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.body,
        userId: 1
      }),
    })
      .then((response) => response.json())
      .then((createdPost) => {
        setPosts([...posts, createdPost]);
      })
      .catch((error) => console.error('Error creating post:', error));
  };

  const handleUpdate = (updatedPost) => {
    // Send PUT request to update the existing post
    fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: updatedPost.id,
        title: updatedPost.title,
        body: updatedPost.body,
        userId: 1
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the local state with the updated post returned from the server
        setPosts(posts.map((post) => (post.id === data.id ? data : post)));
      })
      .catch((error) => console.error('Error updating post:', error));
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleFormClose = () => {
    setEditingPost(null);
  };

  return (
    <div className="app-container">
      <h1>My Posts App</h1>
      <PostForm
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        editingPost={editingPost}
        onClose={handleFormClose}
      />
      <PostList posts={posts} onEdit={handleEdit} />
    </div>
  );
}

export default App;


