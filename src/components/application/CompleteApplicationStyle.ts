import styled from 'styled-components';
import Check from '../../img/login/Check.svg';

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemBox = styled.div`
    width: 403px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .img {
        width: 200px;
        height: 200px;
        background-image: url(${Check});
    }
    & > p {
        margin-top: 24.29px;
        color: var(--Grey-900, #212224);
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
    @media screen and (max-width: 360px) {
        width: 262px;
    }
`;

export const Button = styled.div`
    display: inline-flex;
    flex-shrink: 0;

    width: 234px;
    height: 56px;

    align-items: center;
    justify-content: center;

    border-radius: 8px;
    color: #fff;
    background-color: #ff7710;

    font-weight: 700;
    cursor: pointer;
    margin-top: 64px;

    font-size: 20px;
    @media screen and (max-width: 360px) {
        margin-top: 201.71px;
        width: 320px;
        height: 48px;
        font-size: 16px;
    }
`;
