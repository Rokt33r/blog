import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import {
  PostsShowResponseBody,
  fetchPostsShowResponseBody
} from '../../api/posts'
import { NextPageContext } from 'next'
import Box from '../../atoms/Box'
import Heading from '../../atoms/Heading'
import Flex from '../../atoms/Flex'
import { convertMarkdownToReact } from '../../lib/markdown'

interface PostsListPageProps {
  data: PostsShowResponseBody
}

const PostsShowPage = ({ data }: PostsListPageProps) => (
  <DefaultTemplate>
    <Heading as="h1" fontSize={6}>
      {data.post.title}
    </Heading>
    <Box>{data.post.category}</Box>
    <Flex>
      {data.post.tags.map(tag => (
        <Box key={tag}>{tag}</Box>
      ))}
    </Flex>
    <Box>{convertMarkdownToReact(data.post.content).contents}</Box>
  </DefaultTemplate>
)

PostsShowPage.getInitialProps = async ({ query }: NextPageContext) => {
  const data = await fetchPostsShowResponseBody((query as any).postName)
  return { data }
}

export default PostsShowPage
