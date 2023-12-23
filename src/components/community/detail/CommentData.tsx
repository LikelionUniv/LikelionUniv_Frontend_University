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
    hasComments: boolean;
}

export interface Comment {
    commentId: number;
    userId: number;
    userName: string;
    hasUserProfileImageUrl: boolean;
    userProfileImageUrl?: string;
    isLoginUserComment: boolean;
    isAuthorComment: boolean;
    isLikedComment: boolean;
    likeCount: number;
    body: string;
    isDeleted: boolean;
    createdDate: string;
    hasChildComments?: boolean;
    childComments?: Comment;
    parentId?: number;
}
export const CommentData = [{
    "post" : {
        "postId":1,
        "authorId":1,
        "authorName": "김멋사",
        "hasAuthorProfileImageUrl":true,
        "authorProfileImageUrl": "https://health.chosun.com/site/data/img_dir/2023/06/20/2023062002262_0.jpg",
        "authorOrdinal":11,
        "universityName":"멋사대학교",
        "isMyPost": true,
        "isFollowedAuthor": true,
        "isLikedPost": false,
        "likeCount": 11,
        "commentCount": 23,
        "title": "플젝 팀원을 모집합니다",
        "body": "🦁멋사 플젝 디자이너 모집🦁 안녕하세요! 멋쟁이사자처럼 홍익대학교 11기 대표입니다. 멋쟁이사자처럼은 테크 기반 아이디어 실현을 위한 전국 규모의 창업 연합 동아리입니다.",
        "hasComments": true
    },
    "comments" :[
        {
            "commentId":1,
            "userId":2,
            "userName": "김예린",
            "hasUserProfileImageUrl": true,
            "userProfileImageUrl": "http",
            "isLoginUserComment": true,
            "isAuthorComment":false,
            "isLikedComment":true,
            "likeCount": 25,
            "body": "김씨의 댓글내용입니다아아아ㅏㅏ아아",
            "isDeleted": false,
            "createdDate": "2023-12-11T04:47:21.017Z",
            "hasChildComments": true,
            "childComments":[
                {
                    "commentId":2,
                    "parentId":1,
                    "userId":2,
                    "userName": "김예린",
                    "hasUserProfileImageUrl": true,
                    "userProfileImageUrl": "http",
                    "isLoginUserComment": true,
                    "isAuthorComment":false,
                    "isLikedComment":true,
                    "likeCount": 25,
                    "body": "댓글내용입니다아아아ㅏㅏ아아",
                    "isDeleted": false,
                    "createdDate": "2023-12-11T04:47:21.017Z"
                },
                {
                    "commentId":3,
                    "parentId":1,
                    "userId":2,
                    "userName": "김예린",
                    "hasUserProfileImageUrl": true,
                    "userProfileImageUrl": "http",
                    "isLoginUserComment": true,
                    "isAuthorComment":false,
                    "isLikedComment":true,
                    "likeCount": 25,
                    "body": "댓글내용입니다아아아ㅏㅏ아아",
                    "isDeleted": true,
                    "createdDate": "2023-12-11T04:47:21.017Z"
                }
            ]

        },
        {
            "commentId":4,
            "userId":3,
            "userName": "황제철",
            "hasUserProfileImageUrl": true,
            "userProfileImageUrl": "http",
            "isLoginUserComment": false,
            "isAuthorComment":false,
            "isLikedComment":true,
            "likeCount": 25,
            "body": "황씨의 댓글내용입니다아아아ㅏㅏ아아",
            "isDeleted": false,
            "createdDate": "2023-12-11T04:47:21.017Z",
            "hasChildComments": true,
            "childComments":[
                {
                    "commentId":5,
                    "parentId":4,
                    "userId":3,
                    "userName": "황제철",
                    "hasUserProfileImageUrl": true,
                    "userProfileImageUrl": "http",
                    "isLoginUserComment": false,
                    "isAuthorComment":false,
                    "isLikedComment":false,
                    "likeCount": 25,
                    "body": "댓글내용입니다아아아ㅏㅏ아아",
                    "isDeleted": false,
                    "createdDate": "2023-12-11T04:47:21.017Z"
                },
                {
                    "commentId":6,
                    "parentId":4,
                    "userId":1,
                    "userName": "김멋사",
                    "hasUserProfileImageUrl": true,
                    "userProfileImageUrl": "http",
                    "isLoginUserComment": false,
                    "isAuthorComment":true,
                    "isLikedComment":true,
                    "likeCount": 25,
                    "body": "댓글내용입니다아아아ㅏㅏ아아",
                    "isDeleted": false,
                    "createdDate": "2023-12-11T04:47:21.017Z"
                }
            ]

        },
        {
            "commentId":7,
            "userId":1,
            "userName": "김멋사",
            "hasUserProfileImageUrl": true,
            "userProfileImageUrl": "http",
            "isLoginUserComment": false,
            "isAuthorComment":true,
            "isLikedComment":false,
            "likeCount": 25,
            "body": "댓글내용입니다아아아ㅏㅏ아아",
            "isDeleted": false,
            "createdDate": "2023-12-11T04:47:21.017Z",
            "hasChildComments": false,

        }
    ]
}]

