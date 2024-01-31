import Editor from './Editor';
import * as W from './WriteStyle';
import { Back } from '../detail/DetailStyle';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import request from '../../../utils/request';
import { axiosInstance } from '../../../utils/axios';
import ImageUpload from '../../utils/ImageUpload';
import { ReactComponent as ArrowIcon } from '../../../img/community/arrow_left.svg';
import { useAuth } from '../../../hooks/useAuth';
import { RolePriority } from '../../../constants/Role';

interface CommunityRegisterType {
    title: string;
    body: string;
    thumbnail: string | null;
    mainCategory: string;
    subCategory: string;
}

interface PostId {
    postId: number;
}

const CommunityWrite = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const info = { ...location.state };
    const [selectedBoard, setSelectedBoard] = useState<string>('');
    const [selectedSubBoard, setSelectedSubBoard] = useState<string>('');
    const [editorTitle, setEditorTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');

    const { userinfo, isLoading } = useAuth();
    const isSuperAdminInfo =
        RolePriority.findIndex(role => role === userinfo.role) >= 4;

    const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);

    useEffect(() => {
        if (isSuperAdminInfo && !isLoading) {
            setIsSuperAdmin(true);
        }
    }, [isLoading, isSuperAdminInfo]);

    //수정모드일때 기존 데이터 불러오기
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get(
                `/api/v1/community/posts/${info.id}/simple`,
            );
            setSelectedBoard(response.data.data.mainCategory);
            setSelectedSubBoard(response.data.data.subCategory);
            setEditorContent(response.data.data.body);
            setEditorTitle(response.data.data.title);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (info.mod) {
            fetchData();
        }
    }, [info.mod]);

    //글씨 없이 이미지만 있어도 버튼 활성화
    const checkImage = (html: string): boolean => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.querySelectorAll('img').length > 0;
    };

    const checkText = (html: string): string => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent?.trim() || '';
    };

    const isSubmitEnabled = (): boolean => {
        const content = checkText(editorContent);
        const hasImage = checkImage(editorContent);

        return (
            selectedBoard !== '' &&
            selectedSubBoard !== '' &&
            editorTitle.trim() !== '' &&
            (content !== '' || hasImage)
        );
    };

    const handleTitleChange = (title: string) => {
        setEditorTitle(title);
    };

    const handleContentChange = (content: string) => {
        setEditorContent(content);
    };

    const BoardClick = (boardName: string) => {
        setSelectedBoard(boardName);
        setSelectedSubBoard('');
    };

    const SubBoardClick = (subBoardName: string) => {
        setSelectedSubBoard(subBoardName);
    };

    const replaceBase64WithS3Urls = (
        originalHtml: any,
        base64Urls: any,
        s3Urls: any,
    ) => {
        let newHtml = originalHtml;

        base64Urls.forEach((base64Url: any, index: any) => {
            newHtml = newHtml.replace(base64Url, s3Urls[index]);
        });
        return newHtml;
    };

    // 수정할때 이미 있던 s3이미지는 처리 x
    const isS3Url = (url: string) => {
        return url.startsWith('https://storage.likelionuniv.com');
    };

    const processSendData = async (): Promise<CommunityRegisterType> => {
        const editorHtml = editorContent;
        const extractedUrls = extractBase64Images(editorHtml);
        let newEditorHtml = editorHtml;
        let thumbnailUrl = null;

        // Base64 URL이랑 S3 URL 구분
        const base64Urls = extractedUrls.filter(url => !isS3Url(url));
        const s3Urls = extractedUrls.filter(isS3Url);

        // S3에 업로드하고 URL 변경
        let uploadedS3Urls: any = [];
        if (base64Urls.length > 0) {
            uploadedS3Urls = await uploadImagesAndGetUrls(base64Urls);
            newEditorHtml = replaceBase64WithS3Urls(
                newEditorHtml,
                base64Urls,
                uploadedS3Urls,
            );
        }

        // 썸네일 첫번째 사진으로
        if (s3Urls.length > 0) {
            thumbnailUrl = s3Urls[0];
        } else if (uploadedS3Urls.length > 0) {
            thumbnailUrl = uploadedS3Urls[0];
        }

        return {
            title: editorTitle,
            body: newEditorHtml,
            thumbnail: thumbnailUrl,
            mainCategory: selectedBoard,
            subCategory: selectedSubBoard,
        };
    };

    // 게시글 등록
    const handleSubmit = async () => {
        const data = await processSendData();
        await request<CommunityRegisterType, PostId, null>({
            uri: '/api/v1/community/posts/new',
            method: 'post',
            data,
        });

        window.location.replace('/community');
    };

    // 게시글 수정
    const handleModify = async () => {
        const data = await processSendData();
        await request<CommunityRegisterType, null, PostId>({
            uri: `/api/v1/community/posts/${info.id}`,
            method: 'patch',
            data,
        });

        window.location.replace('/community');
    };

    const submit = () => {
        if (info.mod) {
            handleModify();
        } else {
            handleSubmit();
        }
    };

    //quill editor 내용 중 img 태그만 골라서 src 뽑아내기
    const extractBase64Images = (editorContent: any) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(editorContent, 'text/html');
        const images = doc.querySelectorAll('img');
        const urls = Array.from(images).map(img => img.src);
        return urls;
    };

    const base64ToFile = (dataurl: any, filename: string) => {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    };

    const uploadImagesAndGetUrls = async (base64Urls: any) => {
        const s3Urls = [];

        for (const base64Url of base64Urls) {
            const file = base64ToFile(base64Url, 'image.jpg');
            const { presignedUrl, imageUrl } =
                await ImageUpload.getPresignedUrl(file);
            await ImageUpload.enrollImagesToS3(file, presignedUrl);
            s3Urls.push('https://' + imageUrl);
        }
        return s3Urls;
    };

    const goMain = () => {
        navigate('/community');
    };

    const SubBoard = () => {
        switch (selectedBoard) {
            case '멋쟁이사자처럼':
                return (
                    <div className="subBoard">
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('공지 사항')}
                            isSelected={selectedSubBoard === '공지 사항'}
                        >
                            공지 사항
                        </W.SubBoardItem>
                    </div>
                );
            case '자유게시판':
                return (
                    <div className="subBoard">
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('정보공유')}
                            isSelected={selectedSubBoard === '정보공유'}
                        >
                            정보공유
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('프로젝트 팀원 모집')}
                            isSelected={
                                selectedSubBoard === '프로젝트 팀원 모집'
                            }
                        >
                            프로젝트 팀원 모집
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('프로젝트 자랑')}
                            isSelected={selectedSubBoard === '프로젝트 자랑'}
                        >
                            프로젝트 자랑
                        </W.SubBoardItem>
                    </div>
                );
            case '트랙별 소통 채널':
                return (
                    <div className="subBoard">
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('프론트엔드')}
                            isSelected={selectedSubBoard === '프론트엔드'}
                        >
                            프론트엔드
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('백엔드')}
                            isSelected={selectedSubBoard === '백엔드'}
                        >
                            백엔드
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('기획')}
                            isSelected={selectedSubBoard === '기획'}
                        >
                            기획
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('디자인')}
                            isSelected={selectedSubBoard === '디자인'}
                        >
                            디자인
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('기타')}
                            isSelected={selectedSubBoard === '기타'}
                        >
                            기타
                        </W.SubBoardItem>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            <Back>
                <ArrowIcon
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <W.Reg
                    isActive={isSubmitEnabled()}
                    onClick={isSubmitEnabled() ? submit : undefined}
                >
                    등록
                </W.Reg>
            </Back>
            <W.Container>
                <W.Title>커뮤니티 글쓰기</W.Title>
                <W.Tab>
                    <p className="sub">게시판 선택</p>
                    <div className="board">
                        {isSuperAdmin && (
                            <W.BoardItem
                                onClick={() => BoardClick('멋쟁이사자처럼')}
                                isSelected={selectedBoard === '멋쟁이사자처럼'}
                            >
                                멋쟁이사자처럼
                            </W.BoardItem>
                        )}
                        <W.BoardItem
                            onClick={() => BoardClick('자유게시판')}
                            isSelected={selectedBoard === '자유게시판'}
                        >
                            자유게시판
                        </W.BoardItem>
                        <W.BoardItem
                            onClick={() => BoardClick('트랙별 소통 채널')}
                            isSelected={selectedBoard === '트랙별 소통 채널'}
                        >
                            트랙별 소통 채널
                        </W.BoardItem>
                    </div>
                    {SubBoard()}
                </W.Tab>
                <Editor
                    contents={editorContent}
                    title={editorTitle}
                    onTitleChange={handleTitleChange}
                    onContentChange={handleContentChange}
                />
                <div className="btns">
                    <W.CancelBtn onClick={goMain}>취소하기</W.CancelBtn>
                    <W.RegBtn
                        isActive={isSubmitEnabled()}
                        onClick={isSubmitEnabled() ? submit : undefined}
                    >
                        등록하기
                    </W.RegBtn>
                </div>
            </W.Container>
        </div>
    );
};

export default CommunityWrite;
