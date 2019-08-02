import { prismy } from 'prismy'
import { getPostsData } from '../../../lib/posts'
import { PostsIndexResponseBody } from '../../../api/posts'
import { omit } from 'ramda'

class PostIndexHandler {
  async handle(): Promise<PostsIndexResponseBody> {
    const { posts } = getPostsData()
    return {
      posts: [...posts]
        .map(([, post]) => omit(['content'], post))
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
    }
  }
}

export default prismy(PostIndexHandler)
