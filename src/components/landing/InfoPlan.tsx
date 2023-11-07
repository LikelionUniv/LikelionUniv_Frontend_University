import InfoPlanBox from './InfoPlanBox';
import styled from 'styled-components';

const InfoPlan = () => {
    return (
        <Wrapper>
            <InfoPlanBox />
            <InfoPlanBox />
            <InfoPlanBox />
            <InfoPlanBox />
            <InfoPlanBox />
            <InfoPlanBox />
        </Wrapper>
    );
};

export default InfoPlan;

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-template-rows: repeat(2, auto);
    align-items: start;
    justify-content: space-around;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        grid-template-rows: repeat(2, auto);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
        grid-template-rows: repeat(2, auto);
        grid-gap: 14px;
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
        grid-template-rows: repeat(2, auto);
    }
`;
