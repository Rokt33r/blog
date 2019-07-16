import Text, { TextProps } from './Text'
import styled from 'styled-components'

interface LinkProps extends TextProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Link = styled(Text)<LinkProps>({})

Link.defaultProps = {
  as: 'a',
  color: 'blue'
}

export default Link
