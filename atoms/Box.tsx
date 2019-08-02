import styled, { CSSProp } from 'styled-components'
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
    ColorProps {
  css?: CSSProp
}

export const composedBoxStyle = compose(
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf
)

const Box = styled.div<BoxProps>({}, composedBoxStyle)

export default Box
