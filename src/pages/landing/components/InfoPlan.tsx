import InfoPlanBox from './InfoPlanBox';
import styled from 'styled-components';

const InfoPlan = () => {
    return (
        <Wrapper>
            <InfoPlanBox week="2월 ~ 3월" content="아기사자 모집" />
            <InfoPlanBox week="5월" content="아이디어톤" />
            <InfoPlanBox week="8월" content="해커톤" />
            <InfoPlanBox week="10월" content="트랙별 역량 강화 행사" />
            <InfoPlanBox week="12월" content="데모데이" />
            <InfoPlanBox
                week="2월"
                content="우수 활동자와 함께 떠나는 실리콘밸리 기업 탐방"
            />
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
