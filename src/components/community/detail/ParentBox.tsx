import * as D from './DetailStyle';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import profileImage from '../../../img/community/profile.svg';
import { ReactComponent as HeartIcon } from '../../../img/community/heart16.svg';
import { ReactComponent as LikedHeartIcon } from '../../../img/community/heart16_liked.svg';
import { ReactComponent as MenuIcon } from '../../../img/community/menu.svg';
import Comment from './Comment';
import request from '../../../utils/request';
import { useAuth } from '../../../hooks/useAuth';
import usePatchComment from '../../../query/patch/usePatchComment';
import { useQueryClient } from '@tanstack/react-query';

interface CommentProps {
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
    childComments?: CommentProps[];
    parentId?: number;
    isChildComment?: boolean;
}

interface CommentId {
    commentLikeId: number;
}

interface LikeCreateType {
    commentId: number;
}

const ParentBox: React.FC<CommentProps> = props => {
    const [isLiked, setIsLiked] = useState(props.isLikedByLoginUser);
    const [isDeleted, setIsDeleted] = useState(props.isDeleted);
    const [isModifying, setIsModifying] = useState(false);
    const [likeNum, setLikeNum] = useState(props.likeCount);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);
    const { userinfo } = useAuth();
    const { communityId } = useParams();
    const menuRef = useRef<HTMLDivElement>(null);

    const { mutate } = usePatchComment({
        commentId: props.commentId,
        communityId: Number(communityId),
        userId: userinfo.userId,
    });

    const queryClient = useQueryClient();

    const profileImageUrl =
        props.hasUserProfileImageUrl || props.hasUserProfileImage
            ? `https://${props.userProfileImageUrl}`
            : profileImage;

    const menuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const replyBoxVisibility = () => {
        setIsReplyBoxVisible(!isReplyBoxVisible);
    };

    const modify = () => {
        setIsModifying(!isModifying);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    //댓글 좋아요 생성 & 삭제
    const createLike = async () => {
        const Data: LikeCreateType = {
            commentId: props.commentId,
        };

        try {
            await request<LikeCreateType, CommentId, null>({
                uri: '/api/v1/community/comment-likes',
                method: 'post',
                data: Data,
            });
            setIsLiked(!isLiked);
            setLikeNum(isLiked ? likeNum - 1 : likeNum + 1);
        } catch (error) {
            console.error(error);
        }
    };

    //댓글 soft 삭제
    const deleteComments = () => {
        mutate();
        queryClient.removeQueries({
            queryKey: [
                'get-pagiable',
                { uri: `/api/v1/user/${userinfo.userId}/posts/comment` },
            ],
        });
        setIsDeleted(true);
    };

    if (isDeleted) {
        return (
            <>
                <D.BoxWrapper>
                    {props.parentId ? (
                        <>
                            <div style={{ marginLeft: '48px' }}>
                                <p className="deleted">삭제된 댓글입니다.</p>
                            </div>
                        </>
                    ) : (
                        <p className="deleted">삭제된 댓글입니다.</p>
                    )}
                </D.BoxWrapper>
                {props.hasChildComments &&
                    props.childComments?.map(e => {
                        return (
                            <ParentBox
                                key={e.commentId}
                                isChildComment={true}
                                commentId={e.commentId}
                                parentId={e.parentId}
                                userId={e.userId}
                                userName={e.userName}
                                hasUserProfileImageUrl={
                                    e.hasUserProfileImageUrl
                                }
                                hasUserProfileImage={e.hasUserProfileImage}
                                userProfileImageUrl={e.userProfileImageUrl}
                                isLoginUserComment={e.isLoginUserComment}
                                isAuthorComment={e.isAuthorComment}
                                isLikedByLoginUser={e.isLikedByLoginUser}
                                likeCount={e.likeCount}
                                body={e.body}
                                isDeleted={e.isDeleted}
                                createdDate={e.createdDate}
                            />
                        );
                    })}
            </>
        );
    }

    return (
        <>
            <D.BoxWrapper>
                {isModifying ? (
                    <Comment
                        isChildComment={props.isChildComment}
                        isModify
                        contents={props.body}
                        id={props.commentId}
                        cancel={modify}
                    />
                ) : (
                    <>
                        <D.BoxLeft
                            style={{
                                paddingLeft: props.isChildComment
                                    ? '48px'
                                    : '0',
                            }}
                        >
                            <img
                                src={profileImageUrl}
                                alt=""
                                className="profile"
                            />
                            <div className="info">
                                <div className="wrapper">
                                    <p className="user">{props.userName}</p>
                                    {props.isAuthorComment && (
                                        <p className="author">글쓴이</p>
                                    )}
                                    <p>{props.createdDate}</p>
                                </div>
                                <p className="body">{props.body}</p>
                                <div className="wrapper">
                                    <div className="icons">
                                        {isLiked ? (
                                            <>
                                                <LikedHeartIcon
                                                    onClick={createLike}
                                                />
                                                {likeNum}
                                            </>
                                        ) : (
                                            <>
                                                <HeartIcon
                                                    onClick={createLike}
                                                />
                                                {likeNum}
                                            </>
                                        )}
                                    </div>
                                    <D.Dot2 />
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={replyBoxVisibility}
                                    >
                                        답글쓰기
                                    </div>
                                </div>
                            </div>
                        </D.BoxLeft>
                        {props.isLoginUserComment && (
                            <div className="menu" onClick={menuVisibility}>
                                <MenuIcon />
                            </div>
                        )}
                        {isMenuVisible && (
                            <D.MenuBtn ref={menuRef}>
                                <p className="btns" onClick={modify}>
                                    수정하기
                                </p>
                                <p className="btns" onClick={deleteComments}>
                                    삭제하기
                                </p>
                            </D.MenuBtn>
                        )}
                    </>
                )}
            </D.BoxWrapper>
            {isReplyBoxVisible && (
                <D.ReplyBox>
                    <Comment
                        isChildComment
                        id={props.parentId || props.commentId}
                        cancel={replyBoxVisibility}
                    />
                </D.ReplyBox>
            )}
            {props.hasChildComments &&
                props.childComments?.map(e => {
                    return (
                        <ParentBox
                            key={e.commentId}
                            isChildComment={true}
                            commentId={e.commentId}
                            parentId={e.parentId}
                            userId={e.userId}
                            userName={e.userName}
                            hasUserProfileImageUrl={e.hasUserProfileImageUrl}
                            hasUserProfileImage={e.hasUserProfileImage}
                            userProfileImageUrl={e.userProfileImageUrl}
                            isLoginUserComment={e.isLoginUserComment}
                            isAuthorComment={e.isAuthorComment}
                            isLikedByLoginUser={e.isLikedByLoginUser}
                            likeCount={e.likeCount}
                            body={e.body}
                            isDeleted={e.isDeleted}
                            createdDate={e.createdDate}
                        />
                    );
                })}
        </>
    );
};

export default ParentBox;
