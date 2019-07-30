import styled from 'styled-components'
import {
  SpaceProps,
  WidthProps,
  FontSizeProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
  ColorProps,
  space,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  color,
  compose
} from 'styled-system'

export interface BoxProps
  extends SpaceProps,
    WidthProps,
    FontSizeProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    ColorProps {}

export const boxStyle = compose(
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
)

const Box = styled.div<BoxProps>({ boxSizing: 'border-box' }, boxStyle)

export default Box
