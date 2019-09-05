import fs from 'fs'
import path from 'path'
import util from 'util'
import del from 'del'
import { getPostMap, PostMap } from '../tools/posts'

const writeFile = util.promisify(fs.writeFile)

async function run() {
  const postMap = await getPostMap()

  await del(path.join(process.cwd(), 'generated/**/*'))

  // Create all post list
  await createAllPostList(postMap)
}

run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

async function createAllPostList(postMap: PostMap) {
  const posts = [...postMap.posts.values()]
  const categories = [
    ...posts.reduce((set, post) => {
      set.add(post.category)
      return set
    }, new Set<string>())
  ]
  const data = {
    posts,
    categories
  }
  return writeFileToGeneratedDir(`posts`, data)
}

async function writeFileToGeneratedDir(fileName: string, data: any) {
  return writeFile(
    path.join(process.cwd(), 'generated', fileName + '.ts'),
    `export default ${JSON.stringify(data)}`
  )
}
