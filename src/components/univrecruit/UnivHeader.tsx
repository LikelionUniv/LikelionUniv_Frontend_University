import * as U from './UnivHeaderStyle';
import Arrow from '../../img/recruit/warrow.svg';
import gra2 from '../../img/recruit/gra.svg';
import useModal from '../../hooks/useModal';
import RecruitModal from '../recruit/apply/RecruitModal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();
    
    const onClick = (): void => {
        if (window.innerWidth > 450) {
            openModal();
        } else {
            navigate('babylion');
        }
    };

    return (
        <U.BlackDiv>
            <U.Content>
                <U.T1>신규 대학 모집</U.T1>
                <U.T2>
                    우리 학교에 ‘멋쟁이사자처럼 대학’ 동아리를 새롭게 만들고
                    싶다면, 아래 버튼을 눌러 지원해주세요!
                    <div>
                        * 기존에 '멋쟁이사자처럼 대학' 동아리가 존재하는
                        학교라면, 각 학교의 대표를 통해 문의해주세요.
                    </div>
                </U.T2>
                <U.T3>모집 기간 : 0000/00/00 ~ 0000/00/00</U.T3>
                <U.Button onClick={onClick}>
                    <div>지원하기</div>
                    <img src={Arrow} alt="->"></img>
                </U.Button>
            </U.Content>
            {isModalOpen && (
                <RecruitModal isOpen={isModalOpen} closeModal={closeModal} />
            )}

            <U.Gra src={gra2}></U.Gra>
        </U.BlackDiv>
    );
};

export default Header;
