import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 0 358px;
    height: 133px;

    border-bottom: 1px solid var(--grey-300, #eaecee);
    width: 100%;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    @media screen and (max-width: 360px) {
        height: 86px;
    }
`;

export const TextArea = styled.div`
    padding: 32px 0px 33px 40px;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    @media screen and (max-width: 360px) {
        width: 100%;
        padding: 12px 0px 28px 14px;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    line-height: 150%;
    color: var(--grey-900, #212224);
    font-family: Pretendard;
    font-size: 24px;
    font-weight: 700;
    @media screen and (max-width: 767px) {
        width: 100%;
        font-size: 16px;
    }
    @media screen and (max-width: 360px) {
        width: 100%;
        font-size: 16px;
    }
`;

export const Date = styled.div`
    font-size: 16px;
    line-height: 150%;
    color: var(--grey-800, #4d5359);
    font-family: Pretendard;
    font-size: 16px;
    @media screen and (max-width: 767px) {
        width: 100%;
        font-size: 12px;
    }
    @media screen and (max-width: 360px) {
        width: 100%;
        font-size: 12px;
    }
`;

export const Button = styled.div`
    width: 166px;
    height: 48px;
    border-radius: 8px;
    background-color: #ff7710;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    margin: 43px 40px 42px 0px;

    @media screen and (max-width: 767px) {
        position: absolute;
        border-radius: 4px;
        width: 113px;
        height: 24px;
        font-size: 12px;
        margin: 100px 0px 0px 193px;
        right: 34px;
        font-size: 12px;
    }
    @media screen and (max-width: 360px) {
        position: absolute;
        border-radius: 4px;
        width: 113px;
        height: 24px;
        font-size: 12px;
        margin: 50px 0px 12px 193px;
        right: 34px;
    }
`;
