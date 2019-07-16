import styled from 'styled-components'
import Box, { BoxProps } from './Box'
import {
  BorderProps,
  BorderRadiusProps,
  border,
  borderRadius
} from 'styled-system'

interface CardProps extends BoxProps, BorderProps, BorderRadiusProps {}

const Card = styled(Box)<CardProps>({}, border, borderRadius)

Card.defaultProps = {}

export default Card
