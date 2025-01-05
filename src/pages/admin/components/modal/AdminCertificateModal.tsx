import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cancel from '../../../../img/admin/Cancel.svg';
import DropDownOrdinal from '../../../signUp/components/DropDownOrdinal';
import useChangeGraduations from '../../../../query/post/useChangeGraduations';

interface CertificateModalProps {
    onClose: () => void;
    selectedUserIds: number[];
}

const AdminCertificateModal: React.FC<CertificateModalProps> = ({
    onClose,
    selectedUserIds,
}) => {
    const trackOptions = [
        { value: 10, label: '10기' },
        { value: 11, label: '11기' },
        { value: 12, label: '12기' },
    ];

    const { mutate } = useChangeGraduations();

    const [ordinal, setOrdinal] = useState<number | undefined>(undefined);

    const handleOrdinal = (e: any) => {
        setOrdinal(e.value);
    };

    const onGraduation = () => {
        const data = {
            ordinal,
            userIds: selectedUserIds,
        };
        mutate(data, {
            onSuccess: () => {
                onClose();
                alert('변경되었습니다.');
            },
        });
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <BackgroundOverlay>
            <Wrapper>
                <Title>수료증 등급 변환</Title>
                <CancelIcon
                    style={{ width: '18px', height: '40px' }}
                    src={Cancel}
                    onClick={onClose}
                    alt="취소"
                />

                <Divider />

                <Text>
                    <div>수료자 기수를 선택해주세요.</div>
                </Text>
                <Content>
                    <>
                        <div className="BoxName">기수 선택</div>
                        <DropDownOrdinal
                            options={trackOptions}
                            onChange={handleOrdinal}
                            placeholder={'기수를 선택해주세요.'}
                        />
                    </>
                </Content>
                <ButtonWrapper>
                    <Button isColor={false} onClick={onClose}>
                        취소하기
                    </Button>

                    <Button isColor={true} onClick={onGraduation}>
                        변경하기
                    </Button>
                </ButtonWrapper>
            </Wrapper>
        </BackgroundOverlay>
    );
};

export default AdminCertificateModal;

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
`;

export const Content = styled.div`
    flex-direction: column;
    margin: 20px;

    .BoxName {
        margin: 20px 0;
        font-weight: 700;
        @media screen and (max-width: 767px) {
            margin: 5px 0;
        }
    }

    @media screen and (max-width: 767px) {
        margin: 0;
    }
`;
export const Wrapper = styled.div`
    background-color: white;
    padding: 32px 24px 24px 24px;
    min-width: 588px;
    border-radius: 20px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    @media screen and (max-width: 767px) {
        min-width: 80%;
        top: 54%;
        height: 50%;
        overflow: scroll;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 540px) {
        margin-top: 25px;
    }
`;

const Button = styled.div<{ isColor: boolean }>`
    margin: 20px;
    width: 100%;
    height: 40px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: ${props => (props.isColor ? '#fff' : 'rgba(77, 83, 89, 1)')};
    background-color: ${props =>
        props.isColor ? '#ff7710' : 'rgba(234, 236, 238, 1)'};

    border-radius: 8px;
    @media screen and (max-width: 767px) {
        margin: 0;
        width: 100%;
        padding: 4px 0;
    }
    @media screen and (max-width: 540px) {
        margin-left: ${props => props.isColor && '5px'};
        margin-right: ${props => !props.isColor && '5px'};
    }
`;
const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Text = styled.div`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    @media screen and (max-width: 540px) {
        font-size: 24px;
    }
    margin-bottom: 45px;
    @media screen and (max-width: 540px) {
        margin-bottom: 25px;
    }
`;
const CancelIcon = styled.img`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
`;

const Divider = styled.div`
    height: 1px;

    background-color: var(--Grey-900, #dcdfe3);
    width: 100%;
    margin: 26px 0px;
`;
