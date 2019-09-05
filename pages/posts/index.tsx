import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import PostCard from '../../molecules/PostCard'
import { PostWithoutContent } from '../../lib/types'
import data from '../../static/generated/posts.json'

export default () => (
  <DefaultTemplate>
    <h1>Posts list</h1>
    <div>
      {(data.posts as PostWithoutContent[])
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(post => (
          <PostCard key={post.name} post={post} />
        ))}
    </div>
  </DefaultTemplate>
)
