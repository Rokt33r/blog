import fs from 'fs'
import path from 'path'
import Omc, { transform } from 'ow-my-class'
import ow from 'ow'
import matter from 'gray-matter'

const postsDirPath = path.join(process.cwd(), 'pages/posts')

export async function getPostMap() {
  const postFileNames = fs.readdirSync(postsDirPath)
  return Promise.all(
    postFileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async fileName => {
        const { data } = matter(
          fs.readFileSync(path.join(postsDirPath, fileName))
        )
        return validatePost(data, path.basename(fileName, '.md'))
      })
  ).then(mapData)
}

class Post {
  @Omc(ow.string)
  icon!: string

  @Omc(ow.string)
  title!: string

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

  @Omc(ow.optional.boolean)
  draft?: boolean
}

function validatePost(data: any, name: string) {
  return transform(
    {
      draft: false,
      ...data,
      name
    },
    Post
  )
}

export interface PostMap {
  posts: Map<string, Post>
  byTag: Map<string, string[]>
  byCategory: Map<string, string[]>
}

function mapData(posts: Post[]): PostMap {
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

  return data
}
