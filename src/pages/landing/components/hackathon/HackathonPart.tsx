import { styled } from 'styled-components';

import arrow from '../../../../img/landing/longrightarrow_s.png';
const HackathonPart = () => {
    return (
        <PartButton>
            <Info>지금 신청하러 가기</Info>
            <Img src={arrow} />
        </PartButton>
    );
};

export default HackathonPart;

const PartButton = styled.div`
    color: white;
    background-color: #ff7711;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 8px;

    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;

    width: 580px;
    height: 80px;

    align-items: center;
    margin-top: 120px;
    margin-bottom: 148px;

    &:hover {
        background-color: #eb6502;
    }
`;

const Info = styled.div`
    padding: 21px 0px 20px 40px;
`;

const Img = styled.img`
    padding: 24px 40px 24px 0px;
`;
