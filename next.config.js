const path = require('path')
const rehypeHighlight = require('rehype-highlight')
const data = require('./generated/posts').default

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        'babel-loader',
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [rehypeHighlight]
          }
        },
        path.join(__dirname, './tools/fm-loader')
      ]
    })
    return config
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  exportPathMap: async function(defaultPathMap) {
    return data.categories.reduce(
      (map, category) => {
        map[`/categories/${category}`] = {
          page: '/categories/[category]',
          query: { category }
        }
        return map
      },
      {
        ...defaultPathMap
      }
    )
  }
}
