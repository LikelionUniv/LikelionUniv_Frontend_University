import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { PostCardPropType } from './type';
import PostModal from './PostModal';

const PostCardWithPhoto = (props: PostCardPropType) => {
    return (
        <PostCardBoxWrapper className="photo" photoTitle>
            <PostCardBox
                className="photo"
                style={{
                    backgroundImage: `url(${props.img})`,
                }}
            ></PostCardBox>
            <PostCardBox className="date">
                <div>{props.date}</div>
                {props.type === '게시글' ? <PostModal /> : null}
            </PostCardBox>
            <PostCardBox className="title" photoTitle>
                {props.title}
            </PostCardBox>
            <PostCardBox className="content" photoTitle>
                {props.content}
            </PostCardBox>
            <PostCardBox className="nav">
                <div className="wrapper">
                    <div className="heart" />
                    <div>{props.like}</div>
                </div>
                <div className="wrapper">
                    <div className="comment" />
                    <div>{props.comment}</div>
                </div>
            </PostCardBox>
        </PostCardBoxWrapper>
    );
};

export default PostCardWithPhoto;
