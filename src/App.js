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
        // Limit to first 10 for neat display
        setPosts(data.slice(0, 10));
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const handleCreate = (newPost) => {
    // Send POST request to JSONPlaceholder to create a new post
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.body,
        userId: 1, // Arbitrary userId for demonstration
      }),
    })
      .then((response) => response.json())
      .then((createdPost) => {
        // Append the created post to the local state
        setPosts([...posts, createdPost]);
      })
      .catch((error) => console.error('Error creating post:', error));
  };

  const handleUpdate = (updatedPost) => {
    // This is still local simulation since JSONPlaceholder doesn't update server posts
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
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

