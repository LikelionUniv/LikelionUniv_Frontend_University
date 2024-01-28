import { NavigateFunction } from 'react-router-dom';

import * as WL from './WLoginComplete.style';

export default function WLoginComplete({ navigate }: NavigateFunction | any) {
    return (
        <WL.Container>
            <WL.ItemBox>
                <div className="img"></div>
                <p>
                    회원가입이 완료되었습니다!
                    <br />
                    운영진의 승인을 기다려주세요.
                </p>
                <WL.LButton
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    홈으로 돌아가기
                </WL.LButton>
            </WL.ItemBox>
        </WL.Container>
    );
}
