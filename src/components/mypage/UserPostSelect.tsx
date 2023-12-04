import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';
import PostCard from './PostCard';
import Pagination from './Pagination';
import PostCardWithPhoto from './PostCardWithPhoto';
import { ProjectTestData } from './TestData';
import { ProjectCardProp } from './type';
import {
    SearchAndSortWrapper,
    SearchBoxWrapper,
    SearchInput,
    SearchSVG,
} from './LikeCompoStyle';
import SortBox from './SortBox';
import { useRecoilValue } from 'recoil';
import { mypageData } from '../../store/mypageData';
import useGetUserData from './useGetUserData';

const UserPostSelect = () => {
    //현재는 이런 방식으로 testData를 받아오는 형식으로 하는중
    const [testData, setTestData] = useState<Array<ProjectCardProp>>([]);
    const userData = useRecoilValue(mypageData);
    const selectOption = ['게시글', '프로젝트', '댓글', '좋아요'];
    const [select, setSelect] = useState<string>('게시글');
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchClick, setSearchClick] = useState<string>('');
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    const optionClickFn = (option: string) => {
        setSelect(option);
        //나중에 해당 option에 따른 api호출을 해야되므로 따로 함수로 분리
    };
    const [page, setPage] = useState(1);
    useGetUserData(select, page, searchValue, searchClick);
    useEffect(() => {
        setSearchValue('');
        setSearchClick('');
    }, [select]);

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
            {select === '좋아요' ? (
                <SearchAndSortWrapper>
                    <SearchBoxWrapper>
                        <SearchInput
                            type="text"
                            placeholder="검색"
                            onChange={handleInputChange}
                            value={searchValue}
                        />
                        <SearchSVG
                            onClick={() => setSearchClick(searchValue)}
                        ></SearchSVG>
                    </SearchBoxWrapper>
                    <SortBox select={select} />
                </SearchAndSortWrapper>
            ) : null}
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
                        {Array.isArray(userData.data) &&
                        userData.data.length !== 0
                            ? userData.data.map(e => {
                                  if (e.thumbnail !== null) {
                                      return (
                                          <PostCardWithPhoto
                                              id={e.id}
                                              isAuthor={e.isAuthor}
                                              thumbnail={e.thumbnail}
                                              title={e.title}
                                              createdDate={e.createdDate}
                                              body={e.body}
                                              likeCount={e.likeCount}
                                              commentCount={e.commentCount}
                                              type={select}
                                          />
                                      );
                                  } else {
                                      return (
                                          <PostCard
                                              id={e.id}
                                              isAuthor={e.isAuthor}
                                              thumbnail={e.thumbnail}
                                              title={e.title}
                                              createdDate={e.createdDate}
                                              body={e.body}
                                              likeCount={e.likeCount}
                                              commentCount={e.commentCount}
                                              type={select}
                                          />
                                      );
                                  }
                              })
                            : null}
                    </>
                )}
            </PostBoxWrapper>
            <Pagination
                totalPageNum={
                    select === '프로젝트'
                        ? Math.ceil(ProjectTestData.length / 6)
                        : userData.totalPage
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
        border: none;
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
    margin-top: -2px;
    @media (max-width: 1920px) {
        width: 1200px;
    }
    @media (max-width: 1280px) {
        width: 100%;
    }
    @media (max-width: 479px) {
        width: 100%;
    }
`;

const PostBoxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    flex-wrap: wrap;
    margin: 40.5px 0px 80px;
    @media (max-width: 1920px) {
        width: 1200px;
        height: 748px;
    }
    @media (max-width: 1280px) {
        //1025px을 기준으로 퍼센트를 잡음 두 사이즈간의 일정적인 퍼센트가 안나오기 때문
        width: 100%;
        height: calc((652 / 1025) * 100vw);
    }
    @media (max-width: 1024px) {
        //768px을 기준으로 퍼센트를 잡았습니다.
        width: 100%;
        height: calc((1047 / 768) * 100vw);
    }
    @media (max-width: 767px) {
        width: 100%;
        height: calc((779 / 480) * 100vw);
        margin: 20px 0px 64px;
        gap: 20px 2%;
    }
    @media (max-width: 479px) {
        width: 100%;
        height: 2348px;
        margin: 20px 0px 64px;
        gap: 40px 0px;
    }
    @media (max-width: 360px) {
        width: 100%;
        height: 1946px;
        /* height: calc((1946 / 2035) * 100vh); */
        margin: 20px 0px 64px;
        gap: 40px 0px;
    }
`;
