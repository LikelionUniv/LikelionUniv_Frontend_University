import { useState } from 'react';

import styled from 'styled-components';
import { Avatar, Button, UserBox } from './Common';
import { UserFollows } from './UserFollows';

export const UserInfo = () => {
    const [isModal, setIsModal] = useState<string | undefined>('');

    const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsModal(e.currentTarget.dataset.type);
    };

    return (
        <Wrapper>
            <Container>
                <UserBox>
                    <Avatar />
                    {/* 유저 정보 넣기 */}
                    <UserProfile>
                        <UserName>
                            {' '}
                            <p>박혜준</p> <div>아기사자</div>{' '}
                        </UserName>
                        <UserPart>
                            {' '}
                            <p>홍익대학교 기획디자인</p>
                            <FItem data-type="팔로워" onClick={handleModal}>
                                {' '}
                                팔로워 200
                            </FItem>
                            <FItem data-type="팔로잉" onClick={handleModal}>
                                {' '}
                                팔로잉 200
                            </FItem>
                        </UserPart>
                        <p>
                            행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요행복하세요
                        </p>
                    </UserProfile>
                </UserBox>
                <Button>내 정보 수정</Button>
                {isModal ? (
                    <UserFollows modal={isModal} setter={setIsModal} />
                ) : (
                    ''
                )}
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    height: 100%;
`;

const Container = styled.div`
    /* max-width : 1200px; */
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`;

const UserProfile = styled.div`
    //width : 344px;
    margin-top: 12px;
    margin-left: 24px;

    & > p {
        margin-top: 16px;
        color: var(--Grey-900, #212224);
        font-size: 18px;
        font-weight: 500;
    }
`;

const UserName = styled.div`
    position: relative;

    & > p {
        display: inline-flex;
        font-size: 28px;
        font-weight: 700;
        line-height: 115%;
        vertical-align: bottom;
    }
    & > div {
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
    }
`;
const UserPart = styled.div`
    display: flex;
    margin-top: 6px;
    & > p {
        font-size: 16px;
        font-weight: 700;
    }

    & > div {
        cursor: pointer;
        margin-left: 6px;
        font-size: 16px;
        font-weight: 500;
        color: #868c94;
    }
`;

const FItem = styled.div`
    cursor: pointer;
    margin-left: 6px;
    font-size: 16px;
    font-weight: 500;
    color: #868c94;

    &::before {
        content: '· ';
    }
`;
