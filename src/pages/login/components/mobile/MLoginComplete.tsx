import React from 'react';
import * as ML from './MLoginComplete.style';
import { NavigateFunction } from 'react-router-dom';

function MLoginComplete({ navigate }: NavigateFunction | any) {
    return (
        <ML.Container>
            <ML.ItemBox>
                <div className="img"></div>
                <p>
                    회원가입이 완료되었습니다!
                    <br />
                    운영진의 승인을 기다려주세요.
                </p>
                <ML.LButton onClick={navigate('/')}>홈으로 돌아가기</ML.LButton>
            </ML.ItemBox>
        </ML.Container>
    );
}

export default MLoginComplete;
