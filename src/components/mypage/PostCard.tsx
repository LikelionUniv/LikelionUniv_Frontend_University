import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType } from './type';
import PostModal from './PostModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePostLike } from '../../api/mypage/usePostLike';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
const PostCard = (props: MypagePostCardPropType) => {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const { userinfo: user } = useAuth();
    const [showMore, setShowMore] = useState(false);
    const textElement = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const height = textElement.current!.offsetHeight;
        const lineheight = parseFloat(
            getComputedStyle(textElement.current!).lineHeight,
        );
        const lines = Math.floor(height / lineheight);
        if (lines > 4) {
            setShowMore(true);
        }
    }, []);
    const { mutate } = usePostLike({
        postId: props.id,
        user_id: user.userId,
        currentPage: props.currentPage,
    });
    const heartControl = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        if (window.confirm(`해당 게시글의 좋아요를 취소하시겠습니까?`)) {
            mutate();
        } else {
            return;
        }
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
            <PostCardBox className="content" ref={textElement}>
                {props.body}
                {showMore && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        더보기
                    </div>
                )}
            </PostCardBox>
            <PostCardBox className="nav">
                <div className="wrapper">
                    {props.type === '좋아요' && location.includes('mypage') ? (
                        props.isLiked === true ? (
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
