import { useEffect, useState } from 'react';
import fArrow from '../../img/recruit/footerArrow.svg';
import * as F from './UnivFooterStyle';
import FooterModal from './UnivFooterModal';
import FooterModalMobile from './UnivFooterModal';
import { ReactComponent as ArrowIcon } from '../../img/arrow_up_right.svg';
import useIsPC from '../../hooks/useIsPC';
import UnivFooterATag from './UnivFooterATag';

const UnivFooter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 767);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isPC = useIsPC();

    return (
        <>
            <F.UnivFooterWrapper>
                <F.UnivText>
                    모집 알림 신청하고 {!isPC && <br />}멋쟁이사자처럼에서
                    만나요!
                </F.UnivText>
                <F.UnivBtn onClick={openModal}>
                    모집 알림 신청하기
                    <img src={fArrow} alt="버튼화살표" />
                </F.UnivBtn>
            </F.UnivFooterWrapper>

            <FooterModalMobile isOpen={isModalOpen} closeModal={closeModal} />

            <F.Info>
                <div className="container">
                    <div className="left">
                        <div className="title">LIKELION</div>
                        <div className="text">© 2023 Likelion.</div>
                        {!isPC && <UnivFooterATag />}
                    </div>
                    <div className="right">
                        {isPC && <UnivFooterATag />}
                        <a href="/" target="_blank" className="btn">
                            제작자
                        </a>
                    </div>
                </div>
            </F.Info>
        </>
    );
};

export default UnivFooter;
