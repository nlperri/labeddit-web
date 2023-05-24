import { Post } from "@/@types/get-post-type";
import { useFetchPosts } from "./useFetchPosts";
import { useGetPost } from "./useGetPost";

export async function useGetPostsWithComments() {
    const { fetchPosts } = useFetchPosts()
    const { getPost } = useGetPost()

    const response = await fetchPosts()

    const posts: Post[] = await Promise.all(response.map(async (post) => {
        const postWithComment = await getPost(post.id)
        const comments = postWithComment.comments ?? []
        return {
            ...post,
            comments,

        }
    }))





    return { posts }
}