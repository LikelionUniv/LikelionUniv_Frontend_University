import * as D from './DetailStyle';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Like from './Like';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import Comment from './Comment';
import ParentBox from './ParentBox';
import { Post, PostComment } from './CommentData';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20_900.svg';
import { ReactComponent as CommentIconMobile } from '../../../img/community/comment16_900.svg';
import { useState } from 'react';
import { axiosInstance } from '../../../utils/axios';
import useIsPC from '../../../hooks/useIsPC';
import { ReactComponent as Arrow } from '../../../img/about/arrow_left.svg';
import { ReactComponent as Menu } from '../../../img/community/menu_900.svg';
import DOMPurify from 'dompurify';


const CommunityDetail = () => {
  const isPC = useIsPC();
  const navigate = useNavigate();
  const [postData, setPostData] = useState<Post | null>(null);
  const [commentData, setCommentData] = useState<PostComment[] | null>(null);
  const [commentUpdate, setCommentUpdate] = useState(false);
  
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
        console.log(response.data.data);
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
          console.log(response.data.data);
          setPostData(response.data.data)
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
    navigate(-1);
  }


  return (
    <div style={{display:'flex', flexDirection: 'column', width: '100%'}}>
      <D.Back onClick={goBack}>
        <ArrowIcon/> 
        <div className='menu'><Menu/></div>
      </D.Back>
    <D.Container>
        <div className='back' onClick={goBack}>
            <ArrowIcon/> {postData?.subCategory}
        </div>
        {postData && <Header postData={postData}/>}
        <D.TextArea dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(postData?.body || '' )}}/>
        {postData && <Like postData={postData}/>}
        <div className='count'>
          {isPC ? <CommentIcon /> : <CommentIconMobile />} 댓글
            <p style={{color: '#ff7710'}}>{postData?.commentCount}</p>
        </div>
        {postData && <Comment id={postData.postId} onCommentUpdate={handleCommentUpdate}/>}
        <div 
          className='empty'
          style={{borderBottom: commentData && commentData.length > 0 ? '1px solid #EAECEE' : '1px solid transparent'}}>
        {commentData?.map((e:PostComment) => {
          return (
            <ParentBox key={e.commentId}
            commentId= {e.commentId}
            userId = {e.userId}
            userName = {e.userName}
            hasUserProfileImageUrl ={e.hasUserProfileImageUrl}
            userProfileImageUrl ={e.userProfileImageUrl}
            isLoginUserComment = {e.isLoginUserComment}
            isAuthorComment ={e.isAuthorComment}
            isLikedByLoginUser ={e.isLikedByLoginUser}
            likeCount ={e.likeCount}
            body ={e.body}
            isDeleted ={e.isDeleted}
            createdDate ={e.createdDate}
            hasChildComments ={e.hasChildComments}
            childComments ={e.childComments}
            onCommentUpdate={handleCommentUpdate}
            />
          )
        })}
        </div>
        {isPC && (<a href="/community" className="link">
            <Arrow/>
            목록으로 돌아가기
        </a>)}
    </D.Container>
    </div>
  )
}

export default CommunityDetail;
