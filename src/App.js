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
    // Simulate an ID by one more than the current max ID
    const maxId = posts.reduce((max, post) => (post.id > max ? post.id : max), 0);
    const createdPost = { ...newPost, id: maxId + 1 };
    setPosts([...posts, createdPost]);
  };

  const handleUpdate = (updatedPost) => {
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
