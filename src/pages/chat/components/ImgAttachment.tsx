import * as IA from './ImgAttachmentStyle';
import { useState, useEffect } from 'react';

// export const ModalBackdrop = styled.div`
//     // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
//     z-index: 1; //위치지정 요소
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(0, 0, 0, 0.4);
//     border-radius: 10px;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
// `;

// export const ModalView = styled.div.attrs(props => ({
//     // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
//     role: 'dialog',
// }))`
//     // Modal창 CSS를 구현합니다.
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     border-radius: 20px;
//     width: 500px;
//     height: 200px;
//     background-color: #ffffff;
//     > div.desc {
//         margin: 50px;
//         font-size: 20px;
//         color: var(--coz-purple-600);
//     }
// `;

const ImgAttachment = () => {
    //* 화면에 출력될 파일과 서버에 보내질 파일을 구분할 필요없다.
    //화면에 출력되는 파일
    const [selectedImages, setSelectedImages] = useState([]);
    //서버에 보내지는 파일
    const [selectedFiles, setSelectedFiles] = useState(null as any);

    const onSelectFile = (e: any) => {
        e.preventDefault();
        e.persist();
        //선택한 파일
        const selectedFiles = e.target.files;
        //선택한 파일들을 fileUrlList에 넣어준다.
        const fileUrlList = [...selectedFiles];

        // 업로드되는 파일에는 url이 있어야 한다. filePath로 보내줄 url이다.
        // 획득한 Blob URL Address를 브라우져에서 그대로 호출 시에 이미지는 표시가 되고 ,
        // 일반 파일의 경우 다운로드를 할 수 있다.
        for (let i = 0; i < selectedFiles.length; i++) {
            const nowUrl = URL.createObjectURL(selectedFiles[i]);
            fileUrlList.push(nowUrl[i]);
        }

        setSelectedFiles(fileUrlList);

        //Array.from() 은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메서드이다.
        const selectedFileArray: any = Array.from(selectedFiles);

        //브라우저 상에 보여질 파일 이름
        const imageArray = selectedFileArray.map((file: any) => {
            return file.name;
        });

        // 첨부파일 삭제시
        setSelectedImages((previousImages: any) =>
            previousImages.concat(imageArray),
        );
        e.target.value = '';
    };

    // 브라우저상에 보여질 첨부파일
    const attachFile =
        selectedImages &&
        selectedImages.map((image: any) => {
            return (
                <IA.DivImg key={image}>
                    <div>{image}</div>
                    <button
                        onClick={() =>
                            setSelectedImages(
                                selectedImages.filter(e => e !== image),
                            )
                        }
                    ></button>
                </IA.DivImg>
            );
        });

    /**
     * 서버에 첨부파일을 보내기 위해서는
     * formData로 api를 보내야 함
     * 관련 내용 받은 후에 수정 필요
     */

    return (
        <div>
            {selectedImages.length !== 0 ? (
                ''
            ) : (
                <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    accept=".png, .jpg,image/*"
                />
            )}
        </div>
    );
};

export default ImgAttachment;
