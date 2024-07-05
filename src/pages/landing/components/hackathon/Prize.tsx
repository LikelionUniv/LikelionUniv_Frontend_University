import { styled } from 'styled-components';
import HackathonPrize from './HackathonPrize';

const Prize = () => {
    return (
        <PrizeWrapper>
            <HackathonPrize />
        </PrizeWrapper>
    );
};

export default Prize;

const PrizeWrapper = styled.div`
    width: 100%;
    margin-top: clamp(120px, 2vh, 160px);
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        margin-top: clamp(60px, 2vh, 120px);
    }

    @media (max-width: 360px) {
        margin-top: clamp(40px, 2vh, 60px);
    }
`;
