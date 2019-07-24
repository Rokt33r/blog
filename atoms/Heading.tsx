import Text, { TextProps } from './Text'
import styled from 'styled-components'

interface HeadingProps extends TextProps {
  depth?: number
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Heading = styled(Text).attrs(({ depth = 2, fontSize }: HeadingProps) => ({
  as: `h${depth}`,
  fontSize: fontSize != null ? fontSize : 6 - depth
}))<HeadingProps>({})

Heading.defaultProps = {
  m: 0,
  fontWeight: 'bold'
}

export default Heading
