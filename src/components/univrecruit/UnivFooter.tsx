import { useState } from 'react';
import fArrow from '../../img/recruit/footerArrow.svg';
import * as F from './UnivFooterStyle';
import FooterModal from './UnivFooterModal';

const UnivFooter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <F.UnivFooterWrapper>
                <F.UnivText>모집 알림 신청하고 멋쟁이사자처럼에서 만나요!</F.UnivText>
                <F.UnivBtn onClick={openModal}>
                    모집 알림 신청하기
                    <img src={fArrow} alt="버튼화살표" />
                </F.UnivBtn>
            </F.UnivFooterWrapper>
            <FooterModal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
};

export default UnivFooter;
