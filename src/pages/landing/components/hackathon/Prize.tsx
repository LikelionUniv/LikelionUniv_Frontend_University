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
    align-items: center;
    justify-content: center;
`;