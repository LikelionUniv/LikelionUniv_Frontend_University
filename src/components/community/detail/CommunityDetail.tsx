import * as D from './DetailStyle';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Like from './Like';
import Comment from './Comment';
import ParentBox from './ParentBox';
import { Post, PostComment } from './CommentData';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20_900.svg';
import { ReactComponent as CommentIconMobile } from '../../../img/community/comment16_900.svg';
import { ReactComponent as Arrow } from '../../../img/about/arrow_left.svg';
import { ReactComponent as Menu } from '../../../img/community/menu_900.svg';
import { axiosInstance } from '../../../utils/axios';
import useIsPC from '../../../hooks/useIsPC';
import DOMPurify from 'dompurify';

const CommunityDetail = () => {
  const isPC = useIsPC();
  const navigate = useNavigate();
  const [postData, setPostData] = useState<Post | null>(null);
  const [commentData, setCommentData] = useState<PostComment[] | null>(null);
  const [commentUpdate, setCommentUpdate] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    fetchComments();
  }, [commentUpdate]);

  //댓글 조회
  const fetchComments = async () => {
    const path = window.location.pathname;
    const pathParts = path.split('/');
    const communityId = pathParts[pathParts.length - 1];
    try {
      const response = await axiosInstance.get(`/api/v1/community/comments?postId=${communityId}`);
      setCommentData(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  //게시글 조회
  useEffect(() => {
    const fetchData = async () => {
      const path = window.location.pathname;
      const pathParts = path.split('/');
      const communityId = pathParts[pathParts.length - 1];
      try {
        const response = await axiosInstance.get(`/api/v1/community/posts/${communityId}`);
        setPostData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchComments();
  }, []);

  const handleCommentUpdate = () => {
    setCommentUpdate(prev => !prev);
  };

  const goBack = () => {
    navigate('/community');
  }

  const modifyPost = () => {
    navigate('/community/write', {
      state: {
        mod: true,
        id: `${postData?.postId}`
      }
    });
  }

  //게시글 삭제
  const deletePost = async () => {
    try {
      await axiosInstance.delete(`/api/v1/community/posts/${postData?.postId}`);
      window.location.replace("/community");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <D.Back>
        <ArrowIcon onClick={goBack} />
        {postData?.isMyPost && (
          <div className='menu'>
            <Menu onClick={menuVisibility} />
            {isMenuVisible && (
              <div className="btns" ref={menuRef}>
                <p className="delete" onClick={deletePost}>삭제하기</p>
                <p className="modify" onClick={modifyPost}>수정하기</p>
              </div>
            )}
          </div>
        )}
      </D.Back>
      <D.Container>
        <div className='back' onClick={goBack}>
          <ArrowIcon /> {postData?.subCategory}
        </div>
        {postData && (
          <Header
            postData={postData}
            onDeletePost={deletePost}
            onModifyPost={modifyPost}
          />
        )}
        <D.TextArea dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(postData?.body || '')}} />
        {postData && <Like postData={postData} />}
        <div className='count'>
          {isPC ? <CommentIcon /> : <CommentIconMobile />} 댓글
          <p style={{ color: '#ff7710' }}>{postData?.commentCount}</p>
        </div>
        {postData && (
          <Comment id={postData.postId} onCommentUpdate={handleCommentUpdate} />
        )}
        <div
          className='empty'
          style={{
            borderBottom: commentData && commentData.length > 0
              ? '1px solid #EAECEE'
              : '1px solid transparent'
          }}
        >
          {commentData?.map((e: PostComment) => {
            return (
              <ParentBox key={e.commentId}
                commentId={e.commentId}
                userId={e.userId}
                userName={e.userName}
                hasUserProfileImageUrl={e.hasUserProfileImageUrl}
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
                onCommentUpdate={handleCommentUpdate}
              />
            )
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
  )
}

export default CommunityDetail;
