import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/user';
import useServerSidePagination from '../../query/get/useServerSidePagination';
import { MypagePostCardPropType } from './type';
import { PostBoxWrapper } from './UserPostSelect';
import EmptyBox from './EmptyBox';
import PostCard from './PostCard';
import PostCardWithPhoto from './PostCardWithPhoto';
import { PaginationWrapper } from '../project/ProjectList.style';

const PostSelect = ({ select }: { select: string }) => {
    const location = useLocation().pathname;
    const params = useParams();
    const user = useRecoilValue(userState);
    const user_id =
        location.includes('userpage') && params.user_id !== undefined
            ? parseInt(params.user_id)
            : user.userId;
    const {
        curPageItem: posts,
        renderPaginationBtn,
        pageNum,
    } = useServerSidePagination<MypagePostCardPropType>({
        uri:
            select === '게시글'
                ? `/api/v1/user/${user_id}/posts`
                : `/api/v1/user/${user_id}/posts/comment`,
        size: 6,
    });
    return (
        <>
            <PostBoxWrapper>
                {Array.isArray(posts) && posts.length !== 0 ? (
                    posts.map(e => {
                        if (e.thumbnail !== null) {
                            return (
                                <PostCardWithPhoto
                                    key={e.id}
                                    id={e.id}
                                    isAuthor={e.isAuthor}
                                    thumbnail={e.thumbnail}
                                    title={e.title}
                                    createdDate={e.createdDate}
                                    body={e.body}
                                    likeCount={e.likeCount}
                                    commentCount={e.commentCount}
                                    isLiked={e.isLiked}
                                    type={select}
                                    currentPage={pageNum}
                                />
                            );
                        } else {
                            return (
                                <PostCard
                                    key={e.id}
                                    id={e.id}
                                    isAuthor={e.isAuthor}
                                    isLiked={e.isLiked}
                                    thumbnail={e.thumbnail}
                                    title={e.title}
                                    createdDate={e.createdDate}
                                    body={e.body}
                                    likeCount={e.likeCount}
                                    commentCount={e.commentCount}
                                    type={select}
                                    currentPage={pageNum}
                                />
                            );
                        }
                    })
                ) : (
                    <EmptyBox name={select} />
                )}
            </PostBoxWrapper>
            <PaginationWrapper>{renderPaginationBtn()}</PaginationWrapper>
        </>
    );
};

export default PostSelect;
