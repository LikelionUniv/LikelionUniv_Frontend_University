import * as D from './DetailStyle';
import { useRef, useCallback, useState } from 'react';
import request from '../../../utils/request';

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
    };

    //대댓글 생성
    const childCommentSubmit = async () => {
        await request<CommentRegisterType, CommentId, null>({
            uri: `/api/v1/community/comments/${id}/child`,
            method: 'post',
            data: commentData,
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
        window.location.reload();
    };

    //등록 or 수정
    const handleSubmit = () => {
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
