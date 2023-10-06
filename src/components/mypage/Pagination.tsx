import React from 'react';
import { styled } from 'styled-components';
import leftArrow from '../../img/mypage/leftArrow.svg';
import rightArrow from '../../img/mypage/rightArrow.svg';
import useGetPageRange from './useGetPageRange';

interface PaginationProp {
    totalPageNum: number;
    pageNum: number;
    setPageNum: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = (props: PaginationProp) => {
    const page = useGetPageRange(Math.ceil(props.pageNum / 5));
    return (
        <PaginationWrapper>
            <ArrowButton
                className="left"
                onClick={() => {
                    if (props.pageNum === 1) {
                        return;
                    } else {
                        props.setPageNum(props.pageNum - 1);
                    }
                }}
            />
            {page.map(el => {
                return (
                    <button
                        className={props.pageNum === el ? 'select' : ''}
                        onClick={() => {
                            if (el > props.totalPageNum) {
                                return;
                            } else {
                                props.setPageNum(el);
                            }
                        }}
                    >
                        {el}
                    </button>
                );
            })}
            <ArrowButton
                className="right"
                onClick={() => {
                    if (
                        props.pageNum === props.totalPageNum ||
                        props.totalPageNum === 0
                    ) {
                        return;
                    } else {
                        props.setPageNum(props.pageNum + 1);
                    }
                }}
            />
        </PaginationWrapper>
    );
};

export default Pagination;

const PaginationWrapper = styled.div`
    margin: 0 auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 248px;
    height: 32px;
    & > button {
        background-color: transparent;
        padding: 4px;
        width: 32px;
        height: 32px;
        color: var(--Grey-600, #adb3ba);
        font-size: 16px;
        font-weight: 700;
        line-height: 150%;
        text-align: center;
        &.select {
            color: black;
        }
    }
`;

const ArrowButton = styled.button`
    width: 26px;
    height: 26px;
    padding: 6px;
    background-repeat: no-repeat;
    background-position: center;
    &.left {
        background-image: url(${leftArrow});
    }
    &.right {
        background-image: url(${rightArrow});
    }
`;
