import { prismy } from 'prismy'
import { getPostsData } from '../../lib/posts'
import { GlobalResponseBody } from '../../api/global'

class GlobalHandler {
  async handle(): Promise<GlobalResponseBody> {
    const { byCategory } = getPostsData()
    return {
      categories: [...byCategory].map(([category]) => category)
    }
  }
}

export default prismy(GlobalHandler)
