import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import { NextPageContext } from 'next'
import {
  fetchCategoriesShowPageData,
  CategoriesShowAPIResponseBody
} from '../../api/categories'
import PostCard from '../../molecules/PostCard'
import Link from '../../atoms/Link'
import Box from '../../atoms/Box'
import Heading from '../../atoms/Heading'

interface CategoriesShowPageProps {
  data: CategoriesShowAPIResponseBody
}

const CategoriesShowPage = ({ data }: CategoriesShowPageProps) => (
  <DefaultTemplate>
    <Box mt={3}>
      <Link href='/'>Home</Link>
    </Box>
    <Heading depth={1} mt={0} mb={3}>
      Category: {data.category}
    </Heading>
    <Box my={2}>
      {data.posts.map(post => (
        <PostCard key={post.name} post={post} />
      ))}
    </Box>
  </DefaultTemplate>
)

CategoriesShowPage.getInitialProps = async ({ query }: NextPageContext) => {
  const data = await fetchCategoriesShowPageData((query as any).categoryName)
  return { data }
}

export default CategoriesShowPage
