import styled, { css } from 'styled-components';
import { Avatar, Button } from './Common';
import { Ifollows } from './type';
import { useState } from 'react';
import { useFollowAddDelete } from '../../api/mypage/useFollowAddDelete';

interface IbuttonProps {
    delete: boolean;
}

export const FollowBox = ({
    userId,
    name,
    ordinal,
    part,
    profileImage,
    isFollowed,
}: Ifollows) => {
    const [isFollow, setisFollow] = useState(isFollowed);
    const { mutate: handleFollowAddDelete } = useFollowAddDelete(
        userId,
        setisFollow,
    );

    return (
        <Follow>
            <FollowInfo>
                <FollowAvatar imgurl={profileImage} />
                <FollowProfile>
                    <p className="inner_name">{name}</p>
                    <p className="inner_info">
                        {ordinal} {part}
                    </p>
                </FollowProfile>
            </FollowInfo>
            <FollowBtn
                delete={isFollow}
                onClick={() => {
                    handleFollowAddDelete(isFollow);
                }}
            >
                {isFollow ? '삭제' : '팔로우'}
            </FollowBtn>
        </Follow>
    );
};

export const Follow = styled.div`
    /* width: 100%; // 줄어들어야함. */
    height: 64px;
    margin-top: 16px;
    padding: 0 24px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FollowInfo = styled.div`
    width: 165px;
    height: 64px;
    display: flex;
`;

const FollowAvatar = styled(Avatar)`
    width: 64px;
    height: 64px;
`;

const FollowProfile = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 25px;

    & > .inner_name {
        color: var(--Grey-900, #212224);
        font-size: 16px;
        font-weight: 700;
    }
    & > .inner_info {
        color: var(--Grey-800, #4d5359);
        font-size: 14px;
        font-weight: 500;
    }
`;

export const FollowBtn = styled(Button)<IbuttonProps>`
    width: 91px;
    height: 32px;
    font-size: 14px;
    ${props =>
        props.delete &&
        css`
            background-color: #eaecee;
            color: #4d5359;
        `}
`;
