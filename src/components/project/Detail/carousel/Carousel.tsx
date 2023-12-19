import React, { useCallback, useState } from 'react';
import * as C from './Carousel.style';
import { ProjectData } from '../ProjectDetail';
import {
    PopModal,
    Chevron_Right,
    Chevron_Left,
} from '../../../../img/project/detail';
import Swiper from './Swiper';
import CarouselModal from './CarouselModal';
import useInnerWidth from '../../../../hooks/useInnerWidth';

interface CarouselProps {
    projectData: ProjectData;
}

function Carousel({ projectData }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 이미지 인덱스
    const [isModalOpen, setIsModalOpen] = useState(false); // 이미지 모달 상태
    const { innerWidth } = useInnerWidth();

    // 모달 상태 토글
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // 이미지의 길이를 확인
    const getImageLength = () =>
        projectData?.imageUrl ? projectData.imageUrl.length : 0;

    // 이전 이미지로 이동
    const goToPrevious = useCallback(() => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }, [currentIndex]);

    // 다음 이미지로 이동
    const goToNext = useCallback(() => {
        if (currentIndex < getImageLength() - 1)
            setCurrentIndex(currentIndex + 1);
    }, [currentIndex, getImageLength]);

    // 현재 이미지 URL
    const currentImageUrl = projectData
        ? `https://${projectData.imageUrl[currentIndex]}`
        : '';

    return (
        <C.Wrapper>
            <C.Image src={currentImageUrl}>
                <C.TransLeft
                    src={Chevron_Left}
                    alt="이전"
                    onClick={goToPrevious}
                />
                <C.TransRight
                    src={Chevron_Right}
                    alt="이전"
                    onClick={goToNext}
                />
                <Swiper
                    goToPrevious={goToPrevious}
                    goToNext={goToNext}
                    currentIndex={currentIndex}
                    imageLength={getImageLength()}
                />
                <C.ProjectModalButton
                    alt=""
                    src={PopModal}
                    onClick={toggleModal}
                />
            </C.Image>
            {isModalOpen && (
                <CarouselModal
                    isOpen={isModalOpen}
                    closeModal={toggleModal}
                    shouldCloseOnOverlayClick={innerWidth <= 767}
                    goToPrevious={goToPrevious}
                    goToNext={goToNext}
                    currentIndex={currentIndex}
                    currentImageUrl={currentImageUrl}
                    imageLength={getImageLength()}
                />
            )}
        </C.Wrapper>
    );
}

export default Carousel;
