import { Post } from "@/@types/get-post-type"
import { CommentCard } from "@/components/CommentCard"
import { NewCommentForm } from "@/components/NewCommentForm"
import { PostCard } from "@/components/PostCard"
import { useFetchPosts } from "@/hooks/useFetchPosts"
import { getUser } from "@/lib/auth"

interface PostProps {
    params: {
        id: string
    }
}

export default async function Post({ params }: PostProps) {
    const postId = params.id
    const { fetchPosts } = useFetchPosts()
    const user = getUser()

    const posts = await fetchPosts()

    const post = posts.find(post => {
        return post.id === postId
    })


    return (
        <div className="flex flex-col items-center justify-center pt-7 gap-2">
            <PostCard userId={user.id} post={post!} />
            <NewCommentForm postId={postId} />
            <div className=" h-[1px] mt-2 w-full max-w-md bg-gradient-to-r from-pink-500 to-orange-500">
            </div>
            {post!.comments.length > 0 &&
                post!.comments
                    .sort((a, b) => {
                        return (b.likes.length - b.dislikes.length) - (a.likes.length - a.dislikes.length)
                    })
                    .map(comment => {
                        return (
                            <div
                                className="w-full flex flex-col items-center justify-center"
                                key={comment.id}>
                                <CommentCard userId={user.id} comment={comment} />

                            </div>
                        )
                    })}
        </div>
    )
}