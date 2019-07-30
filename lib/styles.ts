import { system } from 'styled-system'
import { TextDecorationProperty } from 'csstype'

export const textDecoration = system({
  textDecoration: true
})

export interface TextDecorationProps {
  textDecoration?: TextDecorationProperty
}
