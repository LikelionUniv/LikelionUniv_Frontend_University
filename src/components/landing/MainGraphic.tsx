import * as MG from './MainGraphic.style';
import { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { useRecoilState } from 'recoil';
import { currentWidthState } from '../../store/landing';

import maintext from '../../img/landing/main_text.png';
import mainimage from '../../img/landing/main_image.png';
import desimage from '../../img/landing/des_image.png';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';
import { ReactComponent as PixelFireworksIcon } from '../../img/landing/pixel_fireworks.svg';
import { ReactComponent as PixelSingingIcon } from '../../img/landing/pixel_singing.svg';
import { ReactComponent as PixelLionIcon } from '../../img/landing/pixel_lion.svg';
import CountDown from './CountDown';

const recruitURL = 'https://www.google.com/intl/ko_kr/forms/about/';

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

    return (
        <MG.Wrapper>
            <MG.Background>
                <div>
                    <div className="inner">
                        <img src={maintext} />
                        <CountDown />
                        <a className="btn" href={recruitURL} target="_blank">
                            아기사자 지원하기 <PixelLongArrowIcon />
                        </a>
                    </div>
                </div>
                <img src={mainimage} />
            </MG.Background>
            <MG.Line>
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
            <MG.Description>
                <div className="container" ref={desRef1}>
                    <div className="title">국내 최대 규모 개발 창업 동아리</div>
                    <div className="title">
                        <PixelLionIcon /> 멋쟁이사자처럼
                    </div>
                    <div className="text">
                        ‘멋쟁이사자처럼’은 전국 61개 대학의 2,000여 명의
                        학생들이 함께하는 {isPC && <br />}
                        개발/창업 동아리입니다. {!isPC && <br />}
                        IT 교육을 통해 성장의지를 가진 누구나 한 단계 더 성장할
                        수 있도록 도우며, 서비스 개발과 창업 아이디어를 현실로
                        만들기 위한 끊임없는 도전을 응원합니다.
                    </div>
                </div>
                <img className="desimage" src={desimage} ref={desRef2} />
            </MG.Description>
        </MG.Wrapper>
    );
};

export default MainGraphic;
