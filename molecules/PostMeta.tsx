import React from 'react'
import styled from 'styled-components'
import Flex from '../atoms/Flex'
import Text from '../atoms/Text'
import Link from '../atoms/Link'
import Icon from '@mdi/react'
import { mdiFileTree } from '@mdi/js'
import { SpaceProps, FontSizeProps } from 'styled-system'

interface PostMetaProps extends SpaceProps, FontSizeProps {
  post: {
    category: string
    tags: string[]
  }
}

const MetaLink = styled(Link)`
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
      <MetaLink href={`/categories/${post.category}`}>{post.category}</MetaLink>
    </Text>
    <Flex mr={2}>
      {post.tags.map(tag => (
        <Text py={0} mx={1} fontSize={fontSize}>
          #{tag}
        </Text>
      ))}
    </Flex>
  </Flex>
)
