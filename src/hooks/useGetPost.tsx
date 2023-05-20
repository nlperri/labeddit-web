import { GetPostService } from "@/service/get-comment-post.service";

export function useGetPost() {
    async function getPost(id: string) {
        return new GetPostService().execute(id)
    }
    return {
        getPost,
    }
}
