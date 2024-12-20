# My Posts App

## Overview
This React application fetches posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API. It demonstrates:
- **READ**: Fetching and displaying existing posts.
- **CREATE**: Adding a new post.
- **UPDATE**: Editing an existing post (local state simulation, does not persist to API).

## Component Tree
App ├─ PostList │ └─ (Displays a list of posts and triggers edit mode) └─ PostForm └─ (Handles both creating new posts and updating existing posts)

## Features
- Fetches posts from `https://jsonplaceholder.typicode.com/posts`.
- Allows users to add a new post locally.
- Allows users to edit a post locally.
- Uses functional components and hooks for state management.
- PropTypes ensure proper prop usage.
- Polished code style and consistent formatting.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-posts-app.git
