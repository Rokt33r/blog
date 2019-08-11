import React from 'react'
import Box, { BoxProps } from '../atoms/Box'
import Link from '../atoms/Link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const NavContainer = styled(Box)({
  height: '100vh',
  top: 0,
  position: 'sticky'
})

const NavLinkList = styled(Box).attrs({
  as: 'ul'
})`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Avartar = styled(Box).attrs({
  as: 'img',
  src: 'https://avatars3.githubusercontent.com/u/5865853?s=40&v=4',
  width: 20,
  height: 20,
  mr: 2
})``

interface NavLinkListItemProps extends BoxProps {
  href: string
  children: React.ReactNode
  newTab?: boolean
  active?: boolean
}

const NavLinkListItem = ({
  href,
  children,
  newTab,
  ...props
}: NavLinkListItemProps) => {
  const { asPath } = useRouter()
  const active = asPath === href

  return (
    <Box as='li' {...(props as any)}>
      <Link
        {...{ href, children, newTab }}
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
    </Box>
  )
}

export default () => {
  return (
    <NavContainer width={[1, 256]}>
      <NavLinkList>
        <NavLinkListItem href='/' fontSize='3'>
          <Avartar />
          Rokt33r's Lab
        </NavLinkListItem>
        <NavLinkListItem href='/about'>👨‍🚀 /about</NavLinkListItem>
        <NavLinkListItem href='/posts'>📝 /posts</NavLinkListItem>
      </NavLinkList>
    </NavContainer>
  )
}
