import NextLink from 'next/link'
import BaseLink, { BaseLinkProps } from './BaseLink'

interface LinkProps extends BaseLinkProps {
  href: string
  children: React.ReactNode
}

export default ({ href, children }: LinkProps) => (
  <NextLink href={href} passHref={true}>
    <BaseLink>{children}</BaseLink>
  </NextLink>
)
