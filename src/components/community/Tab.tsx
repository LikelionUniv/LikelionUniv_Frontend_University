import { useState, useEffect } from 'react';
import * as T from './TabStyle';
import { ReactComponent as SearchImg } from '../../img/community/search_mob.svg';
import Search from './Search';

interface TabProps {
    onSearch: (query: string) => void;
    onCategoryChange: (mainCategory: string, subCategory: string) => void;
    mainCategory: string;
    subCategory: string;
}

const Tab: React.FC<TabProps> = ({
    onSearch,
    onCategoryChange,
    mainCategory,
    subCategory,
}) => {
    const [selectedBoard, setSelectedBoard] = useState<string>(mainCategory);
    const [selectedSubBoard, setSelectedSubBoard] =
        useState<string>(subCategory);
    const [searching, setSearching] = useState<boolean>(false);

    const BoardClick = (boardName: string) => {
        setSelectedBoard(boardName);
        setSelectedSubBoard('');
    };

    const SubBoardClick = (subBoardName: string) => {
        setSelectedSubBoard(subBoardName);
    };

    const SearchClick = () => {
        setSearching(!searching);
    };

    useEffect(() => {
        onCategoryChange(selectedBoard, selectedSubBoard);
    }, [selectedSubBoard]);

    const SubBoard = () => {
        switch (selectedBoard) {
            case '멋대 중앙':
                return (
                    <div className="subBoard">
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('공지사항')}
                            isSelected={selectedSubBoard === '공지사항'}
                        >
                            공지사항
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('질문건의')}
                            isSelected={selectedSubBoard === '질문건의'}
                        >
                            질문건의
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('정보공유')}
                            isSelected={selectedSubBoard === '정보공유'}
                        >
                            정보공유
                        </T.SubBoardItem>
                    </div>
                );
            case '자유게시판':
                return (
                    <div className="subBoard">
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('정보공유')}
                            isSelected={selectedSubBoard === '정보공유'}
                        >
                            정보공유
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('팀원모집')}
                            isSelected={selectedSubBoard === '팀원모집'}
                        >
                            팀원모집
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('플젝모집')}
                            isSelected={selectedSubBoard === '플젝모집'}
                        >
                            플젝모집
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('플젝자랑')}
                            isSelected={selectedSubBoard === '플젝자랑'}
                        >
                            플젝자랑
                        </T.SubBoardItem>
                    </div>
                );
            case '멋사 오버플로우':
                return (
                    <div className="subBoard">
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('프론트')}
                            isSelected={selectedSubBoard === '프론트'}
                        >
                            프론트
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('백')}
                            isSelected={selectedSubBoard === '백'}
                        >
                            백
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('기획')}
                            isSelected={selectedSubBoard === '기획'}
                        >
                            기획
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('디자인')}
                            isSelected={selectedSubBoard === '디자인'}
                        >
                            디자인
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('기타')}
                            isSelected={selectedSubBoard === '기타'}
                        >
                            기타
                        </T.SubBoardItem>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {!searching ? (
                <T.Tab>
                    <div className="board">
                        <div className="boards">
                            <T.BoardItem
                                onClick={() => BoardClick('멋대 중앙')}
                                isSelected={selectedBoard === '멋대 중앙'}
                            >
                                멋대 중앙
                            </T.BoardItem>
                            <T.BoardItem
                                onClick={() => BoardClick('자유게시판')}
                                isSelected={selectedBoard === '자유게시판'}
                            >
                                자유게시판
                            </T.BoardItem>
                            <T.BoardItem
                                onClick={() => BoardClick('멋사 오버플로우')}
                                isSelected={selectedBoard === '멋사 오버플로우'}
                            >
                                멋사 오버플로우
                            </T.BoardItem>
                        </div>
                        <SearchImg onClick={SearchClick} />
                    </div>
                    {SubBoard()}
                </T.Tab>
            ) : (
                <Search onSearch={onSearch} />
            )}
        </>
    );
};

export default Tab;
