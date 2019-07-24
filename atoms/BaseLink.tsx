import Text, { TextProps } from './Text'
import styled from 'styled-components'

export interface BaseLinkProps extends TextProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const Link = styled(Text)<BaseLinkProps>({})

Link.defaultProps = {
  as: 'a'
}

export default Link
