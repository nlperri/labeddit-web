import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { PostOutput } from '@/@types/fetch-posts.type'

export class FetchPostsService {
  postsUrl: string = '/posts'
  async execute() {
    const token = await getCookies()
    const response = await api.get<PostOutput[]>(this.postsUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }
}
