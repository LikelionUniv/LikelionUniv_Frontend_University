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
    const trackOptions = [{ value: 12, label: '12기' }];

    const [ordinal, setOrdinal] = useState<number | undefined>(undefined);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { mutate } = usePostGraduations();
    const handleOrdinal = (e: any) => {
        setOrdinal(e.value);
    };

    const onGraduation = () => {
        setIsLoading(true);
        mutate(ordinal!, {
            onSuccess: async data => {
                const response = await fetch(data.url);

                // Blob 데이터로 변환
                const blob = await response.blob();

                // Blob을 활용해 다운로드 링크 생성
                const downloadLink = document.createElement('a');
                const blobUrl = URL.createObjectURL(blob);

                downloadLink.href = blobUrl;
                downloadLink.download = '멋쟁이사자처럼 수료증'; // 다운로드 파일 이름 지정
                downloadLink.click();

                // Blob URL 해제
                URL.revokeObjectURL(blobUrl);
                setIsLoading(false);
                setOrdinal(undefined);
            },
            onError: (err: any) => {
                if (err.response.status === 404) {
                    setIsError(true);
                    setIsLoading(false);
                    setOrdinal(undefined);
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
                            {isLoading ? (
                                <Center> 수료 확인중입니다.</Center>
                            ) : (
                                <>
                                    <div className="BoxName">기수 선택</div>
                                    <DropDownOrdinal
                                        options={trackOptions}
                                        onChange={handleOrdinal}
                                        placeholder={'기수를 선택해주세요.'}
                                    />
                                </>
                            )}
                        </Content>
                    </>
                )}
                <ButtonWrapper>
                    <Button isColor={false} onClick={onClose}>
                        취소하기
                    </Button>

                    {ordinal === undefined ? (
                        <Button isColor={false}>발급하기</Button>
                    ) : (
                        <>
                            {isLoading ? (
                                <Button isColor={false}>로딩중</Button>
                            ) : (
                                <Button isColor={true} onClick={onGraduation}>
                                    발급하기
                                </Button>
                            )}
                        </>
                    )}
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
const Center = styled.div`
    text-align: center;
    padding: 34px 0;
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
