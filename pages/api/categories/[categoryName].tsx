import { prismy, Url } from 'prismy'
import { getPostsData } from '../../../lib/posts'
import { CategoriesShowAPIResponseBody } from '../../../api/categories'
import { omit } from 'ramda'

class CategoriesShowHandler {
  async handle(@Url() url: URL): Promise<CategoriesShowAPIResponseBody> {
    const categoryName = getCategoryNameFromPathname(url.pathname)
    const data = getPostsData()
    const postNames = data.byCategory.get(categoryName) || []
    const posts = postNames.map(postName => {
      const post = data.posts.get(postName)!
      return omit(['content'], post)
    })

    return {
      category: categoryName,
      posts
    }
  }
}

export default prismy(CategoriesShowHandler)

function getCategoryNameFromPathname(pathname: string): string {
  const result = pathname.match(/^\/api\/categories\/(.+)$/)
  if (!result) return ''
  return result[1]
}
