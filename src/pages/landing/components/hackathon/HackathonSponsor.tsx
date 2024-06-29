import * as IF from '../Information.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import logo1 from '../../../../img/landing/sponsor/logo1.png';
import logo2 from '../../../../img/landing/sponsor/logo2.png';
import logo3 from '../../../../img/landing/sponsor/logo3.png';
import logo4 from '../../../../img/landing/sponsor/logo4.png';
import logo5 from '../../../../img/landing/sponsor/logo5.png';
import logo6 from '../../../../img/landing/sponsor/logo6.png';
import logo7 from '../../../../img/landing/sponsor/logo7.png';
import logo8 from '../../../../img/landing/sponsor/logo8.png';
import logo9 from '../../../../img/landing/sponsor/logo9.png';
import logo10 from '../../../../img/landing/sponsor/logo10.png';
import logo11 from '../../../../img/landing/sponsor/logo11.png';
import logo12 from '../../../../img/landing/sponsor/logo12.png';

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
                                    <div className="gen">{item.gen}기</div>
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
    gen: number;
    logo: string;
    url: string;
    backgroundColor?: string;
};
const serviceList: serviceType[] = [
    {
        id: 0,
        name: '멋쟁이사자처럼',
        gen: 1,
        logo: logo1,
        url: 'https://www.jasoseol.com',
    },
    {
        id: 1,
        name: '영림원소프트랩',
        gen: 3,
        logo: logo2,
        url: 'https://www.wingeat.com/',
    },
    {
        id: 2,
        name: '멋사 넥스트',
        gen: 3,
        logo: logo3,
        url: 'https://www.banksalad.com',
    },
    {
        id: 3,
        name: '쿼드해시',
        gen: 3,
        logo: logo4,
        url: 'https://play.google.com/store/apps/details?id=com.screwbar.gudakcamera&hl=ko&gl=US',
        backgroundColor: '#FC3',
    },
    {
        id: 4,
        name: '해시아웃',
        gen: 4,
        logo: logo5,
        url: 'https://taling.me/',
    },
    {
        id: 5,
        name: '골스튜디오',
        gen: 8,
        logo: logo6,
        url: 'https://www.groomernote.com/',
    },
    {
        id: 6,
        name: '낼나',
        gen: 10,
        logo: logo7,
        url: 'https://glucofit.co.kr/',
    },
    {
        id: 7,
        name: '체크오',
        gen: 10,
        logo: logo8,
        url: 'https://glucofit.co.kr/',
    },
    {
        id: 8,
        name: '타이거라들러',
        gen: 10,
        logo: logo9,
        url: 'https://glucofit.co.kr/',
    },
    {
        id: 9,
        name: '뉴믹스커피',
        gen: 10,
        logo: logo10,
        url: 'https://glucofit.co.kr/',
    },
    {
        id: 10,
        name: '디자인오비',
        gen: 10,
        logo: logo11,
        url: 'https://glucofit.co.kr/',
    },
    {
        id: 11,
        name: '빅썬시스템즈',
        gen: 10,
        logo: logo12,
        url: 'https://glucofit.co.kr/',
    },
];
