import NextLink from 'next/link'
import styled from 'styled-components'
import { TextProps, composedTextStyle } from './Text'

interface LinkElementProps extends TextProps {}

const LinkElement = styled.a<LinkElementProps>`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${composedTextStyle}
`
LinkElement.defaultProps = {
  color: 'blue'
}

export interface LinkProps extends LinkElementProps {
  href: string
  as?: string
  newTab?: boolean
  children: React.ReactNode
}

export default ({ href, as, children, newTab, ...props }: LinkProps) =>
  newTab ? (
    <LinkElement href={href} target='_blank' {...(props as any)}>
      {children}
    </LinkElement>
  ) : (
    <NextLink href={href} as={as} passHref={true}>
      <LinkElement {...(props as any)}>{children}</LinkElement>
    </NextLink>
  )
