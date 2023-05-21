import { api } from '@/lib/api'
import getCookies from './get-cookie.service'
import { NewCommentData } from '@/@types/new-comment.type'
import { Comment } from '@/@types/get-post-type'

export class NewCommentService {
  async execute({ postId, content }: NewCommentData) {
    const token = await getCookies()
    const response = await api.post<Comment>(
      `/posts/${postId}/comments`,
      {
        content,
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
