import { useState, useEffect, useRef, useCallback } from 'react';
import * as IF from './Information.style';
import { ReactComponent as PixelNumberIcon } from '../../img/landing/pixel_number.svg';

const InfoNumber = () => {
    // number section이 스크롤 뷰 내에 있는지 감지
    const numberRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState<boolean>(false);
    const options = { rootMargin: '0px', threshold: 1 };
    const onIntersect = (entry: any, observer: any) => {
        observer.unobserve(entry.target);
        setIsInView(true);
    };
    const callback = useCallback(
        (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver,
        ) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) onIntersect(entry, observer);
            });
        },
        [numberRef],
    );
    useEffect(() => {
        if (!numberRef.current) return;
        const observer = new IntersectionObserver(callback, options);
        observer.observe(numberRef.current);
        return () => observer.disconnect();
    }, [numberRef, options, callback]);

    // number countup/down 함수
    const year = new Date().getFullYear();
    const frameRate = 1000 / 60;
    const useCountUp = (
        num: number,
        duration: number,
        easeOnlyOut?: boolean,
    ) => {
        const [count, setCount] = useState(0);
        const totalFrame = Math.round(duration / frameRate);
        const easeOutExpo = (x: number) =>
            easeOnlyOut
                ? 1 - Math.pow(1 - x, 4)
                : x < 0.5
                  ? 8 * x * x * x * x
                  : 1 - Math.pow(-2 * x + 2, 4) / 2;
        useEffect(() => {
            if (isInView) {
                let currentNumber = 0;
                const counter = setInterval(() => {
                    const progressRate = easeOutExpo(
                        ++currentNumber / totalFrame,
                    );
                    setCount(Math.round(num * progressRate));
                    if (progressRate === 1) clearInterval(counter);
                }, frameRate);
            }
        }, [isInView]);
        return count;
    };
    const useCountDown = (num: number, duration: number) => {
        const [count, setCount] = useState(year);
        const totalFrame = Math.round(duration / frameRate);
        const easeOutExpo = (x: number) =>
            x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        useEffect(() => {
            let currentNumber = 1;
            const counter = setInterval(() => {
                const progressRate = easeOutExpo(++currentNumber / totalFrame);
                setCount(year + Math.round((num - count) * progressRate));
                if (progressRate === 1) clearInterval(counter);
            }, frameRate);
        }, []);
        return count;
    };

    const duration = 2000;
    const count1 = useCountUp(11, duration, true);
    const count11 = useCountDown(2013, duration - 500);
    const count2 = useCountUp(10000, duration - 800);
    const count3 = useCountUp(1500, duration - 500, true);

    return (
        <>
            <IF.Title className="br">
                <span>
                    숫자가 <PixelNumberIcon />
                </span>
                <span className="right">말해주는 멋사</span>
            </IF.Title>
            <IF.SectionContainer ref={numberRef}>
                <div className="number-rect">
                    <div className="subtitle">시작된지</div>
                    <div className="number">
                        {count1}년<sup>{count11}~</sup>
                    </div>
                </div>
                <div className="number-rect">
                    <div className="subtitle">멋사 대학 출신 학생 수</div>
                    <div className="number">{count2.toLocaleString()}⁺</div>
                </div>
                <div className="number-rect">
                    <div className="subtitle">누적 완성 서비스 수</div>
                    <div className="number">{count3}⁺</div>
                </div>
            </IF.SectionContainer>
        </>
    );
};

export default InfoNumber;
