import { styled } from 'styled-components';

const HackathonPart = () => {
    return <PartButton>지금 신청하러 가기</PartButton>;
};

export default HackathonPart;

const PartButton = styled.div`
    color: white;
    background-color: #ff7711;
    display: inline-block;
    &:hover {
        background-color: #eb6502;
    }
`;
