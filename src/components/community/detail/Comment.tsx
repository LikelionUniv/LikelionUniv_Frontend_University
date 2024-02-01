import * as D from './DetailStyle';
import { useRef, useCallback, useState } from 'react';
import request from '../../../utils/request';
import { useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../../hooks/useAuth';

export interface RegBtnProps {
    inputEmpty: boolean;
}

interface CommentId {
    commentId: number;
}

interface CommentRegisterType {
    body: string;
}

interface CommentParams {
    postId: number;
}

interface CommentProps {
    contents?: string;
    isChildComment?: boolean;
    isModify?: boolean;
    id: number;
    cancel?: () => void;
    onCommentUpdate: () => void;
}

const Comment: React.FC<CommentProps> = ({
    onCommentUpdate,
    contents,
    isChildComment = false,
    isModify = false,
    id,
    cancel,
}) => {
    const [inputValue, setInputValue] = useState<string>(contents || '');
    const textRef = useRef<HTMLTextAreaElement>(null);
    const queryClient = useQueryClient();
    const { userinfo, isLoading } = useAuth();
    const handleResizeHeight = useCallback(() => {
        const textarea = textRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);

    const commentData: CommentRegisterType = {
        body: inputValue,
    };

    //댓글 생성
    const commentSubmit = async () => {
        const commentParams: CommentParams = {
            postId: id,
        };

        await request<CommentRegisterType, CommentId, CommentParams>({
            uri: '/api/v1/community/comments/parent',
            method: 'post',
            data: commentData,
            params: commentParams,
        });
        onCommentUpdate();
        setInputValue('');

        queryClient.invalidateQueries({
            queryKey: ['get-pagiable', { uri: `/api/v1/user/${userinfo.userId}/posts/comment` }],
        });
        queryClient.invalidateQueries({
            queryKey: ['get-pagiable', { uri: `/api/v1/community/posts` }],
        });
    };

    //대댓글 생성
    const childCommentSubmit = async () => {
        await request<CommentRegisterType, CommentId, null>({
            uri: `/api/v1/community/comments/${id}/child`,
            method: 'post',
            data: commentData,
        });
        queryClient.invalidateQueries({
            queryKey: ['get-pagiable', { uri: `/api/v1/user/${userinfo.userId}/posts/comment` }],
        });
        queryClient.invalidateQueries({
            queryKey: ['get-pagiable', { uri: `/api/v1/community/posts` }],
        });
        window.location.reload();
    };

    //댓글, 대댓글 수정
    const modify = async () => {
        await request<CommentRegisterType, CommentId, null>({
            uri: `/api/v1/community/${id}`,
            method: 'patch',
            data: commentData,
        });
        queryClient.invalidateQueries({
            queryKey: ['get-pagiable', { uri: `/api/v1/user/${userinfo.userId}/posts/comment` }],
        });
        window.location.reload();
    };

    //등록 or 수정
    const handleSubmit = () => {
        if (inputValue.trim() === '') {
            return;
        }
        
        if (isChildComment && !isModify) {
            childCommentSubmit();
        } else if (
            (isModify && isChildComment) ||
            (isModify && !isChildComment)
        ) {
            modify();
        } else {
            commentSubmit();
        }
    };

    return (
        <D.CommentWrapper isChildComment={isChildComment} isModify={isModify}>
            <D.WriteComment
                borderColor={inputValue !== '' ? '#FF7710' : '#D1D4D8'}
            >
                <textarea
                    placeholder="댓글을 남겨보세요."
                    rows={1}
                    value={inputValue}
                    ref={textRef}
                    onInput={handleResizeHeight}
                    onChange={e => {
                        setInputValue(e.target.value);
                    }}
                    className="text"
                />
            </D.WriteComment>
            <div className="btnwrapper">
                {(isChildComment || isModify) && (
                    <D.CancelBtn
                        inputEmpty={inputValue === ''}
                        onClick={cancel}
                    >
                        취소하기
                    </D.CancelBtn>
                )}
                <D.RegBtn inputEmpty={inputValue === ''} onClick={handleSubmit}>
                    등록하기
                </D.RegBtn>
            </div>
        </D.CommentWrapper>
    );
};

export default Comment;
