import ky from 'ky-universal'

const baseURL = 'http://localhost:3000'

export interface PostsIndexResponseBody {
  posts: {
    icon: string
    name: string
    title: string
    tags: string[]
    category: string
    date: string
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
    name: string
    title: string
    tags: string[]
    category: string
    date: string
    content: string
  }
}

export async function fetchPostsShowResponseBody(
  postName: string
): Promise<PostsShowResponseBody> {
  return ky(baseURL + '/api/posts/' + postName).json()
}
