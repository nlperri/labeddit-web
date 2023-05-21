'use client'
import { useNewComment } from "@/hooks/useNewComment"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'

interface NewCommentFormProps {
    postId: string
}

export function NewCommentForm({ postId }: NewCommentFormProps) {
    const { newComment } = useNewComment()
    const router = useRouter()

    const newCommentSchema = z.object({
        content: z.string()
    })

    type newCommentInput = z.infer<typeof newCommentSchema>

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<newCommentInput>({
        resolver: zodResolver(newCommentSchema),
    })

    async function handleNewComment({ content }: newCommentInput) {
        try {
            await newComment({ content, postId })
            router.refresh()
            reset()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(handleNewComment)}
                className="px-6 w-full flex flex-col items-center justify-center">
                <textarea
                    required
                    {...register('content')}
                    placeholder="Adicionar comentário"
                    className="focus:outline-none p-3 bg-grayBg-100 resize-none w-full rounded max-w-md h-32 placeholder:text-sm focus:ring-0"
                ></textarea>
                <button
                    className="mt-2 w-full max-w-md h-12 rounded-md bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-500 active:bg-pink-500"
                    type='submit'
                >
                    Responder
                </button>
            </form>
        </>
    )
}