const { getPostMap } = require('./tools/posts')

module.exports = {
  webpack: (webpack, config) => {
    webpack.module.rules.push({
      test: /\.md$|\.css$|\.jpg$/i,
      use: [
        {
          loader: 'raw-loader'
        }
      ]
    })
    return webpack
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const postMap = await getPostMap()
    const pathMap = [...postMap.posts.entries()].reduce(
      (map, [postName, post]) => {
        map[`/posts/${postName}`] = {
          page: '/posts/[postName]',
          query: {
            postName
          }
        }

        return map
      },
      {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/posts': { page: '/posts' }
      }
    )

    ;[...postMap.byCategory.entries()].reduce((map, [categoryName]) => {
      map[`/categories/${categoryName}`] = {
        page: '/categories/[categoryName]',
        query: {
          categoryName
        }
      }

      return map
    }, pathMap)

    return pathMap
  }
}
