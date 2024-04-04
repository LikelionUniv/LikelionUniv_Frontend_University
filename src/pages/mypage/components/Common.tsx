import styled from 'styled-components';
import profile from '../../../img/mypage/default_profile.svg';

export function convertPart(role: string) {
    const roleDict: { [key: string]: string } = {
        ADMIN: '관리자',
        PM: '기획',
        DESIGNER: '디자인',
        PM_DESIGNER: '기획디자인',
        FRONTEND: '프론트엔드',
        BACKEND: '백엔드',
    };

    if (role in roleDict) {
        return roleDict[role];
    }

    const reversedDict: { [key: string]: string } = Object.entries(
        roleDict,
    ).reduce((acc, [key, value]) => ({ ...acc, [value]: key }), {});

    return reversedDict[role] || role;
}

export const UserBox = styled.div`
    //width : 1075px;
    height: 124px;
    display: flex;
`;

export const Avatar = styled.div<{ imgurl?: string | null }>`
    width: 124px;
    height: 124px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid #eaecee;

    background-image: url(${props => props.imgurl || profile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Button = styled.div`
    width: 125px;
    height: 48px;
    border-radius: 8px;
    background-color: #ff7710;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
`;
