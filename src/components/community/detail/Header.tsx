import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as D from './DetailStyle';
import profileImage from '../../../img/community/profile.svg';
import { Post} from './CommentData';
import { ReactComponent as HeartIcon } from '../../../img/community/heart20.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20.svg';
import { ReactComponent as HeartIconMobile } from '../../../img/community/heart16_mob.svg'; // Replace with your mobile icon
import { ReactComponent as CommentIconMobile } from '../../../img/community/comment16_mob.svg';
import { axiosInstance } from '../../../utils/axios';
import useIsPC from '../../../hooks/useIsPC';

interface HeaderProps {
    postData: Post;
}
const Header: React.FC<HeaderProps> = ({postData}) => {
    const isPC = useIsPC();
    const navigate = useNavigate();
    const [isFollowed, setIsFollowed] = useState(postData.isFollowedAuthor);
    const isMyPost = postData.isMyPost;
    const profileImageUrl = postData.hasAuthorProfileImageUrl ? postData.authorProfileImageUrl : profileImage;

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


    const goModify = () => {
        navigate('/community/write', {
            state: {
              title: `${postData.title}`,
              main: `${postData.mainCategory}`,
              sub: `${postData.subCategory}`,
              body: `${postData.body}`,
              mod: true,
              id: `${postData.postId}`
            }
          });
    }

    const deletePost = async() => {
        try {
            const response = await axiosInstance.delete(`/api/v1/community/posts/${postData.postId}`); 
            navigate(-1)
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
                            <p className="delete" onClick={deletePost}>삭제하기</p>
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
