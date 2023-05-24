import { Post } from "@/@types/get-post-type"
import { CommentCard } from "@/components/CommentCard"
import { NewCommentForm } from "@/components/NewCommentForm"
import { PostCard } from "@/components/PostCard"
import { useGetPost } from "@/hooks/useGetPost"

interface PostProps {
    params: {
        id: string
    }
}

export default async function Post({ params }: PostProps) {
    const postId = params.id
    const { getPost } = useGetPost()

    const post: Post = await getPost(postId)



    return (
        <div className="flex flex-col items-center justify-center pt-7 gap-2">
            <PostCard post={post} />
            <NewCommentForm postId={postId} />
            <div className=" h-[1px] mt-2 w-full max-w-md bg-gradient-to-r from-pink-500 to-orange-500">
            </div>
            {post.comments.length > 0 && 
            post.comments
            .sort((a,b)=>{
                return (b.likes - b.dislikes) - (a.likes - a.dislikes)
            })
            .map(comment => {
                return (
                    <div
                        className="w-full flex flex-col items-center justify-center"
                        key={comment.id}>
                        <CommentCard comment={comment} />

                    </div>
                )
            })}
        </div>
    )
}