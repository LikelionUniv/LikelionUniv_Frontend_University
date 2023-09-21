import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';
import PostCard from './PostCard';
import Pagination from './Pagination';
import PostCardWithPhoto from './PostCardWithPhoto';
import { PostTestData, ProjectTestData } from './TestData';
import { PostCardProp, ProjectCardProp } from './type';

const UserPostSelect = () => {
    //현재는 이런 방식으로 testData를 받아오는 형식으로 하는중
    const [testData, setTestData] = useState<Array<ProjectCardProp>>([]);
    const [postTestData, setPostTestData] = useState<Array<PostCardProp>>([]);
    const selectOption = ['게시글', '프로젝트', '댓글', '좋아요'];
    const [select, setSelect] = useState<string>('게시글');
    const optionClickFn = (option: string) => {
        setSelect(option);
        //나중에 해당 option에 따른 api호출을 해야되므로 따로 함수로 분리
    };
    const [page, setPage] = useState(1);
    //pagination 기능 제대로 작동되는지 확인 && 이거 현재는 6개씩 여기서 끊었지만 나중에 api연결할때는 전체를 데려와서 쪼갤 예정이라 약간 코드 변동 있음
    useEffect(() => {
        if (select === '프로젝트') {
            setTestData(
                ProjectTestData.slice(
                    6 * Math.ceil(page) - 6,
                    6 * Math.ceil(page),
                ),
            );
        } else {
            setPostTestData(
                PostTestData.slice(
                    6 * Math.ceil(page) - 6,
                    6 * Math.ceil(page),
                ),
            );
        }
    }, [select, page]);

    return (
        <>
            <ButtonSelectWrapper>
                {selectOption.map(e => {
                    return (
                        <button
                            className={select === e ? 'select' : ''}
                            onClick={() => {
                                optionClickFn(e);
                                setPage(1);
                            }}
                        >
                            {e}
                        </button>
                    );
                })}
            </ButtonSelectWrapper>
            <SelectBorder />
            <PostBoxWrapper>
                {select === '프로젝트' ? (
                    <>
                        {testData.map(e => {
                            return (
                                <ProjectCard
                                    img={e.img}
                                    title={e.title}
                                    content={e.content}
                                    cardinal={e.cardinal}
                                    school={e.school}
                                    activity={e.activity}
                                />
                            );
                        })}
                    </>
                ) : (
                    <>
                        {postTestData.map(e => {
                            if (e.img !== null) {
                                return (
                                    <PostCardWithPhoto
                                        img={e.img}
                                        title={e.title}
                                        date={e.date}
                                        content={e.content}
                                        like={e.like}
                                        comment={e.comment}
                                    />
                                );
                            } else {
                                return (
                                    <PostCard
                                        img={e.img}
                                        title={e.title}
                                        date={e.date}
                                        content={e.content}
                                        like={e.like}
                                        comment={e.comment}
                                    />
                                );
                            }
                        })}
                    </>
                )}
            </PostBoxWrapper>
            <Pagination
                totalPageNum={
                    select === '프로젝트'
                        ? Math.ceil(ProjectTestData.length / 6)
                        : Math.ceil(PostTestData.length / 6)
                }
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
    margin: 40.5px auto 80px;
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
