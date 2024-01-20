import styled from 'styled-components';

export const ProfileBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    margin-left: 24px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const UserName = styled.div`
    font-size: 28px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const UserRole = styled.div`
    display: inline-flex;
    width: 81px;
    height: 33px;
    margin-left: 8px;
    border-radius: 42px;
    background-color: #fff2e8;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-weight: 700;
    color: #ff7710;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        width: 68px;
        height: 22px;
    }
`;

export const UserUnivPart = styled.div`
    font-size: 16px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const UserFollow = styled.div`
    cursor: pointer;
    margin-left: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #868c94;

    &::before {
        content: '· ';
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const UserDescription = styled.p`
    line-height: 150%;
    color: var(--Grey-900, #212224);
    font-size: 18px;
    font-weight: 500;

    word-break: break-all;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
