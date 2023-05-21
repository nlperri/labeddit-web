import { NewCommentData } from "@/@types/new-comment.type";
import { NewCommentService } from "@/service/new-comment.service";

export function useNewComment() {
    async function newComment(data: NewCommentData) {
        return new NewCommentService().execute(data)
    }
    return {
        newComment,
    }
}
