import React from 'react';
import * as S from './Swiper.style';
import { SwiperLeft, SwiperRight } from '../../../../img/project/detail';

interface SwiperProps {
    goToPrevious: () => void;
    goToNext: () => void;
    currentIndex: number;
    imageLength: number;
}

function Swiper({
    goToPrevious,
    goToNext,
    currentIndex,
    imageLength,
}: SwiperProps) {
    return (
        <S.Swiper>
            <S.IconLeft alt="이전" src={SwiperLeft} onClick={goToPrevious} />
            <S.IconRight alt="다음" src={SwiperRight} onClick={goToNext} />
            <S.SwiperText>{`${currentIndex + 1}/${imageLength}`}</S.SwiperText>
        </S.Swiper>
    );
}

export default Swiper;
