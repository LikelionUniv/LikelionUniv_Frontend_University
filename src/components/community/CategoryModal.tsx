import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../img/community/drop_arrow.svg';
import { ReactComponent as Close } from '../../img/community/close.svg';

interface ModalProp {
    onCategoryChange: (mainCategory: string, subCategory: string) => void;
    mainCategory: string;
    subCategory: string;
}

const CategoryModal: React.FC<ModalProp> = ({
    onCategoryChange,
    mainCategory,
    subCategory,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMainCategory, setSelectedMainCategory] =
        useState<string>(mainCategory);
    const [selectedSubCategory, setSelectedSubCategory] =
        useState<string>(subCategory);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleCategorySelect = (
        mainCategory: string,
        subCategory: string,
    ) => {
        setSelectedMainCategory(mainCategory);
        setSelectedSubCategory(subCategory);
        onCategoryChange(mainCategory, subCategory);
        toggleModal();
    };

    return (
        <>
            {modalOpen && <ModalBackground />}
            <Wrapper>
                <Box onClick={toggleModal}>
                    <p>{selectedSubCategory}</p>
                    <Arrow />
                </Box>
            </Wrapper>
            {modalOpen && (
                <Modal>
                    <div className="head">
                        <p>게시판 선택</p>
                        <Close onClick={toggleModal} />
                    </div>
                    <div className="category">
                        <p
                            onClick={() =>
                                handleCategorySelect(
                                    '전체 게시판',
                                    '전체 게시판',
                                )
                            }
                        >
                            전체게시판
                            <Choose
                                selected={
                                    selectedMainCategory === '전체 게시판' &&
                                    selectedSubCategory === '전체 게시판'
                                }
                            />
                        </p>
                        <Divider />
                        <span>멋대 중앙</span>
                        <p
                            onClick={() =>
                                handleCategorySelect('멋대 중앙', '공지사항')
                            }
                        >
                            공지사항
                            <Choose
                                selected={
                                    selectedMainCategory === '멋대 중앙' &&
                                    selectedSubCategory === '공지사항'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('멋대 중앙', '질문건의')
                            }
                        >
                            질문건의
                            <Choose
                                selected={
                                    selectedMainCategory === '멋대 중앙' &&
                                    selectedSubCategory === '질문건의'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('멋대 중앙', '정보공유')
                            }
                        >
                            정보공유
                            <Choose
                                selected={
                                    selectedMainCategory === '멋대 중앙' &&
                                    selectedSubCategory === '정보공유'
                                }
                            />
                        </p>
                        <Divider />
                        <span>자유게시판</span>
                        <p
                            onClick={() =>
                                handleCategorySelect('자유게시판', '정보공유')
                            }
                        >
                            정보공유
                            <Choose
                                selected={
                                    selectedMainCategory === '자유게시판' &&
                                    selectedSubCategory === '정보공유'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('자유게시판', '팀원모집')
                            }
                        >
                            팀원모집
                            <Choose
                                selected={
                                    selectedMainCategory === '자유게시판' &&
                                    selectedSubCategory === '팀원모집'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('자유게시판', '플젝모집')
                            }
                        >
                            플젝모집
                            <Choose
                                selected={
                                    selectedMainCategory === '자유게시판' &&
                                    selectedSubCategory === '플젝모집'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('자유게시판', '플젝자랑')
                            }
                        >
                            플젝자랑
                            <Choose
                                selected={
                                    selectedMainCategory === '자유게시판' &&
                                    selectedSubCategory === '플젝자랑'
                                }
                            />
                        </p>
                        <Divider />
                        <span>멋사 오버플로우</span>
                        <p
                            onClick={() =>
                                handleCategorySelect(
                                    '멋사 오버플로우',
                                    '프론트',
                                )
                            }
                        >
                            프론트
                            <Choose
                                selected={
                                    selectedMainCategory ===
                                        '멋사 오버플로우' &&
                                    selectedSubCategory === '프론트'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('멋사 오버플로우', '백')
                            }
                        >
                            백
                            <Choose
                                selected={
                                    selectedMainCategory ===
                                        '멋사 오버플로우' &&
                                    selectedSubCategory === '백'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('멋사 오버플로우', '기획')
                            }
                        >
                            기획
                            <Choose
                                selected={
                                    selectedMainCategory ===
                                        '멋사 오버플로우' &&
                                    selectedSubCategory === '기획'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect(
                                    '멋사 오버플로우',
                                    '디자인',
                                )
                            }
                        >
                            디자인
                            <Choose
                                selected={
                                    selectedMainCategory ===
                                        '멋사 오버플로우' &&
                                    selectedSubCategory === '디자인'
                                }
                            />
                        </p>
                        <p
                            onClick={() =>
                                handleCategorySelect('멋사 오버플로우', '기타')
                            }
                        >
                            기타
                            <Choose
                                selected={
                                    selectedMainCategory ===
                                        '멋사 오버플로우' &&
                                    selectedSubCategory === '기타'
                                }
                            />
                        </p>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default CategoryModal;

const Wrapper = styled.div`
    padding: 16px 20px;
    border-bottom: 0.5px solid #eaecee;
`;
const Box = styled.div`
    display: flex;
    width: 100%;
    height: 32px;
    padding: 6px 12px 5px 16px;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--Grey-400, #dcdfe3);
    background: var(--White, #fff);

    p {
        color: var(--Grey-900, #212224);
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1001;
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 321px;
    height: 400px;
    overflow: scroll;
    background-color: white;
    z-index: 1001;
    border-radius: 20px;
    box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.07);

    .head {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        gap: 79px;
        padding: 12px 20px;
        color: var(--Grey-900, #212224);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        border-bottom: 1px solid #dcdfe3;
    }

    .category {
        padding: 16px 20px;
        gap: 16px;
        display: flex;
        flex-direction: column;

        p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--Black, #000);
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 160%; /* 25.6px */
        }

        span {
            color: var(--Grey-600, #adb3ba);
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%; /* 21px */
        }
    }
`;

const Choose = styled.div<{ selected: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${props => (props.selected ? '5px' : '1px')} solid
        ${props => (props.selected ? '#ff7710' : '#EAECEE')};
`;

const Divider = styled.div`
    height: 0.5px;
    background-color: var(--Grey-400, #dcdfe3);
    width: 100%;
`;
