import { prismy, Url } from 'prismy'
import { getPostsData } from '../../../lib/posts'
import { CategoriesShowAPIResponseBody } from '../../../api/categories'

class CategoriesShowHandler {
  async handle(@Url() url: URL): Promise<CategoriesShowAPIResponseBody> {
    const categoryName = getCategoryNameFromPathname(url.pathname)
    const data = getPostsData()
    const postNames = data.byCategory.get(categoryName) || []
    const posts = postNames.map(postName => {
      const { icon, name, title, tags, category, date } = data.posts.get(
        postName
      )!
      return {
        icon,
        name,
        title,
        tags,
        category,
        date
      }
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
