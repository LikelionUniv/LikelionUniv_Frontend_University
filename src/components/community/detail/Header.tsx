import { useState } from 'react';
import * as D from './DetailStyle';
import { Post} from './CommentData';
import profileImage from '../../../img/community/profile.svg';
import { ReactComponent as HeartIcon } from '../../../img/community/heart20.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20.svg';
import { ReactComponent as HeartIconMobile } from '../../../img/community/heart16_mob.svg';
import { ReactComponent as CommentIconMobile } from '../../../img/community/comment16_mob.svg';
import { axiosInstance } from '../../../utils/axios';
import useIsPC from '../../../hooks/useIsPC';

interface HeaderProps {
    postData: Post;
    onDeletePost: () => void;
    onModifyPost: () => void;
}
const Header: React.FC<HeaderProps> = ({postData, onDeletePost, onModifyPost}) => {
    const isPC = useIsPC();
    const [isFollowed, setIsFollowed] = useState(postData.isFollowedAuthor);
    const isMyPost = postData.isMyPost;
    const profileImageUrl = postData.hasAuthorProfileImageUrl ? postData.authorProfileImageUrl : profileImage;

    //팔로우 기능
    const handleFollow = async () => {
        try {
            if (isFollowed) {
                await axiosInstance.delete(`/api/v1/follow/${postData.authorId}`);
            } else {
                await axiosInstance.post(`/api/v1/follow/${postData.authorId}`);
            }
            setIsFollowed(!isFollowed);
        } catch (error) {
            console.error(error);
        }
    };

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
                                    onClick={handleFollow}
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
                        {isPC ? <HeartIcon /> : <HeartIconMobile />}
                        {postData.likeCount}
                    </div>
                    <div className='icons'>
                        {isPC ? <CommentIcon /> : <CommentIconMobile />}
                        {postData.commentCount}
                    </div>
                    {isMyPost && (
                        <div className="btns">
                            <p className="delete" onClick={onDeletePost}>삭제하기</p>
                            <p className="modify" onClick={onModifyPost}>수정하기</p>
                        </div>
                    )}
                </div>
            </D.User>
        </>
    );
};

export default Header;
