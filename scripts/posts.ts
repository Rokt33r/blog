import fs from 'fs'
import path from 'path'
import util from 'util'
import { omit } from 'ramda'
import del from 'del'
import { getPostMap, PostMap } from '../tools/posts'

const writeFile = util.promisify(fs.writeFile)

async function run() {
  const postMap = await getPostMap()

  await del(path.join(process.cwd(), 'static/generated/**/*.json'))

  // Create all post list
  await createAllPostList(postMap)
  // Create post list by category
  await createDataForEachCategory(postMap)
}

run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

async function createAllPostList(postMap: PostMap) {
  const posts = [...postMap.posts.values()].map(post => {
    return omit(['content'], post)
  })
  const data = {
    posts
  }
  return writeFileToGeneratedDir(`posts`, data)
}

async function createDataForEachCategory(postMap: PostMap) {
  await Promise.all(
    [...postMap.byCategory.entries()].map(([categoryName, postNameList]) => {
      const posts = postNameList.map(postName => {
        return omit(['content'], postMap.posts.get(postName))
      })
      const data = {
        categoryName,
        posts
      }
      return writeFileToGeneratedDir(`category-${categoryName}`, data)
    })
  )
}

async function writeFileToGeneratedDir(fileName: string, data: any) {
  return writeFile(
    path.join(process.cwd(), 'static', 'generated', fileName + '.json'),
    JSON.stringify(data)
  )
}
