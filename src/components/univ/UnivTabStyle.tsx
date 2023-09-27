import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    background: var(--Grey-200, #f2f4f6);
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

// 참여 대학 페이지 대학 개수
export const CountText = styled.div`
    margin: 40px 0 40px;
    color: var(--Grey-900, #212224);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */

    :nth-child(2) {
        color: var(--Orange-600, #ff7710);
    }
`;

// 지역 탭 부분
export const TabWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 40px;
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

// 학교명들
export const SchoolWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 1200px;
    margin-top: 40px;
    gap: 24px;
`;

export const TabContent = styled.div`
    display: flex;
    align-items: center;
    max-width: 282px;
    min-width: 252px;
    height: 80px;
    padding: 12px;
    gap: 12px;
    flex-shrink: 0;
    border-radius: 8px;
    background: var(--White, #fff);
`;

export const SchoolLogo = styled.div<{ logo?: string }>`
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    background: ${props =>
        props.logo ? `url(${props.logo})` : 'lightgray 50% / cover no-repeat'};
`;

export const SchoolText = styled.div`
    color: var(--Grey-900, #212224);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */

    // 필요하면 나중 추가
    /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */

    :nth-child(1) {
        color: var(--Grey-800, #4d5359);
        font-size: 14px;
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
`;
