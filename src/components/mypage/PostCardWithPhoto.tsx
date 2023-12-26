import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType } from './type';
import PostModal from './PostModal';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const PostCardWithPhoto = (props: MypagePostCardPropType) => {
    const [heart, setHeart] = useState(true);
    const location = useLocation().pathname;
    const heartControl = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        setHeart(!heart);
    };
    return (
        <PostCardBoxWrapper className="photo" photoTitle>
            <PostCardBox
                className="photo"
                style={{
                    backgroundImage: `url(${props.thumbnail})`,
                }}
            ></PostCardBox>
            <PostCardBox className="date">
                <div>{props.createdDate}</div>
                {props.type === '게시글' &&
                props.isAuthor === true &&
                location.includes('mypage') ? (
                    <PostModal />
                ) : null}
            </PostCardBox>
            <PostCardBox className="title" photoTitle>
                {props.title}
            </PostCardBox>
            <PostCardBox className="content" photoTitle>
                {props.body}
            </PostCardBox>
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

export default PostCardWithPhoto;
