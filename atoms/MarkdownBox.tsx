import Box from './Box'
import styled from 'styled-components'

export default styled(Box)`
  overflow-wrap: break-word;
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
    display: block;
    padding: 1.5em;
    border: ${({ theme }) => theme.colors.blue} 2px dashed;
  }
  code:not(.hljs) {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 0.2em 0.4em;
  }
`
