import { Post } from "@/@types/get-post-type";
import { useFetchPosts } from "./useFetchPosts";
import { useGetPost } from "./useGetPost";

export async function useGetPostsWithComments(page: number = 1) {
    const { fetchPosts } = useFetchPosts()
    const { getPost } = useGetPost()

    const response = await fetchPosts(page)

    const posts: Post[] = await Promise.all(response.map(async (post) => {
        const postWithComment = await getPost(post.id)
        const comments = postWithComment.comments ?? []
        return {
            ...post,
            comments,

        }
    }))

    const fetchNextPage = async () => {
        const nextPage = page + 1;
        const nextResponse = await fetchPosts(nextPage);
        const nextPosts = await Promise.all(nextResponse.map(async (post) => {
            const postWithComment = await getPost(post.id);
            const comments = postWithComment.comments ?? [];
            return {
                ...post,
                comments,
            };
        }));
        return nextPosts;
    };



    return { posts, fetchNextPage }
}