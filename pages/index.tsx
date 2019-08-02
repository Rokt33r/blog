import React from 'react'
import DefaultTemplate from '../templates/DefaultTemplate'
import {
  fetchPostsIndexResponseBody,
  PostsIndexResponseBody
} from '../api/posts'
import PostCard from '../molecules/PostCard'
import Heading from '../atoms/Heading'

interface HomePageProps {
  data: PostsIndexResponseBody
}

const HomePage = ({ data }: HomePageProps) => (
  <DefaultTemplate>
    <header>
      <Heading depth={1}>Rokt33r's Lab</Heading>
      <p>Mainly talking about Typescript, Node.js, React.js and Markdown.</p>
    </header>
    <section>
      <h2>Recent posts</h2>
      <div>
        {data.posts.map(post => (
          <PostCard key={post.name} post={post} />
        ))}
      </div>
    </section>
  </DefaultTemplate>
)

HomePage.getInitialProps = async () => {
  const data = await fetchPostsIndexResponseBody()
  return { data }
}

export default HomePage
