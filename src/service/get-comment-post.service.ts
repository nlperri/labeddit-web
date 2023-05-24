import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { Post } from '@/@types/get-post-type'

export class GetPostService {
  async execute(id: string) {
    const token = await getCookies()
    const response = await api.get<Post>(`/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }
}
