import { NewPostForm } from "@/components/NewPostForm";
import { PostCard } from "@/components/PostCard";
import { Posts } from "@/components/Posts";
import { useGetPostsWithComments } from "@/hooks/usePostsWithComments";

export default async function HomePage() {

    const { posts } = await useGetPostsWithComments()

    return (
        <main className="my-7 mt-8">
            <div className="flex flex-col items-center justify-center">
                <NewPostForm />
                <div className=" h-[1px] mt-6 w-full max-w-md bg-gradient-to-r from-pink-500 to-orange-500">
                </div>
                <Posts posts={posts} />
            </div>
        </main>
    )
}