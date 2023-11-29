import { useEffect } from 'react';
import * as FM from './FollowModal.style';
import { FollowBox } from './FollowBox';

interface FollowModalProps {
    isOpen : boolean;
    modalProps: string | undefined;
    closeModal: () => void;
}

export const FollowModal = ({isOpen , modalProps , closeModal}: FollowModalProps) => {
    
    // 모달창 열렸을 때 스크롤 막기

    // useEffect(() => {
    //     if (isOpen) {
    //       document.body.style.overflow = 'hidden';
    //     } else {
    //       document.body.style.overflow = 'auto';
    //     }
    //   }, [isOpen]);    

    return (
        <FM.ModalWrapper>
            <FM.ModalBackground onClick={closeModal}/>
            <FM.ModalContainer>
                <FM.ModalHeader>
                    {modalProps}
                    <FM.ModlalClose onClick={closeModal}/>
                </FM.ModalHeader>
                    
                <FM.ModalContent>
                    <FollowBox/>
                    <FollowBox/>
                    <FollowBox/>
                    <FollowBox/>
                    <FollowBox/>
                    <FollowBox/>
                    <FollowBox/>
                    <FollowBox/>


                </FM.ModalContent>
            </FM.ModalContainer>
        </FM.ModalWrapper>

        
    );
}