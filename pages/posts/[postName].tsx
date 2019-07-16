import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import {
  fetchPostsIndexResponseBody,
  PostsShowResponseBody,
  fetchPostsShowResponseBody
} from '../../api/posts'
import PostCard from '../../molecules/PostCard'
import { NextPageContext } from 'next'

interface PostsListPageProps {
  data: PostsShowResponseBody
}

const PostsShowPage = ({ data }: PostsListPageProps) => (
  <DefaultTemplate>
    <h1>{data.post.title}</h1>
  </DefaultTemplate>
)

PostsShowPage.getInitialProps = async ({ query }: NextPageContext) => {
  const data = await fetchPostsShowResponseBody((query as any).postName)
  return { data }
}

export default PostsShowPage
