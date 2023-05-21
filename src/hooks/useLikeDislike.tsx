import { LikeDislikeService } from "@/service/like-dislike.service";

export function useLikeDislike() {
    async function likeOrDislike(data: LikeDislikeData) {
        new LikeDislikeService().execute(data)
    }
    return {
        likeOrDislike,
    }
}
