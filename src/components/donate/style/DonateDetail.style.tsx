import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 792px;
    margin: 100px auto;
`;

export const Title = styled.div`
    width: 100%;
    margin-bottom: 16px;
    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const Body = styled.div`
    width: 100%;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-bottom: 16px;
`;

export const Left = styled.div`
    display: flex;
`;

export const Right = styled.div`
    display: flex;
`;

export const Profile = styled.img`
    margin-right: 8px;
`;

export const User = styled.div`
    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const CreatedAt = styled.div`
    margin-right: 31px;
    color: var(--Grey-800, #4d5359);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const Eye = styled.img`
    margin-right: 4px;
`;

export const ViewCount = styled.div`
    margin-right: 19px;
    color: var(--Grey-800, #4d5359);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

export const Attatchments = styled.div`
    width: 100%;
    padding: 16px 0;
    border-top: 1px solid var(--Grey-300, #eaecee);
    border-bottom: 1px solid var(--Grey-300, #eaecee);
`;

export const Attatchment = styled.div`
    display: flex;
    margin-bottom: 8px;

    color: var(--Grey-800, #4d5359);

    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Download = styled.img`
    margin-left: 4px;

    &:hover {
        cursor: pointer;
    }
`;

export const Payload = styled.div`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 100px;
    color: var(--Grey-900, #212224);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    white-space: pre-line;
`;

export const BackBtn = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    margin: 0 auto;

    &:hover {
        cursor: pointer;
    }
`;

export const BtnText = styled.div`
    margin-left: 8px;
    color: var(--Grey-900, #212224);
    text-align: center;

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const BtnIcon = styled.img``;
