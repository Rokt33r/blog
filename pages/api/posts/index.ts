import { prismy } from 'prismy'
import { getPostsData } from '../../../lib/posts'
import { PostsIndexResponseBody } from '../../../api/posts'

class PostIndexHandler {
  async handle(): Promise<PostsIndexResponseBody> {
    const { posts } = getPostsData()
    return {
      posts: [...posts].map(([, post]) => post)
    }
  }
}

export default prismy(PostIndexHandler)
