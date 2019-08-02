import { prismy } from 'prismy'
import { getPostsData } from '../../../lib/posts'
import { CategoriesIndexAPIResponseBody } from '../../../api/categories'

class CategoriesIndexHandler {
  async handle(): Promise<CategoriesIndexAPIResponseBody> {
    const { byCategory } = getPostsData()
    return {
      categories: [...byCategory.keys()]
    }
  }
}

export default prismy(CategoriesIndexHandler)
