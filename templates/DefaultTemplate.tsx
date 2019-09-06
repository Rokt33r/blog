import React from 'react'
import Icon from '@mdi/react'
import { mdiGithubCircle } from '@mdi/js'
import Flex from '../atoms/Flex'
import Link from '../atoms/Link'
import Container from '../atoms/Container'
import Navigator from '../organisms/Navigator'
import Text from '../atoms/Text'
import Box from '../atoms/Box'
import NextLink from 'next/link'

interface DefaultTemplateProps {
  children: React.ReactNode
}

export default ({ children }: DefaultTemplateProps) => (
  <Flex>
    <Navigator />
    <Container mx='auto' px={4} pb={6} width={1}>
      {children}
      <Box my={4} as='footer'>
        <Text textAlign='center'>
          <Link href='https://github.com/Rokt33r/blog' target='_blank'>
            <Icon path={mdiGithubCircle} size='1em' />
            Rokt33r/blog
          </Link>
        </Text>
        <Flex justifyContent='center'>
          <Text color='#777' textAlign='center' mr={2}>
            © 2019
          </Text>
          <NextLink href='/about' passHref>
            <Link mr={2}>Junyoung Choi</Link>
          </NextLink>
        </Flex>
      </Box>
    </Container>
  </Flex>
)
