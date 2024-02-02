import * as D from './DetailStyle';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Like from './Like';
import Comment from './Comment';
import ParentBox from './ParentBox';
import { PostComment } from './CommentData';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20_900.svg';
import { ReactComponent as CommentIconMobile } from '../../../img/community/comment16_900.svg';
import { ReactComponent as Arrow } from '../../../img/about/arrow_left.svg';
import { ReactComponent as Menu } from '../../../img/community/menu_900.svg';
import { axiosInstance } from '../../../utils/axios';
import useIsPC from '../../../hooks/useIsPC';
import DOMPurify from 'dompurify';
import useGetPostDetail from '../../../query/get/useGetPostDetail';
import useGetComment from '../../../query/get/useGetComment';
import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../../hooks/useAuth';

const CommunityDetail = () => {
    const isPC = useIsPC();
    const navigate = useNavigate();
    const { communityId } = useParams();
    const { userinfo } = useAuth();

    const { data } = useGetPostDetail({
        communityId: Number(communityId),
    });
    const { commentData } = useGetComment({
        communityId: Number(communityId),
    });
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const menuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const queryClient = useQueryClient();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const goBack = () => {
        navigate('/community');
    };

    const modifyPost = () => {
        navigate('/community/write', {
            state: {
                mod: true,
                id: `${data?.postId}`,
            },
        });
    };

    //게시글 삭제
    const deletePost = async () => {
        try {
            await axiosInstance.delete(
                `/api/v1/community/posts/${data?.postId}`,
            );
            queryClient.removeQueries({
                queryKey: [
                    'get-pagiable',
                    { uri: `/api/v1/user/${userinfo.userId}/posts/comment` },
                ],
            });
            window.location.replace('/community');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <D.Back>
                <ArrowIcon onClick={goBack} />
                {data?.isMyPost && (
                    <div className="menu">
                        <Menu onClick={menuVisibility} />
                        {isMenuVisible && (
                            <div className="btns" ref={menuRef}>
                                <p className="delete" onClick={deletePost}>
                                    삭제하기
                                </p>
                                <p className="modify" onClick={modifyPost}>
                                    수정하기
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </D.Back>
            <D.Container>
                <div className="back" onClick={goBack}>
                    <ArrowIcon /> {data.subCategory}
                </div>
                {data && (
                    <Header
                        postData={data}
                        onDeletePost={deletePost}
                        onModifyPost={modifyPost}
                    />
                )}
                <D.TextArea
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data?.body || ''),
                    }}
                />
                {data && <Like postData={data} />}
                <div className="count">
                    {isPC ? <CommentIcon /> : <CommentIconMobile />} 댓글
                    <p style={{ color: '#ff7710' }}>{data.commentCount}</p>
                </div>
                {data && <Comment id={data.postId} />}
                <div
                    className="empty"
                    style={{
                        borderBottom:
                            commentData && commentData.length > 0
                                ? '1px solid #EAECEE'
                                : '1px solid transparent',
                    }}
                >
                    {commentData?.map((e: PostComment) => {
                        return (
                            <ParentBox
                                key={e.commentId}
                                commentId={e.commentId}
                                userId={e.userId}
                                userName={e.userName}
                                hasUserProfileImageUrl={
                                    e.hasUserProfileImageUrl
                                }
                                hasUserProfileImage={e.hasUserProfileImage}
                                userProfileImageUrl={e.userProfileImageUrl}
                                isLoginUserComment={e.isLoginUserComment}
                                isAuthorComment={e.isAuthorComment}
                                isLikedByLoginUser={e.isLikedByLoginUser}
                                likeCount={e.likeCount}
                                body={e.body}
                                isDeleted={e.isDeleted}
                                createdDate={e.createdDate}
                                hasChildComments={e.hasChildComments}
                                childComments={e.childComments}
                            />
                        );
                    })}
                </div>
                {isPC && (
                    <a href="/community" className="link">
                        <Arrow />
                        목록으로 돌아가기
                    </a>
                )}
            </D.Container>
        </div>
    );
};

export default CommunityDetail;
