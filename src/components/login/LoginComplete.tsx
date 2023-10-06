import styled from 'styled-components'
import Check from '../../img/login/Check.svg'
import {Button} from '../mypage/Common';

export const LoginComplete = () => {

    return (
        <Wrapper>
            <Container>
                <ItemBox>
                    <div className='img'>

                    </div>
                    <p>
                    회원가입이 완료되었습니다!<br/>
                    운영진의 승인을 기다려주세요.
                    </p>
                    <LButton>홈으로 돌아가기</LButton>
                </ItemBox>
            </Container>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width : 1200px;
    height  : 90vh;
    margin : 0 auto;
`;


const Container = styled.div`
    display : flex;
    height : 100%;
    justify-content :center;
    align-items :center;
`;

const ItemBox =  styled.div`
    width : 290px;
    margin : 0 auto;
    display : flex;
    flex-direction : column;
    align-items : center;
    & > .img {
        width : 200px;
        height : 200px;
        background-image : url(${Check});
    }
    & > p{
        margin-top : 24px;
        color: var(--Grey-900, #212224);
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        line-height: 150%; /* 36px */
    }
`;

const LButton = styled(Button)`
    margin-top :56px;
    width : 182px;
    height : 56px;
    font-size:20px;
`;