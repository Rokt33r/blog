import React from 'react'
import DefaultTemplate from '../templates/DefaultTemplate'
import PostCard from '../molecules/PostCard'
import Heading from '../atoms/Heading'
import { getGeneratedJSONFile } from '../lib/assets'
import { PostWithoutContent } from '../lib/types'

interface HomePageProps {
  posts: PostWithoutContent[]
}

const HomePage = ({ posts }: HomePageProps) => (
  <DefaultTemplate>
    <header>
      <Heading depth={1}>Rokt33r's Lab</Heading>
      <p>Mainly talking about Typescript, Node.js, React.js and Markdown.</p>
    </header>
    <section>
      <h2>Recent posts</h2>
      <div>
        {posts.map(post => (
          <PostCard key={post.name} post={post} />
        ))}
      </div>
    </section>
  </DefaultTemplate>
)

HomePage.getInitialProps = () => {
  return getGeneratedJSONFile('posts')
}

export default HomePage
