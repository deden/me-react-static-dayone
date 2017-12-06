/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import fs from 'fs-extra'
import { renderStaticOptimized } from 'glamor/server'
import formattedEntry from './src/utils/formattedEntry'

export default {
  getSiteProps: () => ({
    title: 'React TM Static',
  }),
  getRoutes: async () => {
    const journal = await fs.readJson('public/Journal.json')
    const posts = journal.entries.map(entry => formattedEntry(entry))
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.url}`,
          component: 'src/containers/Post',
          getProps: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: async (render, Comp, meta) => {
    const html = render(<Comp />)
    const { css } = renderStaticOptimized(() => html)
    meta.glamStyles = css
    return html
  },
  Document: class CustomDocument extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style dangerouslySetInnerHTML={{ __html: renderMeta.glamStyles }} />
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
}
