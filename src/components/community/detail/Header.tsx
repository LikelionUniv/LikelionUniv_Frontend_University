import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './DetailStyle';
import profileImage from '../../../img/community/profile.svg';
import { CommentData as data } from './CommentData';
import { ReactComponent as HeartIcon } from '../../../img/community/heart20.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20.svg';

const Header = () => {
    const navigate = useNavigate();
    const [isFollowed, setIsFollowed] = useState(data[0].post.isFollowedAuthor);
    const isMyPost = data[0].post.isMyPost;
    const profileImageUrl = data[0].post.hasAuthorProfileImageUrl
        ? data[0].post.authorProfileImageUrl
        : profileImage;

    const toggleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    const goModify = () => {
        navigate('/community/write', {
            state: {
                title: `${data[0].post.title}`,
                main: `자유게시판`,
                sub: `플젝모집`,
                body: `${data[0].post.body}`,
            },
        });
    };

    return (
        <>
            <D.Title>{data[0].post.title}</D.Title>
            <D.User>
                <div className="left">
                    <img src={profileImageUrl} alt="" className="image" />
                    <div>
                        <div className="userBox">
                            <p className="name">{data[0].post.authorName}</p>
                            {!isMyPost && (
                                <div
                                    className={`followBtn ${
                                        isFollowed ? 'followed' : ''
                                    }`}
                                    onClick={toggleFollow}
                                >
                                    {isFollowed ? (
                                        <span>팔로잉</span>
                                    ) : (
                                        <span>팔로우</span>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="userInfo">
                            <p>{data[0].post.authorOrdinal}기</p>
                            <D.Dot />
                            <p>{data[0].post.universityName}</p>
                            <D.Dot />
                            <p>2023. 7. 18</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="icons">
                        <HeartIcon />
                        {data[0].post.likeCount}
                    </div>
                    <div className="icons">
                        <CommentIcon />
                        {data[0].post.commentCount}
                    </div>
                    {isMyPost && (
                        <div className="btns">
                            <p className="delete">삭제하기</p>
                            <p className="modify" onClick={goModify}>
                                수정하기
                            </p>
                        </div>
                    )}
                </div>
            </D.User>
        </>
    );
};

export default Header;
