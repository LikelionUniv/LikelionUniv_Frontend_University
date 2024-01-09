import { useState } from 'react';
import * as D from './DetailStyle';
import { CommentData as data } from './CommentData';
import { ReactComponent as UnlikedIcon } from '../../../img/community/unliked.svg';
import { ReactComponent as LikedIcon } from '../../../img/community/liked.svg';

const Like = () => {
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
                    <>
                        <LikedIcon /> 좋아요 {data[0].post.likeCount}
                    </>
                ) : (
                    <>
                        <UnlikedIcon /> 좋아요 {data[0].post.likeCount}
                    </>
                )}
            </div>
        </D.Like>
    );
};

export default Like;
