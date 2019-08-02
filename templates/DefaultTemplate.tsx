import React from 'react'
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Navigator from '../organisms/Navigator'
import Text from '../atoms/Text'

interface DefaultTemplateProps {
  children: React.ReactNode
}

export default ({ children }: DefaultTemplateProps) => (
  <Flex>
    <Navigator />
    <Container mx='auto' px={4} pb={6} width={1}>
      {children}
      <Text my={4} as='footer' color='#777' textAlign='center'>
        © 2019 Junyoung Choi
      </Text>
    </Container>
  </Flex>
)
