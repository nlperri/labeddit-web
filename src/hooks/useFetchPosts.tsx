import { FetchPostsService } from "@/service/fetch-posts.service";

export function useFetchPosts() {
    async function fetchPosts(page: number) {
        return new FetchPostsService().execute(page)
    }
    return {
        fetchPosts,
    }
}
