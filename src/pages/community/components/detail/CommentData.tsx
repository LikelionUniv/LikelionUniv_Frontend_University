export interface Data {
    post: Post;
    comments: Comment[];
}

export interface Post {
    postId: number;
    authorId: number;
    authorName: string;
    hasAuthorProfileImageUrl: boolean;
    authorProfileImageUrl?: string;
    authorOrdinal: number;
    universityName: string;
    isMyPost: boolean;
    isFollowedAuthor: boolean;
    isLikedPost: boolean;
    likeCount: number;
    commentCount: number;
    title: string;
    body: string;
    mainCategory: string;
    subCategory: string;
    createdDate: string;
}

export interface PostComment {
    commentId: number;
    userId: number;
    userName: string;
    hasUserProfileImageUrl: boolean;
    hasUserProfileImage: boolean;
    userProfileImageUrl?: string;
    isLoginUserComment: boolean;
    isAuthorComment: boolean;
    isLikedByLoginUser: boolean;
    likeCount: number;
    body: string;
    isDeleted: boolean;
    createdDate: string;
    hasChildComments?: boolean;
    childComments?: PostComment[];
    parentId?: number;
    onCommentUpdate: () => void;
}
