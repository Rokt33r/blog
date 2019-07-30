import styled from 'styled-components'
import Box, { BoxProps, composedBoxStyle } from './Box'
import {
  FontFamilyProps,
  FontWeightProps,
  TextAlignProps,
  LineHeightProps,
  LetterSpacingProps,
  TextStyleProps,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing,
  compose,
  textStyle
} from 'styled-system'
import { TextDecorationProps, textDecoration } from '../lib/styles'

export interface TextProps
  extends BoxProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps,
    TextStyleProps,
    TextDecorationProps {}

export const composedTextStyle = compose(
  composedBoxStyle,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textStyle,
  textDecoration
)

const Text = styled(Box)<TextProps>(composedTextStyle)

export default Text
