import React from 'react';
import * as H from './HeaderStyle';
import { ReactComponent as ArrowIcon } from '../../img/about/arrow_left.svg';
import useIsPC from '../../hooks/useIsPC';

const Header = () => {
    const isPC = useIsPC();

    return (
        <H.Wrapper>
            <H.T1>
                <a href="/" className="link">
                    <ArrowIcon />
                    서비스 구경하러 가기
                </a>
            </H.T1>
            <H.T2>Likelion Univ.</H.T2>
            <H.T3>
                Likelion Univ. 제작자들은 멋쟁이사자처럼 대학의 일원들로
                구성되어 있습니다.
                <br />
                멋쟁이사자차럼의 네트워킹과 소통의 편리함을 제공하고 있으며,
                {isPC && <br />}
                서비스 운영의 인프라 구축을 위해 노력하고 있습니다.
            </H.T3>
        </H.Wrapper>
    );
};

export default Header;
