import React from 'react';
import styled from 'styled-components';
import eye from '../../img/donate/eye.svg';
import comment from '../../img/community/comment16.svg';
import { useNavigate } from 'react-router-dom';
import { IPost } from './DonateComponentInner';

interface DonatePostBoxProps {
    post: IPost;
}

function DonatePostBox({ post }: DonatePostBoxProps) {
    const navigate = useNavigate();

    const goDetail = (id: number) => {
        navigate(`/donate/${id}`);
    };

    return (
        <Wrapper onClick={() => goDetail(post.donationHistoryId)}>
            <Title>{post.title}</Title>
            <MetaInfo>
                <Profile
                    style={{
                        backgroundImage: `url(${post.authorProfileImage})`,
                    }}
                />
                <User className="user">{post.authorName}</User>
                <Date className="date">{post.createdDate}</Date>
                <ShownCount>
                    <Eye src={eye} alt="eye" className="eye" />
                    <ShownNumber>{post.viewCount}</ShownNumber>
                </ShownCount>
            </MetaInfo>
        </Wrapper>
    );
}

export default DonatePostBox;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 64px;

    border-top: 1px solid var(--Grey-400, #dcdfe3);

    &:last-child {
        border-bottom: 1px solid var(--Grey-400, #dcdfe3);
    }
`;

const Title = styled.p`
    max-width: 500px;
    width: 100%;
    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`;

const MetaInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 270px;     
    
    @media screen and (max-width: 767px) {
        min-width: 200px;
    }
`;

const Profile = styled.img`
    background-repeat: no-repeat;
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    background-size: cover;
    border-radius: 50%;
    border: 0.5px solid #eaecee;
    margin-right: 6px;

    @media screen and (max-width: 767px) {
        width: 20px;
        height: 20px;
    }
`;

const User = styled.p`
    margin-right: 35px;
    color: var(--Grey-900, #212224);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    height: 21px;
    white-space: nowrap;
        
    @media screen and (max-width: 767px) {
        margin-right: 10px;
    }
`;

const Date = styled.p`
    margin-right: 27px;
    color: var(--Grey-700, #868c94);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    white-space: nowrap;
    
    @media screen and (max-width: 767px) {
        margin-right: 8px;
    }
`;

const ShownCount = styled.div`
    display: flex;
    align-items: center;
`;

const Eye = styled.img`
    height: 16px;
    background-repeat: no-repeat;
    background-image: url(${eye});
    margin-right: 5px;
`;

const ShownNumber = styled.p`
    color: var(--Grey-700, #868c94);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    white-space: nowrap;
`;
