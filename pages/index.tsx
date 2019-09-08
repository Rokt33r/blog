import React from 'react'
import DefaultTemplate from '../templates/DefaultTemplate'
import PostCard from '../molecules/PostCard'
import Heading from '../atoms/Heading'
import data from '../generated/posts'

export default () => (
  <DefaultTemplate>
    <header>
      <Heading depth={1}>Rokt33r's Lab</Heading>
      <p>Mainly talking about Typescript, Node.js, React.js and Markdown.</p>
    </header>
    <section>
      <h2>Recent posts</h2>
      <div>
        {data.posts
          .filter(post => !post.draft)
          .sort((a, b) => b.date.localeCompare(a.date))
          .map(post => (
            <PostCard key={post.name} post={post} />
          ))}
      </div>
    </section>
  </DefaultTemplate>
)
