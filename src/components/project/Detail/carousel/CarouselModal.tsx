import React from 'react';
import Modal from 'react-modal';
import * as CM from './CarouselModal.style';
import {
    ModalLeftOff,
    ModalLeftOn,
    ModalRightOff,
    ModalRightOn,
    Close,
    TransLeftOn,
    TransRightOn,
} from '../../../../img/project/detail';
import useInnerWidth from '../../../../hooks/useInnerWidth';

Modal.setAppElement('#root');

interface CarouselModalProps {
    isOpen: boolean;
    closeModal: () => void;
    shouldCloseOnOverlayClick: boolean;
    goToPrevious: () => void;
    goToNext: () => void;
    currentIndex: number;
    currentImageUrl: string;
    imageLength: number;
}

const modalStyle: Modal.Styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 1000,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    content: {
        position: 'relative',
        border: 'none',
        backgroundColor: 'transparent',
        padding: 0,
        inset: 0,
        width: '100%',
    },
};

function CarouselModal({
    isOpen,
    closeModal,
    shouldCloseOnOverlayClick,
    goToPrevious,
    goToNext,
    currentIndex,
    currentImageUrl,
    imageLength,
}: CarouselModalProps) {
    const { innerWidth } = useInnerWidth();
    const isTablet = innerWidth > 767 && innerWidth <= 1000;
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            style={modalStyle}
        >
            <>
                <CM.ModalArrowLeft
                    src={
                        currentIndex > 0
                            ? window.innerWidth <= 768
                                ? TransLeftOn
                                : ModalLeftOn
                            : ModalLeftOff
                    }
                    onClick={goToPrevious}
                />
                <CM.ImageContainer>
                    <CM.CloseIcon alt="" src={Close} onClick={closeModal} />
                    <CM.ModalImage src={currentImageUrl} alt="image" />
                    <CM.Bar show={isTablet}>
                        <CM.ModalArrowLeftTablet
                            src={currentIndex > 0 ? ModalLeftOn : ModalLeftOff}
                            onClick={goToPrevious}
                        />
                        <CM.ModalIndex show={isTablet}>{`${
                            currentIndex + 1
                        }/${imageLength}`}</CM.ModalIndex>
                        <CM.ModalArrowRightTablet
                            src={
                                currentIndex < imageLength - 1
                                    ? ModalRightOn
                                    : ModalRightOff
                            }
                            onClick={goToNext}
                        />
                    </CM.Bar>
                    <CM.ModalIndex show={!isTablet}>{`${
                        currentIndex + 1
                    }/${imageLength}`}</CM.ModalIndex>
                </CM.ImageContainer>

                <CM.ModalArrowRight
                    src={
                        currentIndex < imageLength - 1
                            ? window.innerWidth <= 768
                                ? TransRightOn
                                : ModalRightOn
                            : ModalRightOff
                    }
                    onClick={goToNext}
                />
            </>
        </Modal>
    );
}

export default CarouselModal;
