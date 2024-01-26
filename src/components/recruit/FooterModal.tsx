import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Line from '../../img/recruit/line.svg';
import Close from '../../img/recruit/close.svg';
import * as M from './FooterModalStyle';
import { axiosInstance } from '../../utils/axios';
import ModalComplete from './modal-complete/ModalComplete';
import { EMAIL } from '../../constants/regEx/regEx';

//modal style

Modal.setAppElement('#root');

interface FooterModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const FooterModal = ({ isOpen, closeModal }: FooterModalProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setEmail('');
        setSuccess(false);
    }, [isOpen]);

    const returnModalHeight = (): string => {
        if (windowWidth > 768 && success) {
            return '423px';
        }

        if (windowWidth <= 768) {
            return '379px';
        }

        return '510px';
    };

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
            width: windowWidth < 768 ? '80%' : '688px',
            height: returnModalHeight(),
            flexShrink: '0',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            borderRadius: '20px',
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

    const CommitSubmit = async (e: any) => {
        e.preventDefault();

        // 이메일 형식에 맞지 않는 경우
        if (!EMAIL.test(email)) {
            alert('이메일 형식에 맞지 않습니다.');
            return;
        }

        try {
            const response = await axiosInstance.post(
                `/api/v1/alarm/12/register`,
                { email: email },
            );

            console.log(response.data);
            setSuccess(response.data.isSuccess);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
            {success ? (
                <ModalComplete closeModal={closeModal} />
            ) : (
                <M.ModalContent>
                    <M.ModalHeader>
                        <M.ModalTitle>모집 알림 신청하기</M.ModalTitle>
                        <M.ModalCloseButton
                            onClick={closeModal}
                            close={Close}
                        />
                    </M.ModalHeader>
                    <img src={Line} alt="-" />
                    <M.ModalBody>
                        <M.ModalText>
                            <M.ModalGraphic />
                            <M.Text>
                                모집이 시작되었을 때 이메일과 알려드려요. 
                                <br />
                                <M.Text>
                                    * 입력하신 개인정보는 모집 알림 발송 후 파기됩니다. 
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
                        </M.InputWrapper>
                        <M.InputBtn onClick={CommitSubmit}>신청하기</M.InputBtn>
                    </M.ModalBody>
                </M.ModalContent>
            )}
        </Modal>
    );
};

export default FooterModal;
