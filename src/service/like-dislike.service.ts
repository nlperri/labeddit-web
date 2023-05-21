import { api } from '@/lib/api'
import getCookies from './get-cookie.service'

export class LikeDislikeService {
  async execute({ id, like }: LikeDislikeData) {
    const token = await getCookies()
    const response = await api.put<void>(
      `/posts/${id}/like`,
      {
        like,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response
  }
}
