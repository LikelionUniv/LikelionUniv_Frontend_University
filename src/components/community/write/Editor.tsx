import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './writeEditor.css';
import * as W from './WriteStyle';
import { useState, useRef } from 'react';
//import { ReactComponent as Img } from '../../../img/community/addImage.svg';
import imgSvg from '../../../img/community/addImage.svg';

interface EditorProps {
  contents?: string;
  title?: string;
  onContentChange?: (content: string) => void;
  onTitleChange?: (title: string) => void;
}

const Editor: React.FC<EditorProps> = ({ contents, title, onContentChange, onTitleChange }) => {

  const [value, setValue] = useState(contents || "");
  const [input, setInput] = useState(title || "");
  const quillRef = useRef<ReactQuill>(null);

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



  return (
    <>
      <W.WriteTitle 
        placeholder="제목을 입력해주세요."
        value={input}
        onChange={e => {
          setInput(e.target.value);
          if (onTitleChange) onTitleChange(e.target.value)}}
      />
      <ReactQuill
        className={styles.quill}
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={(content) => {
          setValue(content);
          if (onContentChange) onContentChange(content);
        }}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력해주세요."
      />
    </>
  )
}

export default Editor;
