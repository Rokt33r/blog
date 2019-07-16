import React from 'react'
import Card from '../atoms/Card'
import Flex from '../atoms/Flex'
import Box from '../atoms/Box'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

interface PostCardProps {
  post: {
    title: string
    category: string
    tags: string[]
    content: string
    icon: string
    name: string
    date: Date
  }
}

export default ({ post }: PostCardProps) => (
  <Card>
    <Flex>
      <Box>{post.icon}</Box>
      <Heading>{post.title}</Heading>
    </Flex>
    <Flex>
      <Text>{post.category}</Text>
      <Box>
        {post.tags.map(tag => (
          <Text>{tag}</Text>
        ))}
      </Box>
      <Text>{post.date}</Text>
    </Flex>
  </Card>
)
