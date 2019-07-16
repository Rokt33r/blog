import React from 'react'
import Box from '../atoms/Box'
import Flex from '../atoms/Flex'
import Link from '../atoms/Link'
import Heading from '../atoms/Heading'
import Container from '../atoms/Container'

interface DefaultTemplateProps {
  children: React.ReactNode
}

export default ({ children }: DefaultTemplateProps) => (
  <Flex>
    <Box width={[1, 256, 320]} px={4} pt={4}>
      <Heading>Rokt33r's blog</Heading>
      <Box mb="auto">
        <Link>About me</Link>
        <Box>Posts</Box>
      </Box>
    </Box>

    <Container mx="auto" px={4} pt={4} pb={6} width={1}>
      {children}
    </Container>
  </Flex>
)
