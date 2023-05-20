export type GetPostOutput = {
  id: string
  content: string
  likes: number
  dislikes: number
  createdAt: string
  updatedAt: string | 'no updates'
  creator: {
    id: string
    name: string
  }
  comments: Comment[]
}

export type Comment = {
  id: string
  content: string
  likes: number
  dislikes: number
  createdAt: string
  updatedAt: string | 'no updates'
  creator: {
    id: string
    name: string
  }
}
