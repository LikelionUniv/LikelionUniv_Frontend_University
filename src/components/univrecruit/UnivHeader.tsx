import * as U from './UnivHeaderStyle';
import Arrow from '../../img/recruit/warrow.svg';
import gra2 from '../../img/recruit/gra.svg';

const Header = () => {
    return (
        <U.BlackDiv>
            <U.Content>
                <U.T1>대학 리쿠르팅</U.T1>
                <U.T2>
                    대학 리크루팅에 대한 설명 대학 리크루팅에 대한 설명 대학 리크루팅에 대한 설명 
                    대학 리크루팅에 대한 설명 대학 리크루팅에 대한 설명 대학 리크루팅에 대한 설명 {' '}
                </U.T2>
                <U.T3>지원기간 : 0000/00/00 ~ 0000/00/00</U.T3>
                <U.Button>
                    <div>지원하기</div>
                    <img src={Arrow}></img>
                </U.Button>
            </U.Content>

            <U.Gra src={gra2}></U.Gra>
        </U.BlackDiv>
    );
};

export default Header;
