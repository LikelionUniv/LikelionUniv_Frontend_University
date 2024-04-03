import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Line from '../../img/recruit/line.svg';
import Close from '../../img/recruit/close.svg';
import * as M from './FooterModalStyle';
import { axiosInstance } from '../../api/axios';
import ModalComplete from './modal-complete/ModalComplete';
import { EMAIL } from '../../utilsTest/regEx/regEx';

//modal style

Modal.setAppElement('#root');

interface FooterModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const UnivText = {
    title: '멋대 알림 신청하기',
    paragraph: '멋대의 새로운 소식을 이메일로 알려드려요.',
    detail1:
        '* 아기사자 모집 또는 아이디어톤, 해커톤 등의 멋대 행사 정보를 받아볼 수 있습니다.',
    detail2:
        '* 입력하신 개인정보는 멋쟁이사자처럼 대학 홈페이지의 개인정보처리\n방침에 의거하여 관리됩니다.',
};

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
                        <M.ModalTitle>{UnivText.title}</M.ModalTitle>
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
                                {UnivText.paragraph}
                                <br />
                                <M.Text>{UnivText.detail1}</M.Text>
                                <M.Text>{UnivText.detail2}</M.Text>
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
