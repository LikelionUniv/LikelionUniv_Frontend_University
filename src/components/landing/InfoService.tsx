import * as IF from './Information.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

const InfoService = () => {
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

export default InfoService;

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
        name: '자소설닷컴',
        gen: 1,
        logo: 'https://play-lh.googleusercontent.com/ZecJgFyPjwnk_dPS7QC-MmjPW-C9MuLw6eKalB3M9qSXHpuOxvduFnPaxN1grZyIDI8',
        url: 'https://www.jasoseol.com',
    },
    {
        id: 1,
        name: '윙잇',
        gen: 3,
        logo: 'https://cdn.imweb.me/upload/S202004169975996ca0a95/2951f0f5710f4.png',
        url: 'https://www.wingeat.com/',
    },
    {
        id: 2,
        name: '뱅크샐러드',
        gen: 3,
        logo: 'https://play-lh.googleusercontent.com/9S1i6ZhYK4gIKThBQ4HFUN1srbKCERKo_wcW3sg7vWOxlu0W-KJlJdVOLH6juWpkVw',
        url: 'https://www.banksalad.com',
    },
    {
        id: 3,
        name: '구닥',
        gen: 3,
        logo: 'https://play-lh.googleusercontent.com/q0KUJgBcJka1jRg3WdQsTos0p0kyo3q9i0b1cE6L66SCOCSUqkfKwJ3uF38tw67vQg52=w240-h480-rw',
        url: 'https://play.google.com/store/apps/details?id=com.screwbar.gudakcamera&hl=ko&gl=US',
        backgroundColor: '#FC3',
    },
    {
        id: 4,
        name: '탈잉',
        gen: 4,
        logo: 'https://play-lh.googleusercontent.com/PZPLwOYr6NAiAwefu2J6rFU-F-8ZyaIjwnqkg43gTwKGg1LN_-thhkje9u30FqtE3nU=w600-h300-pc0xffffff-pd',
        url: 'https://taling.me/',
    },
    {
        id: 3,
        name: '그루머노트',
        gen: 8,
        logo: 'https://play-lh.googleusercontent.com/9TbIVU2W-PYGb4YIcxQ83B2pW7bfJ5Ma1gmaJ7Yze3-U8zQ6RH5sIs9pHpy59A7MGm0=w240-h480-rw',
        url: 'https://www.groomernote.com/',
    },
    {
        id: 4,
        name: '글루코핏',
        gen: 10,
        logo: 'https://play-lh.googleusercontent.com/igh7OZpVXDzuozn423LGboFDlz5LIxtMf9ZH8jZj5fRfFOI0mcuANpxq9QVNGyvKKBI=w240-h480-rw',
        url: 'https://glucofit.co.kr/',
    },
];
