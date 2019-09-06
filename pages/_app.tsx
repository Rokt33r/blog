import App from 'next/app'
import React from 'react'
import { StyleProvider } from '../lib/styles'
import { MDXProvider } from '@mdx-js/react'
import MarkdownBox from '../atoms/MarkdownBox'
import DefaultTemplate from '../templates/DefaultTemplate'
import Link from '../atoms/Link'
import Box from '../atoms/Box'
import PostMeta from '../molecules/PostMeta'
import Heading from '../atoms/Heading'
import Head from 'next/head'

interface WrapperProps {
  frontMatter: any
  filePathname: string
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  frontMatter,
  filePathname
}) => (
  <DefaultTemplate>
    <Head>
      <title>{frontMatter.title} - Rokt33r's Lab</title>
    </Head>
    <Box mt={3}>
      <Link href='/'>Home</Link>
    </Box>

    <Heading depth={1} fontSize={6} mt={0} mb={3}>
      {frontMatter.title}
    </Heading>

    <PostMeta
      post={{ category: frontMatter.category, tags: frontMatter.tags }}
      px={2}
      mb={4}
      editLink={`https://github.com/Rokt33r/blog/edit/master${filePathname}`}
    />

    <MarkdownBox mb={5}>{children}</MarkdownBox>
  </DefaultTemplate>
)

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <MDXProvider
        components={{
          wrapper: Wrapper
        }}
      >
        <StyleProvider>
          <Component {...pageProps} />
        </StyleProvider>
      </MDXProvider>
    )
  }
}
