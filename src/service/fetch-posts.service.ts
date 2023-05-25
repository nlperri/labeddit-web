import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { PostOutput } from '@/@types/fetch-posts.type'

export class FetchPostsService {
  async execute() {
    const token = await getCookies()
    const response = await api.get<PostOutput[]>('/postscomments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }
}
