'use client'
import { Comment } from "@/@types/get-post-type"
import ArrowUp from '../assets/arrow-up.svg'
import ArrowDown from '../assets/arrow-down.svg'
import { useLikeDislike } from "@/hooks/useLikeDislike"
import { useRouter } from "next/navigation"


interface CommentCardProps {
    comment: Comment
}

export function CommentCard({ comment }: CommentCardProps) {
    const router = useRouter()
    const { likeOrDislike } = useLikeDislike()


    function likeDislikeComment({ id, like }: LikeDislikeData) {
        try {
            likeOrDislike({ id, like })
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div
            className="gap-4 p-2 w-full max-w-md bg-grayBg-50 max-h-60 rounded-lg border border-grayBg-200 flex flex-col"
            key={comment.id}
        >
            <p className="text-sm text-grayBg-300">
                Enviado por: {comment.creator.name}
            </p>
            <p className="">
                {comment.content}
            </p>
            <div className="flex gap-2">
                <div className="p-2 flex items-center justify-around w-24 rounded-full border h-7">

                    <ArrowUp
                        className="cursor-pointer fill-pink-500 hover:animate-bounce"
                        onClick={
                            () => likeDislikeComment({ id: comment.id, like: true })
                        }
                    />
                    <p className="text-grayBg-300 text-xs">{comment.likes}</p>
                    <ArrowDown
                        className="cursor-pointer hover:animate-bounce"
                        onClick={
                            () => likeDislikeComment({ id: comment.id, like: false })
                        }
                    />
                </div>

            </div>

        </div>
    )
}