# My Posts App

## Overview

This React application integrates with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to demonstrate full CRUD operations on a collection of blog posts.

**Features:**
- **READ:** Fetch and display a list of posts from the API.
- **CREATE:** Add a new post by sending a `POST` request.
- **UPDATE:** Edit an existing post by sending a `PUT` request.
- **DELETE:** Remove an existing post by sending a `DELETE` request.

**Note:**  
JSONPlaceholder is a mock API and does not persist changes. While the application will reflect creates, updates, and deletes locally and respond with changed data, these changes won't be saved permanently on the server.

## Component Tree

App ├─ PostForm │ └─ (Handles creating and updating posts) └─ PostList └─ (Displays posts, handles editing and deleting actions)


**Data Flow:**
- `App.js` manages the main application state and handles fetching the initial posts.
- `App.js` passes `onCreate`, `onUpdate`, and `onDelete` handlers down to child components.
- `PostForm.js` handles creating and updating posts.
- `PostList.js` displays posts and includes buttons to trigger edit and delete actions.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/he-the-ro/crud-wk1.git

2. **Navigate to the project directory:**
   cd crud-wk1

3. **Install dependencies:**
   npm install

4. **Start the development server:**
   npm start

The application will run at http://localhost:3000.
