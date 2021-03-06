
import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.uuid}>
          <Link to={`/blog/post/${post.url}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
