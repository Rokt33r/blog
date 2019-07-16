import App, { Container, AppContext, AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalDataContext } from '../lib/global'
import { fetchGlobalData, GlobalResponseBody } from '../api/global'

const theme = {
  '*': { boxSizing: 'border-box' },
  body: {
    margin: 0
  }
}

interface MyAppProps {
  globalData: GlobalResponseBody
}

export default class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const [pageProps, globalData] = await Promise.all([
      Component.getInitialProps ? Component.getInitialProps(ctx) : {},
      fetchGlobalData()
    ])

    return { pageProps, globalData }
  }

  render() {
    const { Component, pageProps, globalData } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalDataContext.Provider value={globalData}>
            <Component {...pageProps} />
          </GlobalDataContext.Provider>
        </ThemeProvider>
      </Container>
    )
  }
}
