'use client'
import { GetPostOutput } from "@/@types/get-post-type";
import arrowUp from '../assets/arrow-up.svg'
import arrowDown from '../assets/arrow-down.svg'
import commentsImg from '../assets/comments.svg'
import Image from "next/image";


interface PostsProps {
    posts: GetPostOutput[];
}

export function Posts({ posts }: PostsProps) {
    console.log(posts)

    return (
        <div className="mt-7 px-6 w-full flex flex-col items-center justify-center gap-3">
            {posts.map(post => {
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
                                <Image src={arrowUp} width={13} height={13} alt="" />
                                <p className="text-grayBg-300 text-xs">{post.likes}</p>
                                <Image src={arrowDown} width={13} height={13} alt="" />
                            </div>
                            <div className="rounded-full border h-7 py-2 px-3 flex items-center justify-around w-16">
                                <Image src={commentsImg} width={15} height={15} alt="" />
                                <p className="text-grayBg-300 text-xs">{post.comments.length}</p>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}