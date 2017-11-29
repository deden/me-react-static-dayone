/* eslint-disable react/no-danger */
import fs from 'fs-extra'
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
}
