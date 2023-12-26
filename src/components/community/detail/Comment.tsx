import * as D from './DetailStyle';
import { useRef, useCallback, useState } from 'react';

export interface RegBtnProps {
    inputEmpty: boolean;
}

const Comment = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const textRef = useRef<HTMLTextAreaElement>(null);
    const handleResizeHeight = useCallback(() => {
        const textarea = textRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);
    return (
        <D.CommentWrapper>
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
            <D.RegBtn inputEmpty={inputValue === ''}>등록하기</D.RegBtn>
        </D.CommentWrapper>
    );
};

export default Comment;
