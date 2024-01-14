import { useState } from 'react';
import * as D from './DetailStyle';
import { Post } from './CommentData';
import { ReactComponent as UnlikedIcon } from '../../../img/community/unliked.svg';
import { ReactComponent as LikedIcon } from '../../../img/community/liked.svg';
import request from '../../../utils/request';

interface LikeProps {
    postData: Post;
}

interface LikeCreateType {
    postId: number;
}

const Like:React.FC<LikeProps> = ({postData}) => {
    const [isLiked, setIsLiked] = useState(postData.isLikedPost);
    const [hovering, setHovering] = useState(false);
    const [likeNum, setLikeNum] = useState(postData.likeCount);

    // 좋아요 생성 & 삭제
    const createLike = async () => {

        const Data: LikeCreateType = {
            postId: postData.postId,
        };

        try {
            await request<LikeCreateType, null, null>({
                uri: '/api/v1/community/post-likes',
                method: 'post',
                data: Data
            });
            setIsLiked(!isLiked); 
            setLikeNum(isLiked ? likeNum - 1 : likeNum + 1); 
    
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <D.Like>
            <div
                className={`likeBtn ${isLiked ? 'liked' : ''}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={createLike}
            >
                {isLiked || hovering ? (
                    <><LikedIcon /> 좋아요 {likeNum}</>
                ) : (
                    <><UnlikedIcon /> 좋아요 {likeNum}</>
                )}
            </div>
        </D.Like>
    );
};

export default Like;
