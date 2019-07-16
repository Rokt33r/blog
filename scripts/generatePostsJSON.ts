import fs from 'fs'
import path from 'path'
import Omc, { transform } from 'ow-my-class'
import ow from 'ow'
import util from 'util'
import { parseFrontmatter } from '../lib/markdown'

const postsDirPath = path.join(process.cwd(), 'posts')

async function run() {
  const postFileNames = fs.readdirSync(postsDirPath)
  const posts = await Promise.all(
    postFileNames.map(async fileName => {
      const content = await readPostFile(fileName)
      const name = fileName.substring(0, fileName.length - 3)
      return validatePost(name, content)
    })
  )

  await Promise.resolve(posts)
    .then(mapData)
    .then(serializedData => JSON.stringify(serializedData, null, 2))
    .then(writePostGeneratedJSON)
}

run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

async function readPostFile(fileName: string) {
  const filePath = path.join(postsDirPath, fileName)
  const fileBuffer = await util.promisify(fs.readFile)(filePath)

  return fileBuffer.toString('utf-8')
}

class Post {
  @Omc(ow.string)
  icon!: string

  @Omc(ow.string)
  title!: string

  @Omc(ow.string)
  content!: string

  @Omc(ow.date)
  date!: Date

  @Omc(ow.array.ofType(ow.string))
  tags!: string[]

  @Omc(ow.optional.string)
  layout?: string

  @Omc(ow.string)
  name!: string

  @Omc(ow.string)
  category!: string
}

function validatePost(name: string, content: string) {
  return transform(
    {
      ...parseFrontmatter(content),
      content,
      name
    },
    Post
  )
}

function mapData(posts: Post[]) {
  const data = {
    posts: new Map<string, Post>(),
    byTag: new Map<string, string[]>(),
    byCategory: new Map<string, string[]>()
  }

  posts.forEach(post => {
    data.posts.set(post.name, post)
    post.tags.forEach(tag => {
      let postsWithTag = data.byTag.get(tag)
      if (postsWithTag == null) {
        postsWithTag = []
        data.byTag.set(tag, postsWithTag)
      }
      postsWithTag.push(post.name)
    })

    let postsWithCategory = data.byCategory.get(post.category)
    if (postsWithCategory == null) {
      postsWithCategory = []
      data.byCategory.set(post.category, postsWithCategory)
    }
    postsWithCategory.push(post.name)
  })

  return {
    posts: [...data.posts.entries()],
    byTag: [...data.byTag.entries()],
    byCategory: [...data.byCategory.entries()]
  }
}

function writePostGeneratedJSON(stringifiedData: string) {
  fs.writeFileSync(
    path.join(process.cwd(), 'generated', 'posts.json'),
    stringifiedData
  )
}
