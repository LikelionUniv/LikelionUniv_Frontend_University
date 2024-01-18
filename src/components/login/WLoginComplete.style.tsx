import styled from 'styled-components'
import Check from '../../img/login/Check.svg';
import { Button } from '../mypage/Common';

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px){
        display: none;
    }
`;

export const ItemBox = styled.div`
    width: 290px;
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
        margin-top: 24px;
        color: var(--Grey-900, #212224);
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
`;

export const LButton = styled(Button)`
    margin-top: 56px;
    width: 182px;
    height: 56px;
    font-size: 20px;
`;
