import styled, { keyframes } from 'styled-components';
import { useRecoilState } from 'recoil';

import {
    activeContentState,
    ActiveContentType,
} from '../../../../atoms/HackathonGuide';
import HackathonContent from './HackathonContent';

const HackathonNavBox = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    margin-bottom: 65px;
    background-color: #212224;
    justify-content: center;

    @media (max-width: 767px) {
        height: 74px;
    }
    @media (max-width: 360px) {
        height: 56px;
    }
`;

const HackathonButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    width: 100%;
`;

const HackathonButton = styled.div<{ $active?: boolean }>`
    background-color: ${({ $active }) => ($active ? '#000' : '#212224')};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: #fff;
    font-weight: 700;
    border-radius: 16px;
    cursor: pointer;

    font-size: clamp(20px, 2vw, 24px);
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #000;
    }

    @media (max-width: 767px) {
        font-size: clamp(16px, 3vw, 20px);
    }

    @media (max-width: 360px) {
        font-size: clamp(14px, 4vw, 16px);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const HackathonButtonL = styled(HackathonButton)`
    margin-left: 16px;
`;

const ContentContainer = styled.div`
    animation: ${fadeIn} 0.5s ease-in-out;
    margin-top: 20px;

    color: #fff;
    font-size: 1.2rem;
`;

const HackathonNav = () => {
    const [activeContent, setActiveContent] =
        useRecoilState<ActiveContentType>(activeContentState);

    return (
        <>
            <HackathonNavBox>
                <HackathonButtonWrapper>
                    <HackathonButton
                        $active={activeContent === 'August 6'}
                        onClick={() => setActiveContent('August 6')}
                    >
                        8월 6일 타임라인
                    </HackathonButton>
                    <HackathonButtonL
                        $active={activeContent === 'August 7'}
                        onClick={() => setActiveContent('August 7')}
                    >
                        8월 7일 타임라인
                    </HackathonButtonL>
                </HackathonButtonWrapper>
            </HackathonNavBox>
            <ContentContainer>
                <HackathonContent />
            </ContentContainer>
        </>
    );
};

export default HackathonNav;
