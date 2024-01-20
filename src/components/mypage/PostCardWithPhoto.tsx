import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType } from './type';
import PostModal from './PostModal';
import { useLocation, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { usePostLike } from '../../api/mypage/usePostLike';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/user';

const PostCardWithPhoto = (props: MypagePostCardPropType) => {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const user = useRecoilValue(userState);
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
        <PostCardBoxWrapper
            className="photo"
            phototitle="true"
            onClick={() => navigate(`/community/${props.id}`)}
        >
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
                    <PostModal id={props.id} />
                ) : null}
            </PostCardBox>
            <PostCardBox className="title" phototitle="true">
                {props.title}
            </PostCardBox>
            <PostCardBox
                className="content"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(props.body),
                }}
            />
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

export default PostCardWithPhoto;
