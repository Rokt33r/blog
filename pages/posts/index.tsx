import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import PostCard from '../../molecules/PostCard'
import data from '../../generated/posts'

export default () => (
  <DefaultTemplate>
    <h1>Posts list</h1>
    <div>
      {data.posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(post => (
          <PostCard key={post.name} post={post} />
        ))}
    </div>
  </DefaultTemplate>
)
