import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    background: var(--Grey-200, #f2f4f6);
    width: 100%;

    box-sizing: border-box;
    padding: 0 40px;

    @media screen and (max-width: 767px) {
        padding: 0 20px;
    }
`;

export const Content = styled.section`
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
`;

// 참여 대학 페이지 텍스트
export const Text = styled.div`
    margin-top: 100px;
    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
`;

// 지역 탭 부분
export const TabWrapper = styled.div`
    display: flex;
    width: 1200px;
    align-items: flex-start;
    align-content: flex-start;
    margin-top: 40px;
    gap: 4px;
    flex-wrap: wrap;

    width: 100%;

    @media screen and (max-width: 767px) {
        margin-top: 24px;
    }
`;

export const TabRegion = styled.button<{ active: boolean }>`
    padding: 4.5px 14px;
    border-radius: 28px;
    cursor: pointer;

    background-color: ${props =>
        props.active ? 'var(--Orange-600, #FF7710)' : 'var(--White, #FFF)'};

    color: ${props =>
        props.active ? 'var(--White, #FFF)' : 'var(--Grey-700, #868C94)'};

    border: ${props =>
        props.active
            ? '1px solid var(--Orange-600, #FF7710)'
            : '1px solid var(--Grey-400, #DCDFE3)'};
`;

export const TabContent = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    padding: 12px;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 8px;
    box-sizing: border-box;
    background: var(--White, #fff);
    overflow: hidden;

    /* @media screen and (min-width: 768px) {
        width: calc(50% - 24px);
    }

    @media screen and (min-width: 896px) {
        width: calc(33.33% - 24px);
    }

    @media screen and (max-width: 1280px) {
        width: 256px;
    }

    @media screen and (min-width: 1281px) and (max-width: 1920px) {
        width: 282px;
    } */

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: auto;
    }
`;

export const SchoolWrapper = styled.div`
    /* display: flex;
    align-items: center;
    flex-wrap: wrap; */
    margin-top: 40px;
    gap: 24px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 1175px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 895px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
    }

    @media screen and (max-width: 570px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }
`;

export const SchoolLogo = styled.div`
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 50%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const SchoolText = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
    // 필요하면 나중 추가
    /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
    :nth-child(1) {
        color: var(--Grey-800, #4d5359);
        font-size: 12px;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
`;

// 멋사 참여하기 버튼
export const BtnWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    width: 1200px;
    margin-top: 56px;
    margin-bottom: 160px;

    gap: 16px;

    :nth-child(1) {
        color: var(--Grey-700, #868c94);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 24px */
    }

    width: 100%;
`;

export const Btn = styled.div`
    display: flex;
    padding: 16px 32px;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    background: var(--Grey-900, #212224);

    color: var(--White, #fff);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    cursor: pointer;

    &:hover {
        background: var(--Orange-600, #ff7710);
    }

    @media screen and (max-width: 767px) {
        padding: 16px;
        font-size: 16px;

        & > img {
            width: 36px;
            height: 24px;
        }
    }
`;
