import styled from 'styled-components'
import { TextProps, composedTextStyle } from './Text'

interface LinkElementProps extends TextProps {}

const Link = styled.a<LinkElementProps>`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  ${composedTextStyle}
`
Link.defaultProps = {
  color: 'blue'
}

export default Link
