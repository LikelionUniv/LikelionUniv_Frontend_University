import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';

import CountDown from './CountDown';
import { recruitURL } from './MainGraphic';
import { debounce } from 'lodash';
import { useRecoilValue } from 'recoil';
import { currentWidthState } from '../../store/landing';
import { viewFloatingCountDownState } from '../../store/landing';

const FloatingCountDown = () => {
    const desWidth = useRecoilValue(currentWidthState);

    // 모바일 뷰 감지
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isPC, setIsPC] = useState<boolean>(true);
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

    const isView = useRecoilValue(viewFloatingCountDownState);
    const [fadeClassName, setFadeClassName] = useState<string>('');
    useEffect(() => {
        setFadeClassName(
            isView.top === true && isView.bottom === false
                ? 'countdown-fade-out'
                : isView.top === false && isView.bottom === false
                ? 'countdown-fade-in'
                : isView.top === false && isView.bottom === true
                ? 'countdown-fade-out'
                : 'countdown-fade-out',
        );
    }, [isView]);

    return (
        <Wrapper className={fadeClassName}>
            {isPC ? (
                <Container>
                    <div
                        className="inner"
                        style={{
                            width:
                                width > 1280 ? desWidth : 'calc(100% - 80px)',
                        }}
                    >
                        <CountDown isFloating={true} />
                        <Button
                            className="btn"
                            href={recruitURL}
                            target="_blank"
                        >
                            신규 대학 지원하기
                            <PixelLongArrowIcon fill="#ffffff" />
                        </Button>
                    </div>
                </Container>
            ) : (
                <MContainer>
                    <div className="inner">
                        <CountDown isFloating={true} />
                        <Button
                            className="btn"
                            href={recruitURL}
                            target="_blank"
                        >
                            신규 대학 지원하기
                        </Button>
                    </div>
                </MContainer>
            )}
        </Wrapper>
    );
};

export default FloatingCountDown;

// 커스텀 styled-components
const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 998;
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    @media (max-width: 768px) {
        height: 68px;
    }
    &.countdown-fade-in {
        animation: countdown-show 0.5s;
        @keyframes countdown-show {
            from {
                opacity: 0;
                margin-bottom: -88px;
            }
            to {
                opacity: 1;
                margin-bottom: 0;
            }
        }
    }
    &.countdown-fade-out {
        opacity: 0;
        margin-bottom: -88px;
        animation: countdown-disappear 0.3s;
        @keyframes countdown-disappear {
            from {
                opacity: 1;
                margin-bottom: 0;
            }
            to {
                opacity: 0;
                margin-bottom: -88px;
            }
        }
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        width: 100%;
        height: 80px;
        margin-bottom: 8px;
        border-radius: 18px;
        background-color: #212224;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const MContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        width: 100%;
        height: 68px;
        background-color: #212224;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Button = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff7710;
    border-radius: 8px;
    color: #fff;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    word-break: keep-all;
    text-decoration: none;
    border: none;
    outline: none;
    width: 260px;
    height: 56px;
    padding: 0 32px;
    margin-right: 12px;
    cursor: pointer;
    &:hover {
        background-color: #eb6500;
    }
    @media (max-width: 890px) {
        width: auto;
        padding: 0 4vw;
        font-size: 2.2vw;
    }
    @media (max-width: 768px) {
        margin: 0 20px;
        width: auto;
        max-width: 300px;
        height: 44px;
        font-size: 16px;
        justify-content: center;
        text-align: center;
    }

    svg {
        height: 30px;
        @media (max-width: 890px) {
            margin-left: 10px;
        }
    }
`;
