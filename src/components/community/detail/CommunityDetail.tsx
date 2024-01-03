import * as D from './DetailStyle';
import { useEffect } from 'react';
import Header from './Header';
import Like from './Like';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import Comment from './Comment';
import ParentBox from './ParentBox';
import { Post, PostComment } from './CommentData';
import { ReactComponent as CommentIcon } from '../../../img/community/comment20_900.svg';
import { useState } from 'react';
import { axiosInstance } from '../../../utils/axios';


const CommunityDetail = () => {
  const [postData, setPostData] = useState<Post | null>(null);
  const [commentData, setCommentData] = useState<PostComment[] | null>(null);

  //댓글 조회
  const fetchComments = async () => {
    const path = window.location.pathname;
    const pathParts = path.split('/');
    const communityId = pathParts[pathParts.length - 1];
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJMaWtlbGlvblVuaXYiLCJzdWIiOiIyIiwiaWF0IjoxNzAyOTk5NDYzLCJleHAiOjE3MDQyMDkwNjMsInR5cGUiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJHVUVTVCJ9.c6ijvuhIluD_PWw8S8xGT-2IO5uAvO-_fd30RqNalTj43fny99ieQEn5yrZLXTa4qw-Ln_S-iZ1VoCgfwLi4Ig'
    try {
        const response = await axiosInstance.get(`/api/v1/community/comments?postId=${communityId}`,{headers: {Authorization : `Bearer ${token}`}}); 
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
      const token = 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJMaWtlbGlvblVuaXYiLCJzdWIiOiIyIiwiaWF0IjoxNzAyOTk5NDYzLCJleHAiOjE3MDQyMDkwNjMsInR5cGUiOiJBY2Nlc3NUb2tlbiIsInJvbGUiOiJHVUVTVCJ9.c6ijvuhIluD_PWw8S8xGT-2IO5uAvO-_fd30RqNalTj43fny99ieQEn5yrZLXTa4qw-Ln_S-iZ1VoCgfwLi4Ig'
      try {
          const response = await axiosInstance.get(`/api/v1/community/posts/${communityId}`,{headers: {Authorization : `Bearer ${token}`}}); 
          console.log(response.data.data);
          setPostData(response.data.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchComments();
  }, []);

  


  return (
    <D.Container>
        <div className='back'>
            <ArrowIcon/> 플젝 모집
        </div>
        {postData && <Header postData={postData}/>}
        <D.TextArea>
          {postData?.body}
        </D.TextArea>
        {postData && <Like postData={postData}/>}
        <div className='count'>
            <CommentIcon/> 댓글
            <p style={{color: '#ff7710'}}>{postData?.commentCount}</p>
        </div>
        {postData && <Comment id={postData.postId} />}
        <div style={{marginTop:'32px'}}>
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
            />
          )
        })}
        </div>
    </D.Container>
  )
}

export default CommunityDetail;
