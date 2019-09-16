import React, { useState, useEffect } from 'react'
import Box, { BoxProps, composedBoxStyle } from '../atoms/Box'
import Text from '../atoms/Text'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import data from '../generated/posts'
import Link from 'next/link'
import Icon from '@mdi/react'
import { mdiFileTree, mdiMenu, mdiClose } from '@mdi/js'
import Flex from '../atoms/Flex'
import {
  compose,
  position,
  PositionProps,
  height,
  HeightProps,
  display,
  DisplayProps
} from 'styled-system'

const NavContainer = styled.div<BoxProps & PositionProps & HeightProps>(
  {},
  compose(
    composedBoxStyle,
    position,
    height
  )
)

const NavLinkList = styled.ul<BoxProps & DisplayProps>(
  {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  compose(
    composedBoxStyle,
    display
  )
)

const NavControl = styled.div<BoxProps & DisplayProps>(
  {},
  compose(
    composedBoxStyle,
    display
  )
)

const Avartar = styled(Box).attrs({
  as: 'img',
  src: 'https://avatars3.githubusercontent.com/u/5865853?s=40&v=4',
  width: 20,
  height: 20,
  mr: 2
})``

const NavControlButton = styled.button<BoxProps>`
  ${composedBoxStyle}
  border: none;
  background-color: white;
  outline: none;
  font-size: 1.4em;
`

interface NavLinkListItemProps extends BoxProps {
  href: string
  as?: string
  children: React.ReactNode
  newTab?: boolean
  active?: boolean
}

const NavLinkListItem = ({
  href,
  as: asPath,
  children,
  newTab,
  ...props
}: NavLinkListItemProps) => {
  const router = useRouter()
  const active = asPath === router.asPath

  return (
    <Box as='li' {...(props as any)}>
      <Link href={href} as={asPath} passHref>
        <Text
          as='a'
          children={children}
          color={active ? 'inherit' : '#777'}
          textDecoration='none'
          textStyle='monospace'
          pl={3}
          py={1}
          backgroundColor={active ? 'rgba(0, 0, 0, 0.1)' : undefined}
          css={`
            display: flex;
            align-items: center;
            transition: background-color ease-in-out 200ms;
            &:hover {
              background-color: rgba(0, 0, 0, 0.1);
              text-decoration: none;
            }
          `}
        />
      </Link>
    </Box>
  )
}

export default () => {
  const [closed, setClosed] = useState(true)
  const { asPath } = useRouter()
  useEffect(() => {
    setClosed(true)
  }, [asPath])

  return (
    <NavContainer
      width={[1, 256]}
      position={['fixed', 'sticky']}
      backgroundColor='white'
      top={0}
      height={[closed ? 'inherit' : '100vh', '100vh']}
    >
      <NavControl display={['block', 'none']}>
        <NavControlButton py={1} onClick={() => setClosed(!closed)}>
          {closed ? (
            <Icon color='black' size='1em' path={mdiMenu} />
          ) : (
            <Icon path={mdiClose} color='black' size='1em' />
          )}
        </NavControlButton>
      </NavControl>
      <NavLinkList display={[closed ? 'none' : 'block', 'block']}>
        <NavLinkListItem href='/' fontSize='3'>
          <Avartar />
          Rokt33r's Lab
        </NavLinkListItem>
        <NavLinkListItem href='/about'>👨‍🚀 /about</NavLinkListItem>
        <NavLinkListItem href='/posts'>📝 /posts</NavLinkListItem>
        {data.categories.map(category => (
          <NavLinkListItem
            href={`/categories/[category]?category=${category}`}
            as={`/categories/${category}`}
            key={category}
          >
            <Flex ml={2} flexDirection='row' alignItems='center'>
              <Icon path={mdiFileTree} size='12px' />
              <Text ml={2}>{category}</Text>
            </Flex>
          </NavLinkListItem>
        ))}
      </NavLinkList>
    </NavContainer>
  )
}
