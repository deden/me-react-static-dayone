/* eslint-disable react/no-danger */
import fs from 'fs-extra'

export default {
  getSiteProps: () => ({
    title: 'React TM Static',
  }),
  getRoutes: async () => {
    const journal = await fs.readJson('public/Journal.json')
    const entries = journal.entries
    const posts = entries.map(entry => {
      const text = entry.text
      const title = text.substr(0, text.indexOf('\n'))
      const body = text.substr(text.indexOf('\n') + 1)
      const url = title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
      return {
        ...entry,
        title,
        body,
        url,
      }
    })
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
}
