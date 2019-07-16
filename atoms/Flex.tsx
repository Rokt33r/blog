import styled from 'styled-components'
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  FlexWrapProps,
  AlignItemsProps,
  JustifyContentProps,
  FlexDirectionProps
} from 'styled-system'
import Box, { BoxProps } from './Box'

interface FlexProps
  extends BoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {}

const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

export default Flex
