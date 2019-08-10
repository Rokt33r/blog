import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import { NextPageContext } from 'next'
import Box from '../../atoms/Box'
import Heading from '../../atoms/Heading'
import PostMeta from '../../molecules/PostMeta'
import Link from '../../atoms/Link'
import MarkdownBox from '../../atoms/MarkdownBox'
import { parseFrontmatter } from '../../lib/markdown'
import { getPostByName } from '../../lib/assets'
import { Post } from '../../lib/types'

interface PostsShowPageProps {
  post: Post
}

const PostsShowPage = ({ post }: PostsShowPageProps) => (
  <DefaultTemplate>
    <Box mt={3}>
      <Link href='/'>Home</Link>
    </Box>

    <Heading depth={1} fontSize={6} mt={0} mb={3}>
      {post.title}
    </Heading>

    <PostMeta post={post} px={2} mb={4} />

    <MarkdownBox>{post.content}</MarkdownBox>
  </DefaultTemplate>
)

PostsShowPage.getInitialProps = async ({ query }: NextPageContext) => {
  let rawContent: string = await getPostByName(query.postName as string)

  return {
    post: {
      ...parseFrontmatter(rawContent),
      content: rawContent,
      name: query.postName
    }
  }
}

export default PostsShowPage
