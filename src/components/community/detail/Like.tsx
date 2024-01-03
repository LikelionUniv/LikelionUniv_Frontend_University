import { useState } from 'react';
import * as D from './DetailStyle';
import { Post } from './CommentData';
import { ReactComponent as UnlikedIcon } from '../../../img/community/unliked.svg';
import { ReactComponent as LikedIcon } from '../../../img/community/liked.svg';

interface LikeProps {
    postData: Post;
}


const Like:React.FC<LikeProps> = ({postData}) => {
    const [isLiked, setIsLiked] = useState(false);
    const [hovering, setHovering] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <D.Like>
            <div
                className={`likeBtn ${isLiked ? 'liked' : ''}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={toggleLike}
            >
                {isLiked || hovering ? (
                    <><LikedIcon /> 좋아요 {postData.likeCount}</>
                ) : (
                    <><UnlikedIcon /> 좋아요 {postData.likeCount}</>
                )}
            </div>
        </D.Like>
    );
};

export default Like;
