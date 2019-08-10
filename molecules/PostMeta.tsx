import React from 'react'
import styled from 'styled-components'
import Flex from '../atoms/Flex'
import Text from '../atoms/Text'
import Link from '../atoms/Link'
import Icon from '@mdi/react'
import { mdiFileTree } from '@mdi/js'
import { SpaceProps, FontSizeProps } from 'styled-system'
import NextLink from 'next/link'

interface PostMetaProps extends SpaceProps, FontSizeProps {
  post: {
    category: string
    tags: string[]
  }
}

const MetaLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default ({ post, fontSize, ...spaceProps }: PostMetaProps) => (
  <Flex alignItems='center' {...spaceProps}>
    <Icon path={mdiFileTree} size='12px' />
    <Text ml={1} mr={2} fontSize={fontSize}>
      <NextLink
        href={`/categories/[categoryName]?categoryName=${post.category}`}
        as={`/categories/${post.category}`}
        passHref
      >
        <MetaLink>{post.category}</MetaLink>
      </NextLink>
    </Text>
    <Flex mr={2}>
      {post.tags.map(tag => (
        <Text py={0} mx={1} fontSize={fontSize} key={tag}>
          #{tag}
        </Text>
      ))}
    </Flex>
  </Flex>
)
