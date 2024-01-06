import { styled, css } from 'styled-components';

const responsiveWidth = css`
    @media screen and (max-width: 1280px) {
        width: 950px;
    }

    @media screen and (max-width: 768px) {
        width: 688px;
    }
`;

/* 전체 layout */
export const ContentDiv = styled.div`
    color: #f2f4f6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--Grey-200, #f2f4f6);
    font-family: Pretendard;
    box-sizing: border-box;

    width: 100%;
    padding: 0 20px;
    padding-top: 100px;

    @media screen and (max-width: 767px) {
        padding-top: 80px;
    }
`;

export const ContentSection = styled.section`
    width: 1200px;

    @media screen and (max-width: 1280px) {
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        max-width: 727px;
    }
`;

/* 전체 Title */
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    :nth-child(2) {
        font-size: 16px;
        margin-left: 16px;
    }

    margin-bottom: 40px;

    &.recruitSchedule {
        @media screen and (max-width: 360px) {
            flex-direction: column;
            align-items: flex-start;

            & > div {
                margin-left: 0;
            }
        }
    }
`;

/* 전체 Title 한글 버전 */
export const TD = styled.div`
    color: #212224;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;

    @media screen and (max-width: 1280px) {
        color: var(--Grey-900, #212224);

        font-family: Pretendard;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
    }
`;

/* Qualifications 부분 */

export const Qbody = styled.div`
    color: #212224;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;

    /* layout */
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 360px) {
        grid-template-columns: repeat(1, 1fr);
    }

    row-gap: 40px;
    box-sizing: border-box;
    width: 1200px;
    margin-bottom: 160px;

    width: 100%;
`;

export const Qtext = styled.div`
    word-break: break-all;
    display: flex;
    flex-direction: row;

    :nth-child(1) {
        align-self: flex-start;
    }
`;

export const Arrow = styled.img`
    margin-right: 15px;
`;

export const Detail = styled.div`
    @media screen and (max-width: 768px) {
        font-size: 16px;
        width: 100%;
    }
`;

/* Recruitment schedule 부분 */

export const Qbody2 = styled.div`
    color: #212224;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    width: 1100px;

    /* layout */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 33px;

    width: 100%;

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 24px;
    }
`;

export const Qtext2 = styled.div`
    display: flex;

    :nth-child(1) {
        align-self: flex-start;
    }
`;

export const TextDiv = styled.div`
    color: #212224;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    :nth-child(1) {
        margin-bottom: 6px;
    }

    :nth-child(2) {
        font-size: 20px;
        font-weight: 700;
    }
`;
export const Detail2 = styled.div``;

export const Ps = styled.div`
    color: #868c94;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 160px;
`;

/* 부분*/
export const StyledButton = styled.div`
    /* display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 100px; */

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 100px;

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }

    /* .button1 {
        width: 588px;
        height: 280px;
        flex-shrink: 0;
        border-radius: 8px;
        background: var(--Orange-600, #ff7710);
        border: 0px;

        @media screen and (max-width: 768px) {
            width: 336px;
        }
        @media screen and (max-width: 767px) {
            width: 727px;
            height: 112px;
            flex-shrink: 0;
        }
        @media screen and (max-width: 360px) {
            width: 320px;
        }
    }

    .button2 {
        width: 588px;
        height: 280px;
        flex-shrink: 0;
        border-radius: 8px;
        background: var(--Grey-500, #d1d4d8);
        border: 0px;

        @media screen and (max-width: 768px) {
            width: 336px;
        }
        @media screen and (max-width: 767px) {
            width: 727px;
            height: 112px;
            flex-shrink: 0;
        }
        @media screen and (max-width: 360px) {
            width: 320px;
        }
    } */
`;

export const Btn1 = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    word-break: keep-all;

    cursor: pointer;

    background: var(--Orange-600, #ff7710);
    border: 0px;

    @media screen and (max-width: 768px) {
        flex-direction: row;
    }
    @media screen and (max-width: 767px) {
        flex-shrink: 0;
        flex-direction: row;
    }

    @media screen and (max-width: 360px) {
        flex-direction: row;
    }
`;

export const Btn2 = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-shrink: 0;
    background: var(--Grey-500, #d1d4d8);

    word-break: keep-all;
    border-radius: 8px;
    border: 0px;

    cursor: pointer;
    @media screen and (max-width: 768px) {
        flex-direction: row;
    }
    @media screen and (max-width: 767px) {
        flex-shrink: 0;
        flex-direction: row;
    }

    @media screen and (max-width: 360px) {
        flex-direction: row;
    }
`;

export const StyledImg = styled.img`
    @media screen and (max-width: 767px) {
        display: flex;
        width: 64px;
        height: 64px;
        padding: 5.333px 5.493px 5.333px 5.174px;
        /* justify-content: center; */
        /* align-items: center; */
        flex-shrink: 0;
    }

    @media screen and (max-width: 360px) {
        display: flex;
        width: 64px;
        height: 64px;
        padding: 5.333px 5.493px 5.333px 5.174px;
        /* justify-content: center; */
        /* align-items: center; */
    }
`;

export const StyledImg2 = styled.img`
    @media screen and (max-width: 767px) {
        display: flex;
        width: 60px;
        height: 60px;
        padding: 5.333px 5.493px 5.333px 5.174px;
        /* justify-content: center; */
        /* align-items: center; */
        flex-shrink: 0;
    }

    @media screen and (max-width: 360px) {
        display: flex;
        width: 60px;
        height: 60px;
        padding: 5.333px 5.493px 5.333px 5.174px;
        /* justify-content: center; */
        /* align-items: center; */
    }
`;

export const Text1 = styled.div`
    color: var(--White, #fff);
    text-align: center;

    /* Title/32_Bold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */

    @media screen and (max-width: 768px) {
        color: var(--White, #fff);
        text-align: center;

        /* Title/32_Bold */
        font-family: Pretendard;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 48px */
    }
    @media screen and (max-width: 767px) {
        color: var(--White, #fff);
        text-align: center;

        /* Title/24_Bold */
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
    @media screen and (max-width: 360px) {
        color: var(--White, #fff);
        text-align: center;

        /* Title/24_Bold */
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
`;

export const Text2 = styled.div`
    color: var(--White, #fff);
    text-align: center;

    margin-left: 20px;
    /* Subtitle/20_Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    @media screen and (max-width: 768px) {
        color: var(--White, #fff);
        text-align: center;
        margin-left: 20px;

        /* Subtitle/20_Bold */
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 30px */
    }
    @media screen and (max-width: 767px) {
        color: var(--White, #fff);
        text-align: center;
        margin-left: 20px;

        /* Subtitle/14_Bold */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
    }
    @media screen and (max-width: 360px) {
        color: var(--White, #fff);
        text-align: center;
        margin-left: 20px;

        /* Subtitle/14_Bold */
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
    }
`;
export const Text3 = styled.div`
    color: var(--Grey-700, #868c94);
    text-align: center;
    /* Title/32_Bold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 48px */

    @media screen and (max-width: 768px) {
        color: var(--Grey-700, #868c94);
        text-align: center;
        /* Title/32_Bold */
        font-family: Pretendard;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 48px */
    }
    @media screen and (max-width: 767px) {
        color: var(--Grey-700, #868c94);
        text-align: center;
        /* Title/24_Bold */
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
    @media screen and (max-width: 360px) {
        color: var(--Grey-700, #868c94);
        text-align: center;
        /* Title/24_Bold */
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
`;
export const Text4 = styled.div`
    color: var(--Grey-700, #868c94);
    text-align: center;
    margin-left: 20px;

    /* Subtitle/20_Bold */
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    @media screen and (max-width: 768px) {
        color: var(--Grey-700, #868c94);
        text-align: center;
        margin-left: 20px;

        /* Subtitle/20_Bold */
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 30px */
    }

    @media screen and (max-width: 767px) {
        color: var(--Grey-700, #868c94);
        text-align: center;
        margin-left: 20px;

        /* Subtitle/14_Bold */
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
    }

    @media screen and (max-width: 360px) {
        color: var(--Grey-700, #868c94);
        text-align: center;
        margin-left: 20px;

        /* Subtitle/14_Bold */
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
    }
`;

/*FAQ 부분*/
export const Qbody3 = styled.div`
    div:first-of-type {
        border-top: 1px solid #212224;
    }

    width: 100%;
`;

export const Table = styled.div`
    border-bottom: 1px solid #212224;
    width: 1200px;
    box-sizing: border-box;
    padding: 25px 25px;

    color: #212224;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;

    /* layout */
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    :nth-child(1) {
        margin-right: 16px;
    }

    div:first-of-type {
        border-top: none;
    }

    .left-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    width: 100%;
`;

export const Ps2 = styled.div`
    color: #868c94;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 100px;

    @media screen and (max-width: 767px) {
        margin-bottom: 80px;
    }

    /*layout*/
    display: flex;
    margin-top: 64px;

    :nth-child(1) {
        margin-right: 24px;
    }

    :nth-child(2) {
        color: #212224;
        margin-right: 4px;
    }

    :nth-child(3) {
        color: #212224;
        font-weight: 700;
    }
`;

export const AnsTable = styled.div`
    background: #fff;
    width: 1200px;
    box-sizing: border-box;
    padding: 25px 25px;

    color: #4d5359;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;

    border-bottom: 1px solid #212224;

    /*layout */
    display: flex;
    flex-direction: row;
    align-items: center;

    :nth-child(1) {
        color: #868c94;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        margin-right: 16px;
    }

    :nth-child(2) {
        color: #4d5359;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
    }

    div:first-of-type {
        border-top: none;
    }

    @media screen and (max-width: 1280px) {
        width: 100%;
    }
`;
