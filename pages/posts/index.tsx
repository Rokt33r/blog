import React from 'react'
import Box from '../../atoms/Box'
import DefaultTemplate from '../../templates/DefaultTemplate'
import { fetchPostsIndexResponseBody } from '../../api/posts'
import PostCard from '../../molecules/PostCard'

interface PostsListPageProps {
  data: {
    posts: {
      title: string
      category: string
      tags: string[]
      content: string
      icon: string
      name: string
      date: Date
    }[]
  }
}

const PostsListPage = ({ data }: PostsListPageProps) => (
  <DefaultTemplate>
    <h1>Posts list</h1>
    <div>
      {data.posts.map(post => (
        <PostCard key={post.name} post={post} />
      ))}
    </div>
  </DefaultTemplate>
)

PostsListPage.getInitialProps = async () => {
  const data = await fetchPostsIndexResponseBody()
  return { data }
}

export default PostsListPage
