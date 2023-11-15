import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Line from '../../img/recruit/line.svg';
import Close from '../../img/recruit/close.svg';
import * as M from './FooterModalStyle';


//modal style

Modal.setAppElement('#root');

interface FooterModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const FooterModal = ({ isOpen, closeModal }: FooterModalProps) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };

    },[])

// 모달 스타일
    const customStyles: Modal.Styles = {
        overlay: {
            backgroundColor: 'rgba(152, 146, 146, 0.5)',
            zIndex: 1000,
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            // width: '688px',
            // height: '636px',
            width: windowWidth < 768 ? '80%' : '688px',
            height: windowWidth <= 480 ? '70%' : windowWidth <= 768 ? '70%' : '636px',
            flexShrink: '0',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0px 12px 20px 0px rgba(0, 0, 0, 0.07)',
        },
    };

    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPhoneNumber(e.target.value);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
            <M.ModalContent>
                <M.ModalHeader>
                    <M.ModalTitle>모집 알림 신청하기</M.ModalTitle>
                    <M.ModalCloseButton onClick={closeModal} close={Close} />
                </M.ModalHeader>
                <img src={Line} alt="-" />
                <M.ModalBody>
                    <M.ModalText>
                        <M.ModalGraphic />
                        <M.Text>
                            모집이 시작되었을 때<br />
                            이메일과 문자로 알려드려요.
                            <M.Text>
                                * 입력하신 개인정보는 모집 알림 발송 후
                                파기됩니다.
                            </M.Text>
                        </M.Text>
                    </M.ModalText>
                    <M.InputWrapper>
                        <M.ModalInput>
                            <M.InputLabel>이메일</M.InputLabel>
                            <M.Input
                                type="email"
                                placeholder="이메일을 입력해주세요."
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </M.ModalInput>
                        <M.ModalInput>
                            <M.InputLabel>휴대폰번호</M.InputLabel>
                            <M.Input
                                type="tel"
                                placeholder="휴대폰 번호를 입력하세요."
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </M.ModalInput>
                    </M.InputWrapper>
                    <M.InputBtn>신청하기</M.InputBtn>
                </M.ModalBody>
            </M.ModalContent>
        </Modal>
    );
};

export default FooterModal;
