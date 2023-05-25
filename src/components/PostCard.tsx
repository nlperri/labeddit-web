'use client'
import { useLikeDislike } from "@/hooks/useLikeDislike"
import { useRouter } from "next/navigation"
import ArrowUp from '../assets/arrow-up.svg'
import ArrowDown from '../assets/arrow-down.svg'
import ArrowUpFull from '../assets/up_arrow_full.svg'
import ArrowDownFull from '../assets/down_arrow_full.svg'
import CommentsImg from '../assets/comments.svg'
import React from "react"
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostOutput } from "@/@types/fetch-posts.type"





interface PostCardProps {
    post: PostOutput
    userId: string
}

export function PostCard({ post, userId }: PostCardProps) {
    const router = useRouter()

    const { likeOrDislike } = useLikeDislike()


    function isPostAlreadyLiked() {
        if (post.likes.length > 0) {
            const like = post.likes.find(like => {
                return like.userId === userId
            })

            if (like) {
                return true
            }
            return false
        }
        return false
    }

    function isPostAlreadyDisliked() {
        if (post.dislikes.length > 0) {
            const dislike = post.dislikes.find(dislike => {
                return dislike.userId === userId
            })

            if (dislike) {
                return true
            }
            return false
        }
        return false
    }

    function likeDislikePost({ id, like }: LikeDislikeData) {
        try {
            likeOrDislike({ id, like })
            router.refresh()
        } catch (error) {
            console.log(error)
        }
    }

    const alreadyLiked = isPostAlreadyLiked()
    const alreadyDisliked = isPostAlreadyDisliked()

    return (
        <div
            className="gap-4 p-2 w-full max-w-md bg-grayBg-50 max-h-60 rounded-lg border border-grayBg-200 flex flex-col"
            key={post.id}
        >

            <p className="text-sm text-grayBg-300">
                Enviado por: {post.creator.name}
            </p>


            <p className="">
                {post.content}
            </p>
            <div className="flex justify-between">
                <div className="flex gap-2">
                 
                    <div className="p-2 flex items-center justify-around w-24 rounded-full border h-7">
                        {alreadyLiked ? <ArrowUpFull

                            className="cursor-pointer fill-pink-500 hover:animate-bounce"
                            onClick={
                                () => {
                                    likeDislikePost({ id: post.id, like: true })
                                    router.refresh()
                                }
                            }
                            /> :   <ArrowUp

                            className="cursor-pointer fill-pink-500 hover:animate-bounce"
                            onClick={
                                () => {
                                    likeDislikePost({ id: post.id, like: true })
                                    router.refresh()
                                }
                            }
                            />}
                      
                        <p className="text-grayBg-300 text-xs">{post.likes.length}</p>
                        {alreadyDisliked ? <ArrowDownFull
                            className="cursor-pointer hover:animate-bounce"
                            onClick={
                                () => {
                                    likeDislikePost({ id: post.id, like: false })
                                    router.refresh()
                                }
                            }
                        /> :  <ArrowDown
                            className="cursor-pointer hover:animate-bounce"
                            onClick={
                                () => {
                                    likeDislikePost({ id: post.id, like: false })
                                    router.refresh()
                                }
                            }
                        />}
                       
                    </div>
                    <div
                        onClick={() => router.push(`/post/${post.id}`)}
                        className=" cursor-pointer rounded-full border h-7 py-2 px-3 flex items-center justify-around w-16">
                        <CommentsImg className="hover:animate-bounce" />
                        <p className="text-grayBg-300 text-xs">{post.comments.length}</p>
                    </div>

                </div>
                <time className="-ml-8 flex items-center gap-2 text-grayBg-300 text-xs ">
                    {formatDistanceToNow(new Date(post.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                    })}
                </time>
            </div>

        </div>
    )


}