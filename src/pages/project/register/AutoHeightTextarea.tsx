import { useRef, useCallback } from 'react';
import styled from 'styled-components';

interface ITextarea {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function AutoHeightTextarea(props: ITextarea) {
    const textRef = useRef<HTMLTextAreaElement>(null);
    const handleResize = useCallback(() => {
        if (textRef.current !== null) {
            textRef.current.style.height = '0px';
            textRef.current.style.height = textRef.current.scrollHeight + 'px';
        }
    }, []);

    return (
        <Textarea
            ref={textRef}
            placeholder={props.placeholder}
            value={props.value}
            onInput={handleResize}
            onChange={props.onChange}
        />
    );
}

export default AutoHeightTextarea;

const Textarea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 12px 24px;

    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background: var(--white, #fff);
    box-sizing: border-box;

    font-family: 'Pretendard';
    font-size: 16px;
    color: var(--grey-900, #212224);
    font-weight: 500;
    line-height: 150%;

    outline: 0;
    resize: none;
    overflow-y: hidden;

    &::placeholder {
        color: var(--grey-600, #adb3ba);
    }
    &:focus {
        border: 1px solid var(--orange-600, #ff7710);
    }
`;
