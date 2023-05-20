import { FetchPostsService } from "@/service/fetch-posts.service";

export function useFetchPosts() {
    async function fetchPosts() {
        return new FetchPostsService().execute()
    }
    return {
        fetchPosts,
    }
}
