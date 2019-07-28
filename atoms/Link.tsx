import NextLink from 'next/link'
import styled from 'styled-components'
import Text, { TextProps } from './Text'

interface LinkElementProps extends TextProps {
  as: 'a'
  href?: string
  target?: '_blank'
}

const LinkElement = styled(Text)<LinkElementProps>({
  color: 'inherit',
  '&:hover': {
    color: 'blue'
  }
})

interface LinkProps {
  href: string
  newTab?: boolean
  children: React.ReactNode
}

export default ({ href, children, newTab }: LinkProps) =>
  newTab ? (
    <LinkElement href={href} as='a' target='_blank'>
      {children}
    </LinkElement>
  ) : (
    <NextLink href={href} passHref={true}>
      <LinkElement as='a'>{children}</LinkElement>
    </NextLink>
  )
