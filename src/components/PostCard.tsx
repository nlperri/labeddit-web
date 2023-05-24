'use client'
import { Post } from "@/@types/get-post-type"
import { useLikeDislike } from "@/hooks/useLikeDislike"
import { useRouter } from "next/navigation"
import ArrowUp from '../assets/arrow-up.svg'
import ArrowDown from '../assets/arrow-down.svg'
import CommentsImg from '../assets/comments.svg'
import React from "react"
import { useToast } from "@/hooks/useToast"

interface PostCardProps {
    post: Post
}

export function PostCard({ post }: PostCardProps) {

    const router = useRouter()
    const { likeOrDislike } = useLikeDislike()


    function likeDislikePost({ id, like }: LikeDislikeData) {
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
            key={post.id}
        >
            <p className="text-sm text-grayBg-300">
                Enviado por: {post.creator.name}
            </p>
            <p className="">
                {post.content}
            </p>
            <div className="flex gap-2">
                <div className="p-2 flex items-center justify-around w-24 rounded-full border h-7">

                    <ArrowUp

                        className="cursor-pointer fill-pink-500 hover:animate-bounce"
                        onClick={
                            () => likeDislikePost({ id: post.id, like: true })
                        }
                    />
                    <p className="text-grayBg-300 text-xs">{post.likes}</p>
                    <ArrowDown
                        className="cursor-pointer hover:animate-bounce"
                        onClick={
                            () => likeDislikePost({ id: post.id, like: false })
                        }
                    />
                </div>
                <div
                    onClick={() => router.push(`/post/${post.id}`)}
                    className=" cursor-pointer rounded-full border h-7 py-2 px-3 flex items-center justify-around w-16">
                    <CommentsImg className="hover:animate-bounce" />
                    <p className="text-grayBg-300 text-xs">{post.comments.length}</p>
                </div>
            </div>

        </div>
    )


}