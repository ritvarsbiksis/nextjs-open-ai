import { dehydrate } from '@tanstack/react-query'

import { HydrateClient } from '../../components/hydrate-client/hydrate-client'
import { getQueryClient } from '../../lib/get-query-client'

import { PostsList } from './components/posts-list/posts-list'
import { fetchPosts } from './lib/fetch-posts'

const ListPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['posts', 12], fetchPosts)
  const dehydratedState = dehydrate(queryClient)

  return (
    <main>
      <h2>List of posts</h2>
      <HydrateClient state={dehydratedState}>
        <PostsList />
      </HydrateClient>
    </main>
  )
}

export default ListPage
