import { NewPostData } from '@/@types/ new-post.type'
import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { PostOutput } from '@/@types/fetch-posts.type'

export class NewPostService {
  newPostUrl: string = '/posts'
  async execute(data: NewPostData) {
    const token = await getCookies()
    const response = await api.post<PostOutput>(
      this.newPostUrl,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response.data
  }
}
