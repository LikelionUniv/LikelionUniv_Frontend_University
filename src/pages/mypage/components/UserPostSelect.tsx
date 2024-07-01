import { Suspense, startTransition, useState } from 'react';
import { styled } from 'styled-components';
import ProjectSelect from './ProjectSelect';
import LikeSelect from './LikeSelect';
import PostSelect from './PostSelect';
import ApplyList from '../../../components/mypage/Hackathons/ApplyList';

const UserPostSelect = () => {
    //const selectOption = ['게시글', '프로젝트', '댓글', '좋아요'];

    //해커톤 신청
    const selectOptions = ['신청정보', '게시글', '프로젝트', '댓글', '좋아요'];
    const [select, setSelect] = useState<string>('신청정보');
    const optionClickFn = (option: string) => {
        startTransition(() => {
            setSelect(option);
        });
    };
    return (
        <>
            <ButtonSelectWrapper>
                {selectOptions.map(e => {
                    return (
                        <button
                            className={select === e ? 'select' : ''}
                            onClick={() => {
                                optionClickFn(e);
                            }}
                            key={e}
                        >
                            {e}
                        </button>
                    );
                })}
            </ButtonSelectWrapper>
            <SelectBorder />
            {select === '게시글' ? (
                <Suspense fallback={<div>loading...</div>}>
                    <PostSelect select={select} />
                </Suspense>
            ) : select === '댓글' ? (
                <Suspense fallback={<div>loading...</div>}>
                    <PostSelect select={select} />
                </Suspense>
            ) : select === '프로젝트' ? (
                <>
                    <Suspense fallback={<div>loading...</div>}>
                        <ProjectSelect select={select} />
                    </Suspense>
                </>
            ) : select === '좋아요' ? (
                <Suspense fallback={<div>loading...</div>}>
                    <LikeSelect select={select} />
                </Suspense>
            ) : (
                <>
                    <Suspense fallback={<div>loading...</div>}>
                        <ApplyList />
                    </Suspense>
                </>
            )}
        </>
    );
};

export default UserPostSelect;

const ButtonSelectWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 24px;
    width: 379px;
    ///width: 281px;
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
        @media (min-width: 360px) {
            font-size: 16px;
        }
    }
    @media (min-width: 360px) {
        width: 320px;
        height: 34px;
    }
`;

const SelectBorder = styled.div`
    height: 0px;
    border: 1px solid rgba(234, 236, 238, 1);
    margin-top: -2px;
    @media (min-width: 1281px) {
        width: 1200px;
    }
    @media (max-width: 1280px) {
        width: 100%;
    }
    @media (max-width: 479px) {
        width: 100%;
    }
    @media (max-width: 360px) {
        width: 100%;
    }
`;

export const PostBoxWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 24px;
    flex-wrap: wrap;
    position: relative;
    margin: 40.5px 0px 80px;
    @media (min-width: 1281px) {
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
