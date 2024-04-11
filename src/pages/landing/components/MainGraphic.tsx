import * as MG from './MainGraphic.style';
import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useRecoilState } from 'recoil';
//import { viewFloatingCountDownState } from '../../store/landing';

import maintext from '../../../img/landing/main_text.png';
import mainimage from '../../../img/landing/main_image.png';
import desimage from '../../../img/landing/des_image.png';
import { ReactComponent as PixelLongArrowIcon } from '../../../img/landing/pixel_long_right_arrow.svg';
import { ReactComponent as PixelFireworksIcon } from '../../../img/landing/pixel_fireworks.svg';
import { ReactComponent as PixelSingingIcon } from '../../../img/landing/pixel_singing.svg';
import { ReactComponent as PixelLionIcon } from '../../../img/landing/pixel_lion.svg';
import CountDown, { targetDate } from './CountDown';
import FooterModalMobile from '../../recruit/components/FooterModal';
import { currentWidthState } from '../../../atoms/landing';
import FooterModal from '../../recruit/components/FooterModal';

export const recruitURL = ' https://forms.gle/j4CJ35VwWgePBEJX6';

const MainGraphic = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isPC, setIsPC] = useState<boolean>(true);
    const desRef1 = useRef<HTMLDivElement>(null);
    const desRef2 = useRef<HTMLImageElement>(null);
    const [desWidth, setDesWidth] = useRecoilState(currentWidthState);
    useEffect(() => {
        const handleResize = debounce(() => {
            setWidth(window.innerWidth);
        }, 200);
        window.addEventListener(`resize`, handleResize);
        return () => {
            window.removeEventListener(`resize`, handleResize);
        };
    }, []);
    useEffect(() => {
        if (width > 768) setIsPC(true);
        else setIsPC(false);
    }, [width]);
    useEffect(() => {
        if (!desRef1.current || !desRef2.current) return;
        setDesWidth(
            desRef2.current.offsetLeft -
                desRef1.current.offsetLeft +
                desRef2.current.offsetWidth,
        );
    }, [desRef1, desRef2, width]);

    // 카운트다운 플로팅 버튼을 띄우기 위한 옵저버
    // const [isView, setIsView] = useRecoilState(viewFloatingCountDownState);
    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                //  if (entry.intersectionRatio > 0)
                //   setIsView(prev => ({ top: true, bottom: prev.bottom }));
                //  else setIsView(prev => ({ top: false, bottom: prev.bottom }));
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

    const [isCountDownView, setIsCountDownView] = useState<boolean>(false);

    useEffect(() => {
        setIsCountDownView(
            new Date(targetDate).getTime() - new Date().getTime() > 0,
        );
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <MG.Wrapper>
            <div ref={targetRef} className="refDiv">
                <MG.Background isCountDownView={isCountDownView}>
                    <div>
                        <div className="inner">
                            <img src={maintext} />
                            {/* <div className="new-text">
                                12기 신규 대학 모집 중!
                            </div>
                            <div className="hide-text" />
                            <CountDown isCountDownView={isCountDownView} /> */}
                            <button className="btn" onClick={openModal}>
                                멋대 알림 신청하기
                                <PixelLongArrowIcon fill="#ffffff" />
                            </button>
                        </div>
                    </div>
                    <img src={mainimage} />
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
                </MG.Background>
                <MG.Line ref={targetRef}>
                    {[1, 2].map(item => (
                        <div
                            className={
                                item === 1
                                    ? 'track track1'
                                    : item === 2
                                    ? 'track track2'
                                    : ''
                            }
                            key={item}
                        >
                            {[1, 2, 3, 4].map(item => (
                                <div className="flex" key={item}>
                                    <PixelFireworksIcon />
                                    <PixelSingingIcon />
                                    <div className="spacemono text">
                                        Possibility to Reality
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </MG.Line>
            </div>
            <MG.Description>
                <div className="container" ref={desRef1}>
                    <div className="title">국내 최대 규모 IT 창업 동아리</div>
                    <div className="title">
                        <PixelLionIcon />
                        사단법인 멋쟁이사자처럼이
                    </div>
                    <div className="title">운영합니다.</div>
                    <div className="subtitle">
                        ”내 아이디어를 내 손으로 실현하자!”
                    </div>
                    <div className="text">
                        2013년, 서울대학교에서 이두희 대표를 필두로 시작된
                        ‘멋쟁이사자처럼 대학’. 현재는 국내외 121개 대학, 4천여
                        명이 활동하는 국내 최대 규모의 IT 창업 동아리로
                        자리매김하였습니다. “내 아이디어를 내 손으로 실현한다”는
                        모토로, 누구든지 자신이 원하는 IT 서비스를 구현할 수
                        있도록 각종 스터디와 네트워킹, 행사를 지원하고 있죠.
                    </div>
                    <div className="subtitle">
                        ”Growl to World, 이제는 세계로”
                    </div>
                    <div className="text">
                        2024년, 멋쟁이사자처럼 대학은 대한민국과 미국의
                        커뮤니티를 연결하여 “Growl to World”라는 비전을 실현하기
                        위해 전 세계로 뻗어 나갑니다. 글로벌 IT 창업 인재들이
                        함께 성장하는 커뮤니티로 발돋움할 멋쟁이사자처럼 대학의
                        미래를 함께 기대해주세요! 2013년, 뜨거운 마음에서 일어난
                        작은 불씨가 세상을 어떻게 변화시킬까요?
                    </div>
                </div>
                <img className="desimage" src={desimage} ref={desRef2} />
            </MG.Description>
        </MG.Wrapper>
    );
};

export default MainGraphic;
