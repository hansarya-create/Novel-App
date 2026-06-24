import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function UserDetails() {
  const { id } = useParams()

  return (
    <div>
      <h1>User {id}</h1>

      <Link to={`/users/${id}/profile`}>Profile</Link> |{" "}
      <Link to={`/users/${id}/posts`}>Posts</Link>
    </div>
  )
}