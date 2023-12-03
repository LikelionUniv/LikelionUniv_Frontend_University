import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styles from "./writeEditor.css";
import * as W from './WriteStyle'
import {useState, useRef} from 'react';
//import { ReactComponent as Img } from '../../../img/community/addImage.svg';
import imgSvg from '../../../img/community/addImage.svg';


const Editor = () => {

    const [value, setValue] = useState("");
    const quillRef = useRef<ReactQuill>(null);

    const svgIcon = `<img src="${imgSvg}" alt="이미지" />이미지 추가`; // SVG 파일의 경로

    var icons = ReactQuill.Quill.import('ui/icons');
    icons['image'] = svgIcon;

    const toolbarOptions = [
        ["image"],
    ]; 
      
    const formats = [
    "font",
    "indent",
    "image",
    "width",
    ];
    
    const modules = {
    toolbar: {
        container: toolbarOptions,
    },
    };

 

  return (
    <>
      <W.WriteTitle placeholder="제목을 입력해주세요."></W.WriteTitle>
      
      <ReactQuill
        className={styles.quill}
        //style={{ height: "400px" }}
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        
        formats={formats}
        placeholder="내용을 입력해주세요."
      />
      
    </>
  )
}

export default Editor
