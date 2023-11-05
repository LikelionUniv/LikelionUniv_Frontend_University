import { PostCardBox, PostCardBoxWrapper } from './PostCardStyle';
import { PostCardProp } from './type';

const PostCard = (props: PostCardProp) => {
    return (
        //Wrapper에다가 PageRouting 기능 추가하면 완료
        <PostCardBoxWrapper>
            <PostCardBox className="date">{props.date}</PostCardBox>
            <PostCardBox className="title">{props.title}</PostCardBox>
            <PostCardBox className="content">{props.content}</PostCardBox>
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

export default PostCard;
