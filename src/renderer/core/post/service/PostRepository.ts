import { IPostRepository } from "../../../ui/Page/IPostRepository";
import { ICreatePostInfo } from "../../../ui/Page/ICreatePostInfo";
import { IPostStorage } from "./IPostStorage";
import { IPostData } from "./IStoredPost";

export class PostRepository implements IPostRepository {
    constructor(private readonly storage: IPostStorage) {}

    async addPost(postInfo: ICreatePostInfo): Promise<number> {
        const postData: IPostData = {
            ...postInfo,
            postDate: Date.now(),
        };
        return this.storage.add(postData);
    }

    async updatePostContent(postId: number, content: string): Promise<void> {
        return this.storage.update(postId, { content });
    }

    async updatePostTitle(postId: number, title: string): Promise<void> {
        return this.storage.update(postId, { title });
    }

    async clear(): Promise<void> {
        return this.storage.clear();
    }
}
