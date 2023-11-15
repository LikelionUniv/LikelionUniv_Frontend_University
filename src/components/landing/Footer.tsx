import { useEffect, useState } from 'react';

import * as F from './Footer.style';
import recruitimage from '../../img/landing/recruit_image.png';
import makersbackground from '../../img/landing/makers_background.png';
import { ReactComponent as Logo } from '../../img/nav/logo.svg';
import { ReactComponent as PixelNoticeIcon } from '../../img/landing/pixel_notice.svg';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';
import { ReactComponent as PixelArrowIcon } from '../../img/landing/pixel_arrow_upright.svg';
import FooterModal from '../recruit/FooterModal';
import FooterModalMobile from '../univrecruit//UnivModalMobile';

const Footer = () => {
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
    return (
        <F.Wrapper>
            <F.Recruit>
                <div className="container">
                    <div className="left">
                        <div className="title">
                            모집 알림 <PixelNoticeIcon /> 신청
                        </div>
                        <div className="text">
                            모집이 시작되면 이메일과 카톡으로 안내받고, <br />
                            멋쟁이사자처럼에 합류해 보세요!
                        </div>
                        <button className="btn" onClick={openModal}>
                            모집 알림 신청하기 <PixelLongArrowIcon />
                        </button>
                    </div>
                    {isMobileView ? (
                        <FooterModalMobile
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    ) : (
                        <FooterModal
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    )}
                    <div className="img-rect">
                        <img src={recruitimage} />
                    </div>
                </div>
            </F.Recruit>
            <F.Makers>
                <img src={makersbackground} />
                <div className="container">
                    <div className="text">
                        멋쟁이사자처럼 홈페이지를 만든 사람들이 궁금하다면?
                    </div>
                    <a href="/" target="_blank" className="btn">
                        제작자 보기 <PixelArrowIcon />
                    </a>
                </div>
            </F.Makers>
            <F.Info>
                <div className="container">
                    <div className="left">
                        <Logo className="title" />
                        <p className="text">
                            (주)멋쟁이사자처럼 | 대표이사 이두희
                        </p>
                        <p className="text">
                            서울특별시 종로구 종로3길 17 D타워, 16-17층
                        </p>
                        <p className="text">
                            사업자 번호 : 264-88-01106 | 통신판매업 신고번호 :
                            2019 - 서울강남 - 00774
                        </p>
                        <p className="text">문의처 contact@likelion.net</p>
                    </div>
                </div>
            </F.Info>
        </F.Wrapper>
    );
};

export default Footer;
