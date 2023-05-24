import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { PostOutput } from '@/@types/fetch-posts.type'

export class FetchPostsService {
  async execute(page: number) {
    const token = await getCookies()
    const response = await api.get<PostOutput[]>(`/posts/page/${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }
}
