import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './writeEditor.css';
import * as W from './WriteStyle';
import { useState, useRef, useCallback, useEffect } from 'react';
import imgSvg from '../../../../img/community/addImage.svg';

interface EditorProps {
    contents?: string;
    title?: string;
    onContentChange?: (content: string) => void;
    onTitleChange?: (title: string) => void;
}

const Editor: React.FC<EditorProps> = ({
    contents,
    title,
    onContentChange,
    onTitleChange,
}) => {
    const [value, setValue] = useState(contents);
    const [input, setInput] = useState(title);
    const quillRef = useRef<ReactQuill>(null);

    useEffect(() => {
        setValue(contents);
        setInput(title);
    }, [contents, title]);

    useEffect(() => {
        let prevVisualViewport = window.visualViewport
            ? window.visualViewport.height
            : 0;

        const handleVisualViewportResize = () => {
            if (!window.visualViewport) return;
            const currentVisualViewport = window.visualViewport.height;
            const toolbar = document.querySelector(
                '.quill > .ql-toolbar.ql-snow',
            ) as HTMLElement;
            if (!toolbar) return;

            //console.log(currentVisualViewport) // 진짜 보이는 칸 크기
            //console.log (window.innerHeight) // 전체 화면크기

            const keyboardHeight = window.innerHeight - currentVisualViewport;

            // 키보드 켜질떄
            if (keyboardHeight > 0) {
                //toolbar.style.bottom = `${keyboardHeight}px`; // 키보드 높이만큼 bottom 조정 (크롬브라우저, ios를 위해 필요)
                //window.scrollTo(0, 0);
            } else {
                toolbar.style.bottom = '0'; // 키보드가 비활성화되었을 때 다시 아래
            }
            prevVisualViewport = currentVisualViewport;
        };

        window.visualViewport?.addEventListener(
            'resize',
            handleVisualViewportResize,
        );

        return () => {
            window.visualViewport?.removeEventListener(
                'resize',
                handleVisualViewportResize,
            );
        };
    }, []);

    const svgIcon = `<img src="${imgSvg}" alt="이미지" />이미지 추가`;
    var icons = ReactQuill.Quill.import('ui/icons');
    icons['image'] = svgIcon;

    const toolbarOptions = [['image']];

    const formats = ['font', 'indent', 'image', 'width'];

    const modules = {
        toolbar: {
            container: toolbarOptions,
        },
    };

    const textRef = useRef<HTMLTextAreaElement>(null);
    const handleResizeHeight = useCallback(() => {
        const textarea = textRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    }, []);

    return (
        <>
            <W.WriteTitle
                placeholder="제목을 입력해주세요."
                rows={1}
                value={input}
                ref={textRef}
                onInput={handleResizeHeight}
                onChange={e => {
                    setInput(e.target.value);
                    if (onTitleChange) onTitleChange(e.target.value);
                }}
            />
            <ReactQuill
                className={styles.quill}
                ref={quillRef}
                theme="snow"
                value={value}
                onChange={content => {
                    setValue(content);
                    if (onContentChange) onContentChange(content);
                }}
                modules={modules}
                formats={formats}
                placeholder="내용을 입력해주세요."
            />
        </>
    );
};

export default Editor;
