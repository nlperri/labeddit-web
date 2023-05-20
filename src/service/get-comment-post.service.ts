import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { GetPostOutput } from '@/@types/get-post-type'

export class GetPostService {
  async execute(id: string) {
    const token = await getCookies()
    const response = await api.get<GetPostOutput>(`/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data
  }
}
