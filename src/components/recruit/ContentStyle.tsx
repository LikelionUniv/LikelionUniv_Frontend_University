import { styled } from 'styled-components';

/* 전체 layout */
export const ContentDiv = styled.div`
    padding-top: 160px;
    color: #f2f4f6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: Pretendard;
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
`;

/* 전체 Title 한글 버전 */
export const TD = styled.div`
    color: #212224;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
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
    row-gap: 40px;
    box-sizing: border-box;
    width: 1200px;
    margin-bottom: 160px;
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
    width: 264px;
`;

/* Recruitment schedule 부분 */

export const Qbody2 = styled.div`
    color: #212224;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    width: 1100px;

    /* layout */
    display: flex;
    justify-content: space-between;
    margin-bottom: 33px;
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

/*FAQ 부분*/
export const Qbody3 = styled.div`
    div:first-of-type {
        border-top: 1px solid #212224;
    }

    width: 1100px;
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
`;

export const Ps2 = styled.div`
    color: #868c94;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 160px;

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
`;
