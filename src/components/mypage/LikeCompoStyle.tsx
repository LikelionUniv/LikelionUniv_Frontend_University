import { styled } from 'styled-components';
import search from '../../img/mypage/search.svg';

export const SearchAndSortWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    margin-top: 40px;
    z-index: 100;
    @media (max-width: 1920px) {
        width: 1200px;
    }
    @media (max-width: 1280px) {
        //1025px을 기준으로 퍼센트를 잡음 두 사이즈간의 일정적인 퍼센트가 안나오기 때문
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 20.5px;
        height: 40px;
        gap: 8px;
    }
    @media (max-width: 479px) {
        width: 100%;
        margin-top: 23px;
        height: 40px;
        gap: 8px;
    }
`;

export const SearchBoxWrapper = styled.div`
    width: 588px;
    height: 54px;
    flex-shrink: 0;
    border: 1px solid #dcdfe3;
    padding: 13px 16px 13px 24px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    @media (max-width: 1024px) {
        width: 586px;
    }
    //여기 부분이 약간 문제입니다..
    @media (max-width: 767px) {
        width: 74%;
        height: 40px;
        flex-shrink: 0;
    }
    @media (max-width: 479px) {
        width: 68%;
        height: 40px;
        flex-shrink: 0;
    }
    @media (max-width: 360px) {
        width: 206px;
        height: 40px;
        flex-shrink: 0;
    }
`;

export const SearchSVG = styled.div`
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-image: url(${search});
`;

export const SearchInput = styled.input`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    border-color: transparent;
    width: calc(100% - 24px);
    &:focus {
        outline: none;
    }
    ::placeholder {
        color: var(--Grey-600, #adb3ba);
    }
`;
