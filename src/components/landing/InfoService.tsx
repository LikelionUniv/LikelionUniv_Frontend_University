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
                                <div className="logo-rect">
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
};
const serviceList: serviceType[] = [
    {
        id: 0,
        name: '뱅크샐러드',
        gen: 0,
        logo: 'https://play-lh.googleusercontent.com/9S1i6ZhYK4gIKThBQ4HFUN1srbKCERKo_wcW3sg7vWOxlu0W-KJlJdVOLH6juWpkVw',
        url: 'https://www.banksalad.com',
    },
    {
        id: 1,
        name: '눈누',
        gen: 0,
        logo: 'https://noonnu.cc/assets/noon-0e36f3deb9d903ceec1946f9253c7dea1cd629ef8e2f1fc14ec2995aa7421b69.jpg',
        url: 'https://noonnu.cc/',
    },
    {
        id: 2,
        name: '탈잉',
        gen: 0,
        logo: 'https://play-lh.googleusercontent.com/PZPLwOYr6NAiAwefu2J6rFU-F-8ZyaIjwnqkg43gTwKGg1LN_-thhkje9u30FqtE3nU=w600-h300-pc0xffffff-pd',
        url: 'https://taling.me/',
    },
    {
        id: 3,
        name: '윙잇',
        gen: 0,
        logo: 'https://cdn.imweb.me/upload/S202004169975996ca0a95/2951f0f5710f4.png',
        url: 'https://www.wingeat.com/',
    },
    {
        id: 4,
        name: '자소설닷컴',
        gen: 0,
        logo: 'https://play-lh.googleusercontent.com/ZecJgFyPjwnk_dPS7QC-MmjPW-C9MuLw6eKalB3M9qSXHpuOxvduFnPaxN1grZyIDI8',
        url: 'https://www.jasoseol.com',
    },
];
