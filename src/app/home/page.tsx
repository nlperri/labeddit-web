import { GetPostOutput } from "@/@types/get-post-type";
import { NewPostForm } from "@/components/NewPostForm";
import { Posts } from "@/components/Posts";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import { useGetPost } from "@/hooks/useGetPost";

export default async function HomePage() {
    const { fetchPosts } = useFetchPosts()
    const { getPost } = useGetPost()
    const response = await fetchPosts()

    const posts = await Promise.all(response.map(async (post) => {
        const postWithComment = await getPost(post.id)

        const comments = postWithComment.comments

        return {
            ...post,
            comments
        }

    }))




    return (
        <main className="my-7 mt-8">
            <div className="flex flex-col items-center justify-center">
                <NewPostForm />
                <div className=" h-[1px] mt-6 w-full max-w-md bg-gradient-to-r from-pink-500 to-orange-500">
                </div>
                <Posts
                    posts={posts} />
            </div>
        </main>
    )
}