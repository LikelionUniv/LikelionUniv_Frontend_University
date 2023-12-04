import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { MypagePostCardPropType, PostCardPropType } from './type';
import PostModal from './PostModal';

const PostCardWithPhoto = (props: MypagePostCardPropType) => {
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
                {props.type === '게시글' && props.isAuthor === true ? (
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
                    {props.type === '좋아요' ? (
                        <div
                            className="likeheart"
                            onClick={() => alert('좋아요 취소 기능')}
                        />
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
