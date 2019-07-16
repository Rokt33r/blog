import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import {
  fetchPostsIndexResponseBody,
  PostsIndexResponseBody
} from '../../api/posts'
import PostCard from '../../molecules/PostCard'

interface PostsListPageProps {
  data: PostsIndexResponseBody
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
