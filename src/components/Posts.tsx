import { Post } from "@/@types/get-post-type"
import { PostCard } from "./PostCard"
import { PostOutput } from "@/@types/fetch-posts.type"

interface PostsProps {
    posts: PostOutput[]
    userId: string
}

export function Posts({ posts, userId }: PostsProps) {

    return (
        <div className="mt-7 px-6 w-full flex flex-col items-center justify-center gap-3">

            {posts
                .sort((a, b) => {
                    return (b.likes.length - b.dislikes.length) - (a.likes.length - a.dislikes.length)
                })
                .map(post => {
                    return (
                        <PostCard
                            key={post.id}
                            post={post}
                            userId={userId} />
                    )
                })
            }
        </div>
    )
}