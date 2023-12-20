import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType } from './type';
import PostModal from './PostModal';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PostCard = (props: MypagePostCardPropType) => {
    const [heart, setHeart] = useState(true);
    const location = useLocation().pathname;
    const heartControl = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        setHeart(!heart);
        console.log(heart);
    };
    return (
        //Wrapper에다가 PageRouting 기능 추가하면 완료
        <PostCardBoxWrapper onClick={() => alert('이동하기')}>
            <PostCardBox className="date">
                <div>{props.createdDate}</div>
                {props.type === '게시글' &&
                props.isAuthor === true &&
                location.includes('mypage') ? (
                    <PostModal />
                ) : null}
            </PostCardBox>
            <PostCardBox className="title">{props.title}</PostCardBox>
            <PostCardBox className="content">{props.body}</PostCardBox>
            <PostCardBox className="nav">
                <div className="wrapper">
                    {props.type === '좋아요' && location.includes('mypage') ? (
                        heart ? (
                            <div className="likeheart" onClick={heartControl} />
                        ) : (
                            <div className="heart" onClick={heartControl} />
                        )
                    ) : (
                        <div className="heart" />
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
