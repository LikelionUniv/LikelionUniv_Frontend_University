import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType } from './type';
import PostModal from './PostModal';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePostLike } from '../../api/mypage/usePostLike';
import DOMPurify from 'dompurify';

const PostCard = (props: MypagePostCardPropType) => {
    const navigate = useNavigate();
    const [heart, setHeart] = useState(true);
    const location = useLocation().pathname;
    const { mutate } = usePostLike({
        postId: props.id,
    });
    const heartControl = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        mutate();
        setHeart(!heart);
    };

    return (
        //Wrapper에다가 PageRouting 기능 추가하면 완료
        <PostCardBoxWrapper onClick={() => navigate(`/community/${props.id}`)}>
            <PostCardBox className="date">
                <div>{props.createdDate}</div>
                {props.type === '게시글' &&
                props.isAuthor === true &&
                location.includes('mypage') ? (
                    <PostModal id={props.id} />
                ) : null}
            </PostCardBox>
            <PostCardBox className="title">{props.title}</PostCardBox>

            <PostCardBox
                className="content"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(props.body),
                }}
            />
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
                    <div>{heart ? props.likeCount : props.likeCount - 1}</div>
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
