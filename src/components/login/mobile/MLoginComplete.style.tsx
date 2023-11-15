import styled from 'styled-components';
import Check from '../../../img/login/Check.svg';
import { Button } from '../../mypage/Common';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export const ItemBox = styled.div`
    width: 290px;
    margin: 0 auto;
    margin-top: 128px;
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

        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }
`;

export const LButton = styled(Button)`
    margin-top: 56px;
    width: 182px;
    height: 56px;
    font-size: 20px;
`;
