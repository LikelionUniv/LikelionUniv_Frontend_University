import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Close from '../../img/recruit/close.svg';
import * as M from './UnivFooterModalMobileStyle';
import { axiosInstance } from '../../utils/axios';
import ModalComplete from '../recruit/modal-complete/ModalComplete';
import { EMAIL } from '../../constants/regEx/regEx';

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
        width: '300px',
        height: '379px',
        flexShrink: '0',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0px 12px 20px 0px rgba(0, 0, 0, 0.07)',
        boxSizing: 'border-box',
    },
};

Modal.setAppElement('#root');

interface FooterModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const UnivModalMobile = ({ isOpen, closeModal }: FooterModalProps) => {
    const [email, setEmail] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
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

    useEffect(() => {
        setEmail('');
        setSuccess(false);
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
            {success ? (
                <ModalComplete closeModal={closeModal} />
            ) : (
                <M.ModalContent>
                    <M.ModalHeader>
                        <M.ModalTitle>멋대 알림 신청하기</M.ModalTitle>
                    </M.ModalHeader>
                    <M.ModalCloseButton onClick={closeModal} close={Close} />
                    <M.ModalBody>
                        <M.ModalText>
                            <M.Text>
                                멋대의 새로운 소식을 이메일로 알려드려요
                                <br />
                                <M.Text>
                                    * 입력하신 개인정보는 멋쟁이사자처럼 대학
                                    홈페이지의 개인정보처리방침에 의거하여
                                    관리됩니다.
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

export default UnivModalMobile;
