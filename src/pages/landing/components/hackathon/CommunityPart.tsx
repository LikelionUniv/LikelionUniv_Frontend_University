import { styled } from 'styled-components';
import button_img from '../../../../img/landing/Arrow_Upright.svg';
import title_img from '../../../../img/landing/Notice.svg';
import CommunityList from './CommunityList';
import { useNavigate } from 'react-router-dom';

const CommunityPart = () => {
    const navigate = useNavigate();

    return (
        <CommunityPartWrapper>
            <TitleWrapper>
                <TitleImg src={title_img} />
                <MainTitle>다양한 소식을 확인해보세요!</MainTitle>
            </TitleWrapper>
            <CommunityWrapper>
                <SubtitleWrapper>
                    <Subtitle>커뮤니티</Subtitle>
                    <MoveToCommunityBTN onClick={() => navigate('/community')}>
                        <ButtonTitle>커뮤니티 보러가기</ButtonTitle>
                        <ButtonImg src={button_img} />
                    </MoveToCommunityBTN>
                </SubtitleWrapper>
                <CommunityList />
            </CommunityWrapper>
        </CommunityPartWrapper>
    );
};

export default CommunityPart;

const CommunityPartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 96px 0 160px 0;

    @media (max-width: 768px) {
        padding: 64px 0 120px 0;
        gap: 24px;
    }

    @media (max-width: 430px) {
        padding: 60px 0 68px 0;
    }
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    max-width: 1200px;
    width: 100%;
`;

const TitleImg = styled.img`
    width: 48px;
    height: 48px;

    @media (max-width: 430px) {
        width: 24px;
        height: 24px;
    }
`;

const MainTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;

    @media (max-width: 767px) {
        font-size: 40px;
        line-height: 60px;
    }

    @media (max-width: 430px) {
        font-size: 28px;
        line-height: 40px;
    }
`;

const CommunityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 1200px;
    width: 100%;

    @media (max-width: 430px) {
        gap: 12px;
    }
`;

const SubtitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Subtitle = styled.h2`
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
`;

const MoveToCommunityBTN = styled.button`
    display: flex;
    flex-direction: row;
    background-color: #ff7710;
    gap: 12px;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
`;

const ButtonTitle = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;

    @media (max-width: 430px) {
        font-size: 14px;
        line-height: 21px;
    }
`;

const ButtonImg = styled.img`
    width: 24px;
    height: 24px;
`;
