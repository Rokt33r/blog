import React from 'react'
import styled from 'styled-components'
import Card from '../atoms/Card'
import Flex from '../atoms/Flex'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import { format } from 'date-fns'
import NextLink from 'next/link'
import PostMeta from './PostMeta'

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

const CardLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default ({ post }: PostCardProps) => (
  <CardContainer px={2} pt={1} pb={2}>
    <Flex alignItems='center'>
      <Heading depth={2} fontSize={3} css={{ flex: 1 }} m={0}>
        {post.icon}{' '}
        <NextLink href={`/posts/${post.name}`} passHref>
          <CardLink>
            <span className='title'>{post.title}</span>
          </CardLink>
        </NextLink>
      </Heading>
      <Text fontSize={0}>{format(post.date, 'MMM Do, YYYY')}</Text>
    </Flex>
    <PostMeta post={post} px={2} fontSize={0} />
  </CardContainer>
)
