import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { viewFloatingCountDownState } from '../../store/landing';

import * as F from './Footer.style';
import recruitimage from '../../img/landing/recruit_image.png';
import newrecruitimage from '../../img/landing/new_recruit_image.png';
import makersbackground from '../../img/landing/makers_background.png';
import notiicon from '../../img/landing/pixel_notice.svg';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';
import { ReactComponent as PixelArrowIcon } from '../../img/landing/pixel_arrow_upright.svg';
import FooterModal from '../recruit/FooterModal';
import FooterModalMobile from '../univrecruit//UnivModalMobile';
import { recruitURL } from './MainGraphic';

const recruitNotice = {
    title: '멋대 알림 신청',
    paragraph: `아기사자 모집 및 홈페이지 기능 추가 등
    멋대의 새로운 소식을 이메일로 알려드려요.`,
    btn: '멋대 알림 신청하기',
}

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
                        <a
                            className="btn"
                            href={recruitURL}
                            target="_blank"
                            rel="noreferrer"
                        >
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
                            <div>{recruitNotice.title}</div>
                        </div>
                        <div className="text">
                            {recruitNotice.paragraph}
                        </div>
                    </div>
                    <div className="btn" onClick={openModal}>
                        {recruitNotice.btn}
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
                        멋쟁이사자처럼 대학 홈페이지를 만든 사람들이 궁금하다면?
                    </div>
                    <a href="/about" className="btn">
                        제작자 보기 <PixelArrowIcon />
                    </a>
                </div>
            </F.Makers>
        </F.Wrapper>
    );
};

export default Footer;
