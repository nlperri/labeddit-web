'use client'
import { useNewPost } from '@/hooks/useNewPost'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useRouter } from 'next/navigation'


export function NewPostForm() {
    const router = useRouter()


    const { newPost } = useNewPost()

    const newPostSchema = z.object({
        content: z.string()
    })

    type newPostInput = z.infer<typeof newPostSchema>

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<newPostInput>({
        resolver: zodResolver(newPostSchema),
    })

    async function handleNewPost(data: newPostInput) {
        try {
            await newPost(data)

            router.refresh()
            reset()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form
                onSubmit={handleSubmit(handleNewPost)}
                className="px-6 w-full flex flex-col items-center justify-center">
                <textarea
                    required
                    {...register('content')}
                    placeholder="Escreva seu post..."
                    className="p-3 bg-grayBg-100 resize-none w-full rounded max-w-md h-32 placeholder:text-sm focus:ring-0"
                ></textarea>
                <button
                    className="mt-2 w-full max-w-md h-12 rounded-md bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold"
                    type='submit'
                >
                    Postar
                </button>
            </form>

        </>
    )
}