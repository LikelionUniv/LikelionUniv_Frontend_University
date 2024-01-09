import * as D from './DetailStyle';
import React, { useState } from 'react';
import profileImage from '../../../img/community/profile.svg';
import { ReactComponent as HeartIcon } from '../../../img/community/heart16.svg';
import { ReactComponent as MenuIcon } from '../../../img/community/menu.svg';
import Comment from './Comment';

interface CommentProps {
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
    childComments?: CommentProps[];
    parentId?: number;
    isChildComment?: boolean;
}

const ParentBox: React.FC<CommentProps> = props => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isReplyBoxVisible, setIsReplyBoxVisible] = useState(false);

    const menuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const replyBoxVisibility = () => {
        setIsReplyBoxVisible(!isReplyBoxVisible);
    };

    return (
        <>
            <D.BoxWrapper>
                <D.BoxLeft
                    style={{ paddingLeft: props.isChildComment ? '48px' : '0' }}
                >
                    <img src={profileImage} alt="" className="profile" />
                    <div className="info">
                        <div className="wrapper">
                            <p className="user">{props.userName}</p>
                            {props.isAuthorComment && (
                                <p className="author">글쓴이</p>
                            )}
                            <p>2023. 07. 18</p>
                        </div>
                        <p className="body">{props.body}</p>
                        <div className="wrapper">
                            <div className="icons">
                                <HeartIcon />4
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
                    <D.MenuBtn>
                        <p className="btns">수정하기</p>
                        <p className="btns">삭제하기</p>
                    </D.MenuBtn>
                )}
            </D.BoxWrapper>
            {isReplyBoxVisible && (
                <D.ReplyBox>
                    <Comment />
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
                            userProfileImageUrl={e.userProfileImageUrl}
                            isLoginUserComment={e.isLoginUserComment}
                            isAuthorComment={e.isAuthorComment}
                            isLikedComment={e.isLikedComment}
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
