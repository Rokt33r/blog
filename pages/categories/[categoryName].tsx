import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import { NextPageContext } from 'next'
import PostCard from '../../molecules/PostCard'
import Link from '../../atoms/Link'
import Box from '../../atoms/Box'
import Heading from '../../atoms/Heading'
import { PostWithoutContent } from '../../lib/types'
import { getGeneratedJSONFile } from '../../lib/assets'

interface CategoriesShowPageProps {
  category: string
  posts: PostWithoutContent[]
}

const CategoriesShowPage = ({ posts, category }: CategoriesShowPageProps) => (
  <DefaultTemplate>
    <Box mt={3}>
      <Link href='/'>Home</Link>
    </Box>
    <Heading depth={1} mt={0} mb={3}>
      Category: {category}
    </Heading>
    <Box my={2}>
      {posts.map(post => (
        <PostCard key={post.name} post={post} />
      ))}
    </Box>
  </DefaultTemplate>
)

CategoriesShowPage.getInitialProps = async ({ query }: NextPageContext) => {
  return getGeneratedJSONFile(`category-${query.categoryName}`)
}

export default CategoriesShowPage
