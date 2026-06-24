import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Content from './Content'
import Users from './Users'
import UserDetails from './UserDetails'
import UserProfile from './UserProfile'
import UserPosts from './UserPosts' 
export default function App() {
  return (
    <div>
      <h1>MY WEBSITE</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/content">Content</Link> |{" "}
        <Link to="/users">Users</Link> 
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="/users/:id/profile" element={<UserProfile />} />
        <Route path="/users/:id/posts" element={<UserPosts />} />
      </Routes>
    </div>
  )
}