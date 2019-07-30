import styled from 'styled-components'
import Box, { BoxProps, boxStyle } from './Box'
import {
  FontFamilyProps,
  FontWeightProps,
  TextAlignProps,
  LineHeightProps,
  LetterSpacingProps,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  compose
} from 'styled-system'
import { TextDecorationProps, textDecoration } from '../lib/styles'

export interface TextProps
  extends BoxProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps,
    TextDecorationProps {}

export const textStyle = compose(
  boxStyle,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textDecoration
)

const Text = styled(Box)<TextProps>(textStyle)

export default Text
