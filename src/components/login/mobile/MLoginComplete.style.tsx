import styled from 'styled-components';
import Check from '../../../img/login/Check.svg';
import { Button } from '../../mypage/Common';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 40px;

    width: 100%;
    height: 100%;

    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    & > .img {
        width: 200px;
        height: 200px;
        background-image: url(${Check});
    }
    & > p {
        margin-top: 24px;
        color: var(--Grey-900, #212224);
        text-align: center;

        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }
`;

export const LButton = styled(Button)`
    margin-top: 237px;
    width: 100%;
    height: 56px;
    font-size: 20px;
`;
