import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cancel from '../../../img/admin/Cancel.svg';
import DropDownOrdinal from '../../signUp/components/DropDownOrdinal';
import usePostGraduations from '../../../query/post/usePostGraduations';
import kakaoImg from '../../../img/mypage/kakao.svg';
import arrowImg from '../../../img/mypage/arrow.svg';

interface CertificateModalProps {
    onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ onClose }) => {
    const trackOptions = [
        { value: 1, label: '1기' },
        { value: 2, label: '2기' },
        { value: 3, label: '3기' },
        { value: 4, label: '4기' },
        { value: 5, label: '5기' },
        { value: 6, label: '6기' },
        { value: 7, label: '7기' },
        { value: 8, label: '8기' },
        { value: 9, label: '9기' },
        { value: 10, label: '10기' },
        { value: 11, label: '11기' },
        { value: 12, label: '12기' },
        { value: 13, label: '13기' },
    ];

    const [ordinal, setOrdinal] = useState<number | undefined>(undefined);
    const [isError, setIsError] = useState<boolean>(false);

    const { mutate } = usePostGraduations();
    const handleOrdinal = (e: any) => {
        setOrdinal(e.value);
    };

    const onGraduation = () => {
        mutate(ordinal!, {
            onSuccess: () => {},
            onError: (err: any) => {
                console.log(err.response.status);
                if (err.response.status === 404) {
                    setIsError(true);
                }
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
                <Title>수료증 발급 신청</Title>
                <CancelIcon
                    style={{ width: '18px', height: '40px' }}
                    src={Cancel}
                    onClick={onClose}
                    alt="취소"
                />

                <Divider />
                {isError ? (
                    <>
                        <Text>
                            <div>수료자 정보가 존재하지 않습니다.</div>
                            <div>
                                학교 대표 혹은 멋쟁이사자처럼 대학 공식 카카오톡
                                채널로 문의해주세요.
                            </div>
                        </Text>
                        <Content>
                            <KakaoBox
                                href={'https://pf.kakao.com/_DMxlaG'}
                                target="_blank"
                            >
                                <div>
                                    <KakaoImg src={kakaoImg} alt="kakaoImg" />
                                    카카오톡 채널 바로가기
                                </div>
                                <div>
                                    <img src={arrowImg} alt="" />
                                </div>
                            </KakaoBox>
                        </Content>
                    </>
                ) : (
                    <>
                        <Text>
                            <div>참여하신 기수를 선택해주세요.</div>
                            <div>
                                1기~9기의 경우, 수료 확인이 불가하여 발급이
                                어렵습니다.
                            </div>
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
                    </>
                )}
                <ButtonWrapper>
                    <Button isColor={false} onClick={onClose}>
                        취소하기
                    </Button>

                    <Button isColor={true} onClick={onGraduation}>
                        발급하기
                    </Button>
                </ButtonWrapper>
            </Wrapper>
        </BackgroundOverlay>
    );
};

export default CertificateModal;

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
`;
const KakaoBox = styled.a`
    background-color: rgba(242, 244, 246, 1);
    border-radius: 8px;
    height: 80px;
    text-decoration-line: none;
    color: black;
    & > div {
        font-size: 28px;
        font-weight: 600;
        display: flex;
        align-items: center;
        & > img {
            margin-right: 16px;
        }
        @media screen and (max-width: 767px) {
            font-size: 20px;
            font-weight: 500;
        }
    }
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    @media screen and (max-width: 767px) {
        padding: 0 20px;
    }
`;
const KakaoImg = styled.img`
    @media screen and (max-width: 767px) {
        width: 37px;
    }
`;
export const Wrapper = styled.div`
    /* width: fit-content;
    height: fit-content; */
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
    & > div:first-child {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
        @media screen and (max-width: 540px) {
            font-size: 24px;
        }
    }
    & > div:last-child {
        font-size: 16px;
        font-weight: 500;
        color: rgba(134, 140, 148, 1);
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

const Divider = styled.div`
    height: 1px;

    background-color: var(--Grey-900, #dcdfe3);
    width: 100%;
    margin: 26px 0px;
`;
