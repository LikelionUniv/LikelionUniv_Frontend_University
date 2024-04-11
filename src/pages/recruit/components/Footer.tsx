import React, { useState } from 'react';
import fArrow from '../../../img/recruit/footerArrow.svg';
import * as F from './FooterStyle';
import FooterModal from './FooterModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <F.FooterWrapper>
                <F.Text>모집 알림 신청하고 멋쟁이사자처럼에서 만나요!</F.Text>
                <F.Btn onClick={openModal}>
                    모집 알림 신청하기
                    <img src={fArrow} alt="버튼화살표" />
                </F.Btn>
            </F.FooterWrapper>
            <FooterModal isOpen={isModalOpen} closeModal={closeModal} />
        </>
    );
};

export default Footer;
