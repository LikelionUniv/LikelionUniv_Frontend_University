import { styled } from 'styled-components';
import { PostBoxWrapper } from './UserPostSelect';
import { Button } from './Common';

const Certificate = () => {
    return (
        <>
            <PostBoxWrapper>
                <Container>
                    <Left>멋쟁이사자처럼대학</Left>
                    <Button onClick={() => console.log('d')}>
                        수료증 발급
                    </Button>
                </Container>
            </PostBoxWrapper>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    padding: 0 40px 49px 40px;
    border-bottom: 1px solid rgba(234, 236, 238, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1200px) {
        padding: 0 24px 49px 24px;
    }
    @media screen and (max-width: 720px) {
        padding: 0 14px 25px 14px;
    }
`;
const Left = styled.div`
    font-weight: 700;
    font-size: 24px;
    @media screen and (max-width: 720px) {
        font-size: 20px;
    }
`;

export default Certificate;
