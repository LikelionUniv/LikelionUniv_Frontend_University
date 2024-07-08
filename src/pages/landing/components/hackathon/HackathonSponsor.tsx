import * as IF from '../Information.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import logo1 from '../../../../img/landing/sponsor/logo1.svg';
import logo2 from '../../../../img/landing/sponsor/logo2.svg';
import logo3 from '../../../../img/landing/sponsor/logo3.svg';
import logo4 from '../../../../img/landing/sponsor/logo4.svg';
import logo5 from '../../../../img/landing/sponsor/logo5.svg';
import logo6 from '../../../../img/landing/sponsor/logo6.svg';
import logo7 from '../../../../img/landing/sponsor/logo7.svg';
import logo8 from '../../../../img/landing/sponsor/logo8.svg';
import logo9 from '../../../../img/landing/sponsor/logo9.svg';
import logo10 from '../../../../img/landing/sponsor/logo10.svg';
import logo11 from '../../../../img/landing/sponsor/logo11.svg';
import logo12 from '../../../../img/landing/sponsor/logo12.svg';

const SponsorInfo = () => {
    SwiperCore.use([Autoplay]);
    return (
        <IF.SwiperWrapper>
            <Swiper
                loop={true}
                loopedSlides={4}
                slidesPerView={2}
                spaceBetween={24}
                freeMode={true}
                mousewheel={true}
                breakpoints={{
                    0: {
                        spaceBetween: 12,
                    },
                    768: {
                        spaceBetween: 18,
                    },
                    1280: {
                        spaceBetween: 24,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
                {serviceList.map(item => (
                    <SwiperSlide key={item.id}>
                        <a href={item.url} target="_blank">
                            <div className="rect">
                                <div
                                    className="logo-rect"
                                    style={{
                                        backgroundColor: item.backgroundColor
                                            ? item.backgroundColor
                                            : '#fff',
                                    }}
                                >
                                    <img src={item.logo} />
                                </div>
                                <div className="text-section">
                                    <div className="name">{item.name}</div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </IF.SwiperWrapper>
    );
};

export default SponsorInfo;

type serviceType = {
    id: number;
    name: string;
    logo: string;
    url: string;
    backgroundColor?: string;
};
const serviceList: serviceType[] = [
    {
        id: 0,
        name: '멋쟁이사자처럼',
        logo: logo1,
        url: 'https://techit.education/',
    },
    {
        id: 1,
        name: '영림원소프트랩',
        logo: logo2,
        url: 'https://flextudio.com/',
    },
    {
        id: 2,
        name: '쿼드해시',
        logo: logo3,
        url: 'https://www.instagram.com/saza.gaza/',
        backgroundColor: '#FC3',
    },
    {
        id: 3,
        name: '골스튜디오',
        logo: logo4,
        url: 'https://goalstudio.com',
    },
    {
        id: 4,
        name: '체크오',
        logo: logo5,
        url: 'https://checko.kr/',
    },
    {
        id: 5,
        name: '멋사 넥스트',
        logo: logo6,
        url: 'https://www.likelion-next.com/',
    },
    {
        id: 6,
        name: '낼나',
        logo: logo7,
        url: 'https://nelna.shop/',
    },
    {
        id: 7,
        name: '뉴믹스커피',
        logo: logo8,
        url: 'https://www.newmixcoffee.com/',
    },
    {
        id: 8,
        name: '해시아웃',
        logo: logo9,
        url: 'https://hashout.app/',
    },
    {
        id: 9,
        name: '타이거 라들러',
        logo: logo10,
        url: 'https://www.instagram.com/tigerbeer_korea/',
    },
    {
        id: 10,
        name: '디자인오비',
        logo: logo11,
        url: 'http://designob.co.kr',
    },
    {
        id: 11,
        name: '빅썬시스템즈',
        logo: logo12,
        url: 'http://bigsun.kr/',
    },
];
