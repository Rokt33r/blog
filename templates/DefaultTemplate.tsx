import React from 'react'
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Navigator from '../organisms/Navigator'

interface DefaultTemplateProps {
  children: React.ReactNode
}

export default ({ children }: DefaultTemplateProps) => (
  <Flex>
    <Navigator />
    <Container mx='auto' px={4} pb={6} width={1}>
      {children}
    </Container>
  </Flex>
)
