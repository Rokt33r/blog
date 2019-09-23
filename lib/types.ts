export interface Post {
  name: string
  icon: string
  title: string
  content: string
  category: string
  tags: string[]
  date: string
  draft?: boolean
}

export type PostWithoutContent = Omit<Post, 'content'>
