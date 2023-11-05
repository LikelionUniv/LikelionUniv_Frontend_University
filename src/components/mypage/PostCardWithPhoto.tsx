import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { PostCardProp } from './type';

const PostCardWithPhoto = (props: PostCardProp) => {
    return (
        <PostCardBoxWrapper className="photo" photoTitle>
            <PostCardBox
                className="photo"
                style={{
                    backgroundImage: `url(${props.img})`,
                }}
            ></PostCardBox>
            <PostCardBox className="date">{props.date}</PostCardBox>
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
