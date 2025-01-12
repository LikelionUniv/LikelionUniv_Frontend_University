import { styled } from 'styled-components';

const CommunityPost = () => {
    return (
        <CommunityPostWrapper>
            <PostTitle>글 제목</PostTitle>
            <PostSubInfo>
                <PostDate>2025.01.12</PostDate>
                <PostPlace>발행위치</PostPlace>
            </PostSubInfo>
        </CommunityPostWrapper>
    );
};

const CommunityList = () => {
    return (
        <CommunityListWrapper>
            <StartAndEndLine />
            <CommunityPost />
            <CommunityPost />
            <CommunityPost />
            <StartAndEndLine />
        </CommunityListWrapper>
    );
};

export default CommunityList;

const CommunityListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StartAndEndLine = styled.div`
    height: 3px;
    background-color: black;
    width: 100%;
`;

const CommunityPostWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #dcdfe3;
    height: 64px;
    align-items: center;
`;

const PostTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
`;

const PostSubInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 58px;

    @media (max-width: 768px) {
        gap: 32px;
    }

    @media (max-width: 430px) {
        gap: 16px;
    }
`;

const PostDate = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #868c94;
`;

const PostPlace = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #4d5359;
`;
