'use client'
import ArrowUp from '../assets/arrow-up.svg'
import ArrowDown from '../assets/arrow-down.svg'
import ArrowUpFull from '../assets/up_arrow_full.svg'
import ArrowDownFull from '../assets/down_arrow_full.svg'
import { useLikeDislike } from "@/hooks/useLikeDislike"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CommentsWihDetails } from "@/@types/fetch-posts.type"


interface CommentCardProps {
    comment: CommentsWihDetails
    userId: string
}

export function CommentCard({ comment, userId }: CommentCardProps) {
    const router = useRouter()
    const { likeOrDislike } = useLikeDislike()

    function isCommentAlreadyLiked() {
        if (comment.likes.length > 0) {
            const like = comment.likes.find(like => {
                return like.userId === userId
            })

            if (like) {
                return true
            }
            return false
        }
        return false
    }

    function isCommentAlreadyDisliked() {
        if (comment.dislikes.length > 0) {
            const dislike = comment.dislikes.find(dislike => {
                return dislike.userId === userId
            })

            if (dislike) {
                return true
            }
            return false
        }
        return false
    }

    function likeDislikeComment({ id, like }: LikeDislikeData) {
        try {
            likeOrDislike({ id, like })
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }

    const alreadyLiked = isCommentAlreadyLiked()
    const alreadyDisliked = isCommentAlreadyDisliked()


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
            <div className="flex justify-between">
                <div className="p-2 flex items-center justify-around w-24 rounded-full border h-7">

                    {alreadyLiked ? <ArrowUpFull

                        className="cursor-pointer fill-pink-500 hover:animate-bounce"
                        onClick={
                            () => {
                                likeDislikeComment({ id: comment.id, like: true })
                                router.refresh()
                            }
                        }
                    /> : <ArrowUp

                        className="cursor-pointer fill-pink-500 hover:animate-bounce"
                        onClick={
                            () => {
                                likeDislikeComment({ id: comment.id, like: true })
                                router.refresh()
                            }
                        }
                    />}

                    <p className="text-grayBg-300 text-xs">{comment.likes.length}</p>
                    {alreadyDisliked ? <ArrowDownFull
                        className="cursor-pointer hover:animate-bounce"
                        onClick={
                            () => {
                                likeDislikeComment({ id: comment.id, like: false })
                                router.refresh()
                            }
                        }
                    /> : <ArrowDown
                        className="cursor-pointer hover:animate-bounce"
                        onClick={
                            () => {
                                likeDislikeComment({ id: comment.id, like: false })
                                router.refresh()
                            }
                        }
                    />}
                </div>
                <time className="-ml-8 flex items-center gap-2 text-grayBg-300 text-xs ">
                    {formatDistanceToNow(new Date(comment.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                    })}
                </time>

            </div>

        </div>
    )
}