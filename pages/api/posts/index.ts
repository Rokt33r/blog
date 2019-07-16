import { prismy } from 'prismy'
import { getPostsData } from '../../../lib/posts'

class PostIndexHandler {
  async handle() {
    const { posts } = getPostsData()
    return {
      posts: [...posts].map(([, post]) => post)
    }
  }
}

export default prismy(PostIndexHandler)
