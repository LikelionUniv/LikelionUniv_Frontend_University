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

        let defaultSubBoard = '';
        switch (boardName) {
            case '멋쟁이사자처럼':
                defaultSubBoard = '공지사항';
                break;
            case '자유게시판':
                defaultSubBoard = '정보공유';
                break;
            case '트랙별 소통 채널':
                defaultSubBoard = '프론트엔드';
                break;
            default:
                defaultSubBoard = '';
        }
        setSelectedSubBoard(defaultSubBoard);
        onCategoryChange(boardName, defaultSubBoard);
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
            case '멋쟁이사자처럼':
                return (
                    <div className="subBoard">
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('공지사항')}
                            isSelected={selectedSubBoard === '공지사항'}
                        >
                            공지사항
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
                            onClick={() => SubBoardClick('프로젝트 팀원 모집')}
                            isSelected={
                                selectedSubBoard === '프로젝트 팀원 모집'
                            }
                        >
                            프로젝트 팀원 모집
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('프로젝트 자랑')}
                            isSelected={selectedSubBoard === '프로젝트 자랑'}
                        >
                            프로젝트 자랑
                        </T.SubBoardItem>
                    </div>
                );
            case '트랙별 소통 채널':
                return (
                    <div className="subBoard">
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('프론트엔드')}
                            isSelected={selectedSubBoard === '프론트엔드'}
                        >
                            프론트엔드
                        </T.SubBoardItem>
                        <T.SubBoardItem
                            onClick={() => SubBoardClick('백엔드')}
                            isSelected={selectedSubBoard === '백엔드'}
                        >
                            백엔드
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
                                onClick={() => BoardClick('멋쟁이사자처럼')}
                                isSelected={selectedBoard === '멋쟁이사자처럼'}
                            >
                                멋쟁이사자처럼
                            </T.BoardItem>
                            <T.BoardItem
                                onClick={() => BoardClick('자유게시판')}
                                isSelected={selectedBoard === '자유게시판'}
                            >
                                자유게시판
                            </T.BoardItem>
                            <T.BoardItem
                                onClick={() => BoardClick('트랙별 소통 채널')}
                                isSelected={
                                    selectedBoard === '트랙별 소통 채널'
                                }
                            >
                                트랙별 소통 채널
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
