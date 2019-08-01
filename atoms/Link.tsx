import NextLink from 'next/link'
import styled, { CSSProp } from 'styled-components'
import { TextProps, composedTextStyle } from './Text'

interface LinkElementProps extends TextProps {}

const LinkElement = styled.a<LinkElementProps>(composedTextStyle)
LinkElement.defaultProps = {
  color: 'blue'
}

interface LinkProps extends LinkElementProps {
  href: string
  newTab?: boolean
  children: React.ReactNode
}

export default ({ href, children, newTab, ...props }: LinkProps) =>
  newTab ? (
    <LinkElement href={href} target='_blank' {...(props as any)}>
      {children}
    </LinkElement>
  ) : (
    <NextLink href={href} passHref={true}>
      <LinkElement {...(props as any)}>{children}</LinkElement>
    </NextLink>
  )
