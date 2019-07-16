import { prismy, Query, Url } from 'prismy'
import { getPostsData } from '../../../lib/posts'

class PostShowHandler {
  async handle(@Url() url: URL) {
    const postName = getPostNameFromPathname(url.pathname)
    const post = getPostsData().posts.get(postName)
    if (post == null) throw new Error('The post does not exist.')
    return {
      post
    }
  }
}

export default prismy(PostShowHandler)

function getPostNameFromPathname(pathname: string): string {
  const result = pathname.match(/^\/api\/posts\/(.+)$/)
  if (!result) return ''
  return result[1]
}
