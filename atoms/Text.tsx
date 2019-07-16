import styled from 'styled-components'
import Box, { BoxProps } from './Box'
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
  letterSpacing
} from 'styled-system'

export interface TextProps
  extends BoxProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps,
    LetterSpacingProps {}

const Text = styled(Box)<TextProps>(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
)

export default Text
