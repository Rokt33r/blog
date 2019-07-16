import Text, { TextProps } from './Text'
import styled from 'styled-components'

interface HeadingProps extends TextProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Heading = styled(Text)<HeadingProps>({})

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold'
}

export default Heading
