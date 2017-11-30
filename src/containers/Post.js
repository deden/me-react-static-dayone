import React from 'react'
import { getRouteProps, Link } from 'react-static'
import MarkdownRenderer from 'react-markdown-renderer'
import Counter from '../components/Counter'
//

export default getRouteProps(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <MarkdownRenderer markdown={post.body} />
    <h3>a redux counter :</h3>
    <Counter />
  </div>
))
