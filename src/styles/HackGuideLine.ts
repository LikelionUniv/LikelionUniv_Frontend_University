import styled from 'styled-components';

import Typography from '../components/text/Typography';

export const GuideContainer = styled.div`
    max-width: 1200px;
    width: 80%;
    margin-top: 104px;
    color: #fff;

    @media (max-width: 767px) {
        width: 80%;
        margin-top: 120px;
    }

    @media (max-width: 360px) {
        width: 90%;
        margin-top: 80px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
`;

export const GuideTypography = styled(Typography)`
    font-size: clamp(40px, 4vw, 48px);

    @media (max-width: 767px) {
        font-size: clamp(24px, 5vw, 40px);
    }

    @media (max-width: 360px) {
        font-size: clamp(24px, 6vw, 24px);
    }
`;

export const GuideSubTypography = styled(Typography)`
    font-size: clamp(18px, 2vw, 20px);
    margin-bottom: 60px;

    @media (max-width: 767px) {
        font-size: clamp(14px, 3vw, 18px);
        font-weight: 500;
        margin-bottom: 24px;
    }

    @media (max-width: 360px) {
        font-size: clamp(14px, 4vw, 14px);
        font-weight: 500;
    }
`;

export const GuideImg = styled.img`
    width: clamp(40px, 4vw, 48px);
    height: clamp(40px, 4vw, 48px);
    /* display: block; */

    @media (max-width: 767px) {
        width: clamp(28px, 6vw, 40px);
        height: clamp(28px, 6vw, 40px);
    }

    @media (max-width: 360px) {
        width: clamp(28px, 8vw, 28px);
        height: clamp(28px, 8vw, 28px);
    }
`;
