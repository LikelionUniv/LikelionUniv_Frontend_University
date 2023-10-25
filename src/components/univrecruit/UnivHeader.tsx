import * as U from './UnivHeaderStyle';
import Arrow from '../../img/recruit/warrow.svg';
import gra2 from '../../img/recruit/gra.svg';

const Header = () => {
    return (
        <U.BlackDiv>
            <div>
                <U.T1>아기사자 모집</U.T1>
                <U.T2>
                    아기사자 모집 설명 아기사자 모집 설명 아기사자 모집 설명
                    아기사자 모집 설명아기사자 모집 설명 아기사자 모집 설명{' '}
                </U.T2>
                <U.T3>지원기간 : 0000/00/00 ~ 0000/00/00</U.T3>
                <U.Button>
                    <div>지원하기</div>
                    <img src={Arrow}></img>
                </U.Button>
            </div>

            <U.Gra src={gra2}></U.Gra>
        </U.BlackDiv>
    );
};

export default Header;
