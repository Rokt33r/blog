import { prismy } from 'prismy'
import { GlobalResponseBody } from '../../api/global'

class GlobalHandler {
  async handle(): Promise<GlobalResponseBody> {
    return {}
  }
}

export default prismy(GlobalHandler)
