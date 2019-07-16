import serilaizedPostsData from '../generated/posts.json'

interface SerializedPostsData {
  posts: [
    string,
    {
      title: string
      tags: string[]
      content: string
      icon: string
      name: string
    }
  ][]
  byTag: [string, string[]][]
  byCategory: [string, string[]][]
}

export function getPostsData() {
  const {
    posts,
    byTag,
    byCategory
  } = serilaizedPostsData as SerializedPostsData

  return {
    posts: new Map(posts),
    byTag: new Map(byTag),
    byCategory: new Map(byCategory)
  }
}
