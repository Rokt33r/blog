import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import {
  PostsShowResponseBody,
  fetchPostsShowResponseBody
} from '../../api/posts'
import { NextPageContext } from 'next'
import Box from '../../atoms/Box'
import Heading from '../../atoms/Heading'
import PostMeta from '../../molecules/PostMeta'
import Link from '../../atoms/Link'
import MarkdownBox from '../../atoms/MarkdownBox'

interface PostsListPageProps {
  data: PostsShowResponseBody
}

const PostsShowPage = ({ data }: PostsListPageProps) => (
  <DefaultTemplate>
    <Box mt={3}>
      <Link href='/'>Home</Link>
    </Box>

    <Heading depth={1} fontSize={6} mt={0} mb={3}>
      {data.post.title}
    </Heading>

    <PostMeta post={data.post} px={2} mb={4} />

    <MarkdownBox>{data.post.content}</MarkdownBox>
  </DefaultTemplate>
)

PostsShowPage.getInitialProps = async ({ query }: NextPageContext) => {
  const data = await fetchPostsShowResponseBody((query as any).postName)
  return { data }
}

export default PostsShowPage
