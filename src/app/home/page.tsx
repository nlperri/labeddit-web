import { NewPostForm } from "@/components/NewPostForm";
import { Posts } from "@/components/Posts";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import { getUser } from "@/lib/auth";



export default async function HomePage() {
    const { fetchPosts } = useFetchPosts()
    const user = getUser()
    const posts = await fetchPosts()


    return (
        <main className="my-7 mt-8">
            <div className="flex flex-col items-center justify-center">
                <NewPostForm />
                <div className=" h-[1px] mt-6 w-full max-w-md bg-gradient-to-r from-pink-500 to-orange-500">
                </div>
                <Posts userId={user.id} posts={posts} />
            </div>
        </main>
    )
}