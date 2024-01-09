import * as D from './DetailStyle';
import Header from './Header';
import Like from './Like';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import Comment from './Comment';
import ParentBox from './ParentBox';
import { CommentData as data } from './CommentData';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20_900.svg';

const CommunityDetail = () => {
    return (
        <D.Container>
            <div className="back">
                <ArrowIcon /> 플젝 모집
            </div>
            <Header />
            <D.TextArea>{data[0].post.body}</D.TextArea>
            <Like />
            <div className="count">
                <CommentIcon /> 댓글
                <p style={{ color: '#ff7710' }}>{data[0].post.commentCount}</p>
            </div>
            <Comment />
            {data[0].comments.map(e => {
                return (
                    <ParentBox
                        key={e.commentId}
                        commentId={e.commentId}
                        userId={e.userId}
                        userName={e.userName}
                        hasUserProfileImageUrl={e.hasUserProfileImageUrl}
                        userProfileImageUrl={e.userProfileImageUrl}
                        isLoginUserComment={e.isLoginUserComment}
                        isAuthorComment={e.isAuthorComment}
                        isLikedComment={e.isLikedComment}
                        likeCount={e.likeCount}
                        body={e.body}
                        isDeleted={e.isDeleted}
                        createdDate={e.createdDate}
                        hasChildComments={e.hasChildComments}
                        childComments={e.childComments}
                    />
                );
            })}
        </D.Container>
    );
};

export default CommunityDetail;
