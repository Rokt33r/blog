import App, { Container, AppContext } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  '*': { boxSizing: 'border-box' },
  body: {
    margin: 0
  }
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
