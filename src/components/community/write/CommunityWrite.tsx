import Editor from './Editor';
import * as W from './WriteStyle';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CommunityWrite = () => {
    const location = useLocation();
    const info = { ...location.state };
    const [selectedBoard, setSelectedBoard] = useState<string>('' || info.main);
    const [selectedSubBoard, setSelectedSubBoard] = useState<string>(
        '' || info.sub,
    );
    console.log(info.title);

    const BoardClick = (boardName: string) => {
        setSelectedBoard(boardName);
        setSelectedSubBoard('');
    };

    const SubBoardClick = (subBoardName: string) => {
        setSelectedSubBoard(subBoardName);
    };

    const SubBoard = () => {
        switch (selectedBoard) {
            case '멋대 중앙':
                return (
                    <div className="subBoard">
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('공지사항')}
                            isSelected={selectedSubBoard === '공지사항'}
                        >
                            공지사항
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('질문건의')}
                            isSelected={selectedSubBoard === '질문건의'}
                        >
                            질문건의
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('정보공유')}
                            isSelected={selectedSubBoard === '정보공유'}
                        >
                            정보공유
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
                            onClick={() => SubBoardClick('팀원모집')}
                            isSelected={selectedSubBoard === '팀원모집'}
                        >
                            팀원모집
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('플젝모집')}
                            isSelected={selectedSubBoard === '플젝모집'}
                        >
                            플젝모집
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('플젝자랑')}
                            isSelected={selectedSubBoard === '플젝자랑'}
                        >
                            플젝자랑
                        </W.SubBoardItem>
                    </div>
                );
            case '멋사 오버플로우':
                return (
                    <div className="subBoard">
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('프론트')}
                            isSelected={selectedSubBoard === '프론트'}
                        >
                            프론트
                        </W.SubBoardItem>
                        <W.SubBoardItem
                            onClick={() => SubBoardClick('백')}
                            isSelected={selectedSubBoard === '백'}
                        >
                            백
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
        <W.Container>
            <W.Title>커뮤니티 글쓰기</W.Title>
            <W.Tab>
                <p className="sub">게시판 선택</p>
                <div className="board">
                    <W.BoardItem
                        onClick={() => BoardClick('멋대 중앙')}
                        isSelected={selectedBoard === '멋대 중앙'}
                    >
                        멋대 중앙
                    </W.BoardItem>
                    <W.BoardItem
                        onClick={() => BoardClick('자유게시판')}
                        isSelected={selectedBoard === '자유게시판'}
                    >
                        자유게시판
                    </W.BoardItem>
                    <W.BoardItem
                        onClick={() => BoardClick('멋사 오버플로우')}
                        isSelected={selectedBoard === '멋사 오버플로우'}
                    >
                        멋사 오버플로우
                    </W.BoardItem>
                </div>
                {SubBoard()}
            </W.Tab>
            <Editor contents={info.body} title={info.title} />
            <div className="btns">
                <W.CancelBtn>취소하기</W.CancelBtn>
                <W.RegBtn>등록하기</W.RegBtn>
            </div>
        </W.Container>
    );
};

export default CommunityWrite;
