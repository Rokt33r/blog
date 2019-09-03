import React from 'react'
import DefaultTemplate from '../../templates/DefaultTemplate'
import PostCard from '../../molecules/PostCard'
import { PostWithoutContent } from '../../lib/types'
import { getGeneratedJSONFile } from '../../lib/assets'

interface PostsListPageProps {
  posts: PostWithoutContent[]
}

const PostsListPage = ({ posts }: PostsListPageProps) => (
  <DefaultTemplate>
    <h1>Posts list</h1>
    <div>
      {posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(post => (
          <PostCard key={post.name} post={post} />
        ))}
    </div>
  </DefaultTemplate>
)

PostsListPage.getInitialProps = async () => {
  return getGeneratedJSONFile('posts')
}

export default PostsListPage
