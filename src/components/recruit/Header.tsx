import * as R from './HeaderStyle';
import Arrow from '../../img/recruit/warrow.svg';
import gra2 from '../../img/recruit/gra2.svg';

const Header = () => {
    return (
        <R.BlackDiv>
            <div>
                <R.T1>아기사자 모집</R.T1>
                <R.T2>
                    아기사자 모집 설명 아기사자 모집 설명 아기사자 모집 설명
                    아기사자 모집 설명아기사자 모집 설명 아기사자 모집 설명{' '}
                </R.T2>
                <R.T3>지원기간 : 0000/00/00 ~ 0000/00/00</R.T3>
                <R.Button>
                    <div>지원하기</div>
                    <img src={Arrow}></img>
                </R.Button>
            </div>

            <R.Gra src={gra2}></R.Gra>
        </R.BlackDiv>
    );
};

export default Header;
