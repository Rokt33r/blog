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
  color
} from 'styled-system'

export interface BoxProps
  extends SpaceProps,
    WidthProps,
    FontSizeProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    ColorProps {
  boxStyle?: string
}

const Box = styled.div<BoxProps>(
  { boxSizing: 'border-box' },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
)

export default Box
