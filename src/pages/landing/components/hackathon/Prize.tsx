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
    margin-top: 160px;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        margin-top: 120px;
    }

    @media (max-width: 360px) {
        margin-top: 60px;
    }
`;
