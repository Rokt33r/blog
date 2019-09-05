import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import PostCard from '../../molecules/PostCard'
import Link from '../../atoms/Link'
import Box from '../../atoms/Box'
import Heading from '../../atoms/Heading'
import { PostWithoutContent } from '../../lib/types'
import { NextComponentType, NextPageContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import data from '../../static/generated/posts.json'

const CategoryShow: NextComponentType<
  NextPageContext,
  { query: ParsedUrlQuery },
  { query: ParsedUrlQuery }
> = ({ query }) => {
  const posts = (data.posts as PostWithoutContent[]).filter(
    post => post.category === query.category
  )
  return (
    <DefaultTemplate>
      <Box mt={3}>
        <Link href='/'>Home</Link>
      </Box>
      <Heading depth={1} mt={0} mb={3}>
        Category: {query.category}
      </Heading>
      <Box my={2}>
        {posts.map(post => (
          <PostCard key={post.name} post={post} />
        ))}
      </Box>
    </DefaultTemplate>
  )
}

CategoryShow.getInitialProps = ctx => {
  return { query: ctx.query }
}

export default CategoryShow
