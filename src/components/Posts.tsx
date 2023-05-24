import { Post } from "@/@types/get-post-type"
import { PostCard } from "./PostCard"

interface PostsProps {
    posts: Post[]
}

export function Posts({ posts }: PostsProps) {

    return (
        <div className="mt-7 px-6 w-full flex flex-col items-center justify-center gap-3">

            {posts
                .sort((a, b) => {
                    return (b.likes - b.dislikes) - (a.likes - a.dislikes)
                })
                .map(post => {
                    return (
                        <PostCard
                            key={post.id}
                            post={post} />
                    )
                })
            }
        </div>
    )
}