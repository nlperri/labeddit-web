type LikeDetails = {
  userName: string
  userId: string
  postId?: string
  commentId?: string
  like: number
}

type DislikeDetails = {
  userName: string
  userId: string
  postId?: string
  commentId?: string
  like: number
}

export type CommentsWihDetails = {
  id: string
  creator: {
    id: string
    name: string
  }
  content: string
  likes: LikeDetails[]
  dislikes: DislikeDetails[]
  createdAt: string
  updatedAt: string
}

export type PostOutput = {
  id: string
  content: string
  likes: LikeDetails[]
  dislikes: DislikeDetails[]
  createdAt: string
  updatedAt?: string
  creator: {
    id: string
    name: string
  }
  comments: CommentsWihDetails[]
}
