import React from 'react'
import Box from '../atoms/Box'
import Link from '../atoms/Link'
import Heading from '../atoms/Heading'
import { useGlobalData } from '../lib/global'

export default () => {
  const globalData = useGlobalData()
  return (
    <Box width={[1, 256, 320]} px={4} pt={4}>
      <Heading>Rokt33r's blog</Heading>
      <Box mb="auto">
        <Link>About me</Link>
        <Box>Posts</Box>

        {globalData.categories.map(category => (
          <Box key={category}>{category}</Box>
        ))}
      </Box>
    </Box>
  )
}
