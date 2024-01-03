import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './DetailStyle';
import profileImage from '../../../img/community/profile.svg';
import { Post} from './CommentData';
import { ReactComponent as HeartIcon } from '../../../img/community/heart20.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20.svg';

interface HeaderProps {
    postData: Post;
}
const Header: React.FC<HeaderProps> = ({postData}) => {
    const navigate = useNavigate();
    const [isFollowed, setIsFollowed] = useState(postData.isFollowedAuthor);
    const isMyPost = postData.isMyPost;
    const profileImageUrl = postData.hasAuthorProfileImageUrl ? postData.authorProfileImageUrl : profileImage;

    const toggleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    const goModify = () => {
        navigate('/community/write', {
            state: {
              title: `${postData.title}`,
              main: `자유게시판`,
              sub: `플젝모집`,
              body: `${postData.body}`
            }
          });
    }

    return (
        <>
            <D.Title>
                {postData.title}
            </D.Title>
            <D.User>
                <div className="left">
                    <img src={profileImageUrl} alt="" className="image" />
                    <div>
                        <div className='userBox'>
                            <p className='name'>{postData.authorName}</p>
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
                        <div className='userInfo'>
                            <p>{postData.authorOrdinal}기</p><D.Dot />
                            <p>{postData.universityName}</p><D.Dot />
                            <p>{postData.createdDate}</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='icons'>
                        <HeartIcon />{postData.likeCount}
                    </div>
                    <div className='icons'>
                        <CommentIcon />{postData.commentCount}
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
