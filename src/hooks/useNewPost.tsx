import { NewPostData } from "@/@types/ new-post.type";
import { NewPostService } from "@/service/new-post.service";

export function useNewPost() {
    async function newPost(data: NewPostData) {
        return new NewPostService().execute(data)
    }
    return {
        newPost,
    }
}
