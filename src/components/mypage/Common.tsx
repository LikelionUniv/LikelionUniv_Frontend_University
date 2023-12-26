import styled from 'styled-components';
import profile from '../../img/mypage/default_profile.svg';

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
