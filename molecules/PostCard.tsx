import React from 'react'
import styled from 'styled-components'
import Card from '../atoms/Card'
import Flex from '../atoms/Flex'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import { format } from 'date-fns'
import Link from '../atoms/Link'
import Icon from '@mdi/react'
import { mdiFileTree } from '@mdi/js'

interface PostCardProps {
  post: {
    title: string
    category: string
    tags: string[]
    icon: string
    name: string
    date: string
  }
}

const CardContainer = styled(Card)`
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`

const CardLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default ({ post }: PostCardProps) => (
  <CardContainer px={2} pt={1} pb={2}>
    <Flex alignItems='center'>
      <Heading depth={2} fontSize={3} css={{ flex: 1 }}>
        {post.icon}{' '}
        <CardLink href={`/posts/${post.name}`}>
          <span className='title'>{post.title}</span>
        </CardLink>
      </Heading>
      <Text fontSize={0}>{format(post.date, 'MMM Do, YYYY')}</Text>
    </Flex>
    <Flex alignItems='center' px={2}>
      <Icon path={mdiFileTree} size='12px' />
      <Text ml={1} mr={2} fontSize={0}>
        <CardLink href={`/posts?category=${post.category}`}>
          {post.category}
        </CardLink>
      </Text>
      <Flex mr={2}>
        {post.tags.map(tag => (
          <Text py={0} mx={1} fontSize={0}>
            <CardLink href={`/posts?tag=${tag}`}>#{tag}</CardLink>
          </Text>
        ))}
      </Flex>
    </Flex>
  </CardContainer>
)
