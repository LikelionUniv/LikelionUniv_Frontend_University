import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType } from './type';
import PostModal from './PostModal';
import { useState } from 'react';

const PostCard = (props: MypagePostCardPropType) => {
    const [heart, setHeart] = useState(true);
    return (
        //Wrapper에다가 PageRouting 기능 추가하면 완료
        <PostCardBoxWrapper>
            <PostCardBox className="date">
                <div>{props.createdDate}</div>
                {props.type === '게시글' && props.isAuthor === true ? (
                    <PostModal />
                ) : null}
            </PostCardBox>
            <PostCardBox className="title">{props.title}</PostCardBox>
            <PostCardBox className="content">{props.body}</PostCardBox>
            <PostCardBox className="nav">
                <div className="wrapper">
                    {props.type === '좋아요' && heart ? (
                        <div
                            className="likeheart"
                            onClick={() => setHeart(!heart)}
                        />
                    ) : (
                        <div
                            className="heart"
                            onClick={() => setHeart(!heart)}
                        />
                    )}
                    <div>{props.likeCount}</div>
                </div>
                <div className="wrapper">
                    <div className="comment" />
                    <div>{props.commentCount}</div>
                </div>
            </PostCardBox>
        </PostCardBoxWrapper>
    );
};

export default PostCard;
