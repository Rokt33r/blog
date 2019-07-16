import ky from 'ky-universal'

const baseURL = 'http://localhost:3000'

export interface PostsIndexResponseBody {
  posts: {
    icon: string
    title: string
    tags: string[]
    category: string
    date: Date
  }[]
}

export async function fetchPostsIndexResponseBody(): Promise<
  PostsIndexResponseBody
> {
  return ky(baseURL + '/api/posts').json()
}

export interface PostsShowResponseBody {
  post: {
    icon: string
    title: string
    tags: string[]
    category: string
    date: Date
    content: string
  }
}
