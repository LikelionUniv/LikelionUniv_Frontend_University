import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';
import PostCard from './PostCard';
import Pagination from './Pagination';

const UserPostSelect = () => {
    //현재는 이런 방식으로 testData를 받아오는 형식으로 하는중
    const testData = [];
    const selectOption = ['게시글', '프로젝트', '댓글', '좋아요'];
    const [select, setSelect] = useState<string>('게시글');
    const optionClickFn = (option: string) => {
        setSelect(option);
        //나중에 해당 option에 따른 api호출을 해야되므로 따로 함수로 분리
    };
    const [page, setPage] = useState(1);
    const totalPageNum = [1, 2, 3];
    useEffect(() => {
        console.log(page);
    }, [page]);
    return (
        <>
            <ButtonSelectWrapper>
                {selectOption.map(e => {
                    return (
                        <button
                            className={select === e ? 'select' : ''}
                            onClick={() => {
                                optionClickFn(e);
                            }}
                        >
                            {e}
                        </button>
                    );
                })}
            </ButtonSelectWrapper>
            <SelectBorder />
            <PostBoxWrapper>
                {/* 이 파트도 지금 수정해야되... Map돌면서 해야되기 때문 */}
                {select === '프로젝트' ? <ProjectCard /> : <PostCard />}
            </PostBoxWrapper>
            <Pagination
                totalPage={totalPageNum}
                pageNum={page}
                setPageNum={setPage}
            />
        </>
    );
};

export default UserPostSelect;

const ButtonSelectWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 24px;
    width: 281px;
    height: 40px;
    & > button {
        display: flex;
        justify-content: center;
        background-color: transparent;
        align-items: center;
        height: 40px;
        padding: 5px 0px;
        color: var(--Grey-600, #adb3ba);
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 150%;
        &.select {
            color: black;
            border-bottom: 3px solid #212224;
            z-index: 20;
        }
    }
`;

const SelectBorder = styled.div`
    height: 0px;
    border: 1px solid rgba(234, 236, 238, 1);
    position: absolute;
    top: 381.5px;
    @media (max-width: 1920px) {
        width: 1200px;
    }
    @media (max-width: 1024px) {
        width: 944px;
    }
    @media (max-width: 768px) {
        width: 688px;
    }
`;

//나중에 이 파트는 분리될 예정(현재는 상태관리 라이브러리가 없어서 이 방식으로 해야됨)
const PostBoxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 40.5px;
    @media (max-width: 1920px) {
        width: 1200px;
        height: 876px;
    }
    @media (max-width: 1024px) {
        width: 944px;
        height: 1512px;
    }
    @media (max-width: 768px) {
        width: 688px;
        height: 1263px;
    }
`;
