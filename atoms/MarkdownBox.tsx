import React from 'react'
import Box, { BoxProps } from './Box'
import styled from 'styled-components'
import { convertMarkdownToReact } from '../lib/markdown'

interface MarkdownBoxProps extends BoxProps {
  children: string
}

const MarkdownBoxContainer = styled(Box)`
  & a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  & blockquote {
    border-left: ${({ theme }) => theme.colors.blue} 4px solid;
    margin-left: 0;
    padding: 0.125em 1em;
  }

  pre code.hljs {
    padding: 1.5em;
    border: ${({ theme }) => theme.colors.blue} 2px dashed;
  }
  code:not(.hljs) {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.2em 0.4em;
  }
`

export default ({ children, ...boxProps }: MarkdownBoxProps) => (
  <MarkdownBoxContainer {...(boxProps as any)}>
    {convertMarkdownToReact(children).contents}
  </MarkdownBoxContainer>
)
