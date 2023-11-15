import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { viewFloatingCountDownState } from '../../store/landing';

import * as F from './Footer.style';
import recruitimage from '../../img/landing/recruit_image.png';
import newrecruitimage from '../../img/landing/new_recruit_image.png';
import makersbackground from '../../img/landing/makers_background.png';
import { ReactComponent as Logo } from '../../img/nav/logo.svg';
import notiicon from '../../img/landing/pixel_notice.svg';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';
import { ReactComponent as PixelArrowIcon } from '../../img/landing/pixel_arrow_upright.svg';
import { ReactComponent as EmailIcon } from '../../img/landing/footer_email.svg';
import { ReactComponent as InstagramIcon } from '../../img/landing/footer_instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../img/landing/footer_youtube.svg';
import { ReactComponent as BrunchIcon } from '../../img/landing/footer_brunch.svg';
import { ReactComponent as ArrowIcon } from '../../img/landing/footer_arrow.svg';
import { ReactComponent as DownloadIcon } from '../../img/landing/footer_download.svg';
import FooterModal from '../recruit/FooterModal';
import FooterModalMobile from '../univrecruit//UnivModalMobile';
import { recruitURL } from './MainGraphic';

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
    // 카운트다운 플로팅 버튼을 띄우기 위한 옵저버
    const [isView, setIsView] = useRecoilState(viewFloatingCountDownState);
    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0)
                    setIsView(prev => ({ top: prev.top, bottom: true }));
                else setIsView(prev => ({ top: prev.top, bottom: false }));
            });
        },
        {
            rootMargin: '-150px',
        },
    );
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (targetRef.current) io.observe(targetRef.current);
    }, []);

    return (
        <F.Wrapper ref={targetRef}>
            <F.Recruit>
                <div className="container">
                    <div className="left">
                        <div className="title">12기 신규 대학 모집 중!</div>
                        <div className="text">
                            우리 학교에 ‘멋쟁이사자처럼 대학’ 동아리를 새롭게
                            만들고 싶다면, 아래 버튼을 눌러 지원해주세요!
                            (~2023. 12. 10)
                        </div>
                        <a className="btn" href={recruitURL} target="_blank">
                            신규 대학 지원하기
                            <PixelLongArrowIcon fill="#212224" />
                        </a>
                    </div>
                    <div className="img-rect">
                        <img src={newrecruitimage} />
                    </div>
                </div>
            </F.Recruit>
            <F.Notification>
                <div className="container">
                    <div className="left">
                        <div className="title">
                            <img src={notiicon} />
                            <div>12기 아기사자 모집 알림 신청</div>
                        </div>
                        <div className="text">
                            모집이 시작되면 이메일과 문자로 알려드려요.
                        </div>
                    </div>
                    <div className="btn" onClick={openModal}>
                        모집 알림 신청하기
                        <PixelLongArrowIcon fill="#212224" />
                    </div>
                </div>
                {isMobileView ? (
                    <FooterModalMobile
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                    />
                ) : (
                    <FooterModal isOpen={isModalOpen} closeModal={closeModal} />
                )}
            </F.Notification>
            <F.Makers>
                <img src={makersbackground} />
                <div className="makers-container">
                    <div className="text">
                        멋쟁이사자처럼 홈페이지를 만든 사람들이 궁금하다면?
                    </div>
                    <a href="/about" className="btn">
                        제작자 보기 <PixelArrowIcon />
                    </a>
                </div>
            </F.Makers>
            <F.Info>
                <div className="container">
                    <div className="left">
                        <Logo />
                        <p className="text">
                            사단법인 멋쟁이사자처럼 | 대표자 이두희
                        </p>
                        <p className="text">
                            서울특별시 종로구 종로3길 17, D1동 16, 17층(청진동,
                            D타워)
                        </p>
                        <p className="text">등록번호 : 206-82-13812</p>
                        <p className="text mail">
                            <EmailIcon />
                            문의처
                            <a href="mailto:univ_admin@likelion.net">
                                univ_admin@likelion.net
                            </a>
                        </p>
                        <div className="icon-container">
                            <a
                                href="https://www.instagram.com/likelion.official"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="https://www.youtube.com/@likelion.official"
                                target="_blank"
                            >
                                <YoutubeIcon />
                            </a>
                            <a
                                href="https://brunch.co.kr/@likelion"
                                target="_blank"
                            >
                                <BrunchIcon />
                            </a>
                            <a href="/about" className="makers-btn">
                                제작자
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="section">
                            <div className="title">FAMILY SITE</div>
                            <a
                                href="https://techit.education"
                                target="_blank"
                                className="link text"
                            >
                                TECHIT <ArrowIcon />
                            </a>
                            <a
                                href="https://www.modernlion.io"
                                target="_blank"
                                className="link text"
                            >
                                MODERN LION <ArrowIcon />
                            </a>
                        </div>
                        <div className="section">
                            <div className="title">POLICY</div>
                            <div className="text">회칙</div>
                            <div className="text">개인정보처리방침</div>
                            <div className="text">
                                Nonprofit Report <DownloadIcon />
                            </div>
                            <div className="text">
                                지정기탁신청서 <DownloadIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </F.Info>
        </F.Wrapper>
    );
};

export default Footer;
