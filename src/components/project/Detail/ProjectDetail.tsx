import { FunctionComponent, useCallback, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GoBackButton from './GoBackButton';
import PeopleInfo from './PeopleInfo';
import Styles from './Styles';
import {
    LeftArrow,
    RightArrow,
    SwiperLeft,
    SwiperRight,
    PopModal,
    ModalLeftOff,
    ModalLeftOn,
    ModalRightOff,
    ModalRightOn,
    Close,
    TransLeftOn,
    TransRightOn,
    Chevron_Right,
    Chevron_Left
} from '../../../img/project/detail';

const ProjectDetailRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: 3rem;
`;

const B = styled.b`
    position: relative;
    line-height: 150%;
`;
const P = styled.p`
    margin: 0;
`;
const ProjectMainDescription = styled.div`
    margin-top: 8rem;
    margin-left: -14%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 60rem;
    @media (max-width: 1024px) {
        max-width: 40rem;
        margin-left: -31%;
    }
    @media (max-width: 768px) {
        width: 60rem;
        margin-left: 25%;
        max-width: 70rem;
    }
    @media (max-width: 593px) {
        width: 45rem;
        margin-left: 15%;
        max-width: 70rem;
    }
    @media (max-width: 508px) {
        width: 45rem;
        margin-left: 25%;
        max-width: 45rem;
    }
    @media (max-width: 468px) {
        width: 40rem;
        margin-left: 20%;
        max-width: 40rem;
    }
    @media (max-width: 420px) {
        width: 32rem;
        margin-left: 20%;
        max-width: 32rem;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    color: var(--color-darkorange);
    margin-top: -5rem;
    margin-left: 1rem;
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        padding-left: 0;
        margin-left: 0.7rem;
    }
`;
const ProjectTitle = styled.b`
    font-size: var(--title-48-bold-size);
    line-height: 150%;
    padding: 0 2%;
    @media (max-width: 768px) {
        font-size: var(--title-28-bold-size);
    }
`;

const ProjectSummary = styled.b`
    font-size: var(--title-24-bold-size);
    line-height: 150%;
    padding: 0 2%; 

    @media (max-width: 768px) {
        font-size: var(--title-18-bold-size);
    }
`;

const ProjectContainer = styled.div`
    line-height: 160%;
    font-weight: 500;
    width: 60%;
    padding: 0 2%; 
    margin-top: 1rem;
`;

//사진
const ProjectPictureWrapper = styled.div`
    position: relative;
    display: block;
    width: auto;
    height: auto;
    margin: 0 auto;
    margin-right: 53%;
    @media (max-width: 768px) {
        margin-right: 6.5rem;
    }
    @media (max-width: 375px) {
        margin-right: 7rem;
    }
`;

const ProjectPicture = styled.img`
    width: 180%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    @media (max-width: 768px) {
        width: 85%;
    }
`;


//이미지 스와이퍼 아이콘
const PicSwiper = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--br-5xs);
    background-color: var(--grey-900);
    width: 5.63rem;
    height: 2.25rem;
    overflow: hidden;
    font-size: var(--body-12-bold-size);
    color: var(--white);
    z-index: 2;

    transition: left 0.3s ease;

    @media (max-width: 768px) {
        bottom: 3.25rem;
    }
    @media (max-width: 767px) {
        width: 0%;
    }
`;
const IconLeft = styled.img`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
`;
const IconRight = styled.img`
    position: absolute;
    top: 0.5rem;
    left: 3.88rem;
    width: 1.25rem;
    height: 1.25rem;
`;

const SwiperText = styled.b`
    position: absolute;
    top: 0.56rem;
    left: 2.25rem;
    line-height: 150%;
`;
//이미지 위에 위치한, 모달창 띄우는 버튼
const ProjectModalButton = styled.img`
    position: absolute;
    bottom: 1.2rem;
    left: 165%;
    border-radius: var(--br-5xs);
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    z-index: 2;

    @media (max-width: 767px) {
        left: 76%;
        bottom: 0.8rem;
        width: 2rem;
        height: 2rem;
    }
    @media (max-width: 567px) {
        right: 17%;
        bottom: 0.8rem;
        width: 2rem;
        height: 2rem;
    }
    @media (max-width: 438px) {
        width: 1rem;
        height: 1rem;
        border-radius: 0.2rem;
    }
`;

//서비스 바로가기 버튼
const Button = styled.button`
    display: block;
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: var(--color-darkorange);
    position: absolute;
    top: 49%;
    left: 65%;
    transform: translateX(-50%);
    border-radius: var(--br-5xs);
    width: 20rem;
    height: 3.5rem;
    overflow: hidden;
    font-size: var(--body-14-bold-size);
    @media (max-width: 1570px) {
        left: 75%;
    }
    @media (max-width: 1370px) {
        left: 70%;
    }
    @media (max-width: 1168px) {
        left: 76%;
    }

    @media (max-width: 1024px) {
        left: 70%;
    }
    @media (max-width: 900px) {
        left: 73%;
        top: 44%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const ButtonMobile = styled.button`
    display: none;
    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        border: none;
        padding: 0;
        background-color: var(--color-darkorange);
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: var(--br-5xs);
        width: 55%;
        height: 4rem;
        overflow: hidden;
        font-size: var(--body-14-bold-size);
    }
    @media (max-width: 578px) {
        left: 50%;
        top: 48%;
        width: 40%;
        height: 4rem;
        overflow: hidden;
    }
    @media (max-width: 430px) {
        width: 60%;
    }
    @media (max-width: 400px) {
        width: 55%
    }
    @media (max-width: 360px) {
        width: 50%;
        top: 48%;
    }
`;


const ButtonText = styled.b`
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    font-size: var(--subtitle-20-bold-size);
    line-height: 150%;
    font-family: var(--subtitle-20-bold);
    color: var(--white);
    text-align: left;
`;

const IconArrowUpright = styled.img`
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: 1.75rem;
    height: 1.75rem;
`;

const ProjectRoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: var(--white);
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: var(--subtitle-16-bold-size);
    color: var(--grey-900);
    font-family: var(--subtitle-20-bold);
    padding-left: 12%;
    @media (max-width: 768px) {
        padding-left: 12rem;
    }
    @media (max-width: 508px) {
        padding-left: 24%;
    }

    @media (max-width: 436px) {
        padding-left: 8rem;
    }
    
`;


//경계선
const HorizontalLine1 = styled.div`
    width: 37rem;
    padding: 0 2%;
    margin-top: 1rem;
    margin-left: 1rem;
    height: 2px;
    background-color: black;
    @media (max-width: 1024px) {
        width: 25rem;
        margin-left: 0.6rem;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;
const HorizontalLine2 = styled.div`
  width: 22rem;
  margin-left: 4%;
  margin-top: 1rem;
  height: 2px;
  background-color: black;

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HorizontalLine3 = styled.div`
    width: 37rem;
    padding: 0 2%;
    margin-top: 5rem;
    margin-left: 1rem;
    margin-bottom: 3rem;
    height: 2px;
    background-color: black;
    @media (max-width: 1024px) {
        width: 25rem;
        margin-left: 0.6rem;
    }
    @media (max-width: 768px) {
        margin-top: -24.5rem;
        width: 35rem;
        margin-left: 3%;
    }
    @media (max-width: 593px) {
        width: 28rem;
        }
    @media (max-width: 568px) {
        width: 27.5rem;
    }
    @media (max-width: 400px) {
        width: 19.5rem;
        }   
`;
const HorizontalLine4 = styled.div`
  width: 22rem;
  margin-left: 4%;
  margin-top: 5rem;
  margin-bottom: 3rem;
  height: 2px;
  background-color: black;

  @media (max-width: 768px) {
    margin-top: -37.5rem;
    width: 36.5rem;
    margin-left: 3%;
    }
  @media (max-width: 593px) {
    width: 28rem;
    }
  @media (max-width: 568px) {
    margin-top: -37.5rem;
    width: 27.5rem;
    margin-left: 3%; 
    }
  @media (max-width: 400px) {
    width: 19.5rem;
    }   
`;

const HorizontalLine5 = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 0 2%;
    margin-top: 10rem;
    margin-bottom: 3rem;
    height: 2px;
    background-color: black;
    width: 35rem;
    margin-left: 3%;  
    }
  @media (max-width: 593px) {
    width: 28rem;
    }
  @media (max-width: 568px) {
    width: 27.5rem;
    }
  @media (max-width: 400px) {
    width: 19.5rem;
    }    
`;


const LineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

//이미지 모달
const FullScreenModal = styled.div`
  position: fixed; 
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  overflow: auto;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
    width: 70%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 572px) {
        width: 100%;
    }
`;
const ModalIndex = styled.b`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    line-height: 150%;
    color: white;
    padding: 0.5rem;
    
    @media (max-width: 1180px) {
        bottom: 15%;
    }
    @media (max-width: 1000px) {
        bottom: 5%;
    }
    @media (max-width: 768px) {
        bottom: 16%;
    }
    @media (max-width: 660px) {
        bottom: 20%;
    }
    @media (max-width: 520px) {
        bottom: 25%;
    }
`;

const CloseIcon = styled.img`
    position: absolute;
    top: 3rem;    
    left: 82%;
    width: 2.25rem;
    height: 2.25rem;
    @media (max-width: 1180px) {
        top: 6.5rem; 
        left: 81%;   
    }
    @media (max-width: 1080px) {
        top: 7.5rem; 
        left: 81%;   
    }
    @media (max-width: 1000px) {
        top: 3rem;    
        left: 94%;
    }
    @media (max-width: 900px) {
        top: 5rem;    
        left: 94%;
    }
    @media (max-width: 800px) {
        top: 6.5rem;    
        left: 94%;
    }
    @media (max-width: 768px) {
        display: none;
    }
    @media (max-width: 560px) {
        display: none;
    }
`;

const ModalArrowLeft = styled.img`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 10001;

  @media (max-width: 1000px) {
    left: 2%;
    top: 92%;
  }
  @media (max-width: 768px) {
    left: 2%;
    top: 50%;
    src: ${TransLeftOn};
  }
`;

const ModalArrowRight = styled.img`
  position: absolute;
  top: 50%;
  right: 5%; 
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  cursor: pointer; 
  z-index: 10001;
  
  @media (max-width: 1000px) {
    right: 2%;
    top: 92%;
  }
  @media (max-width: 768px) {
    right: 2%;
    top: 50%;
    src: ${TransRightOn};
  }
`;

//반투명 화살표 아이콘
const TransLeft = styled.img`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const TransRight = styled.img`
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;



interface ProjectData {
    activity: string;
    outPut: string;
    serviceName: string;
    description: string;
    content: string;
    productionUrl: string;
    imageUrl: string[];
}

const ProjectDetail: FunctionComponent = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 이미지 인덱스
    const [isModalOpen, setIsModalOpen] = useState(false); // 이미지 모달 상태
    const pictureWrapperRef = useRef<HTMLDivElement>(null); // 이미지 컨테이너 참조

    // 프로젝트 데이터 로드
    useEffect(() => {
        const path = window.location.pathname;
        const pathParts = path.split('/');
        const projectId = pathParts[pathParts.length - 1];
    
        fetch(`https://stag.likelionuniv.com/api/v1/project/${projectId}`)
            .then(response => response.json())
            .then(data => setProjectData(data.data))
            .catch(error => console.error('Error fetching project data:', error));
    }, []);
    

    // 이미지의 길이를 확인
    const getImageLength = () => projectData?.imageUrl ? projectData.imageUrl.length : 0;

    // 이전 이미지로 이동
    const goToPrevious = useCallback(() => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    }, [currentIndex]);

    // 다음 이미지로 이동
    const goToNext = useCallback(() => {
        if (currentIndex < getImageLength() - 1) setCurrentIndex(currentIndex + 1);
    }, [currentIndex, getImageLength]);

    // 스와이퍼 위치 계산
    const swiperLeftPosition = () => {
        const containerWidth = pictureWrapperRef.current ? pictureWrapperRef.current.offsetWidth : 0;
        return 18 + (150 * currentIndex) / getImageLength();
    };

    // 서비스 바로가기 버튼 클릭 이벤트
    const onButton1Click = useCallback(() => {
        if (projectData?.productionUrl) window.open(projectData.productionUrl);
    }, [projectData]);

    // 모달 컨텐츠 클릭 시 이벤트 전파 방지
    const handleModalContentClick = (e: React.MouseEvent) => e.stopPropagation();

    // 모달 상태 토글
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // 로딩 상태 확인
    if (!projectData) return <div>Loading...</div>;

    // 현재 이미지 URL
    const currentImageUrl = projectData ? `https://${projectData.imageUrl[currentIndex]}` : '';


    // 스와이퍼 스타일
    const swiperStyle = {
        bottom: '1.5rem',
        left: `${swiperLeftPosition()}%`,
        transform: 'translateX(-50%)',
    };


    return (
        <ProjectDetailRoot>
            <ProjectRoot>
                <Styles />
                <ProjectPictureWrapper>
                    <TransLeft src={Chevron_Left} alt="이전" onClick={goToPrevious} />
                    <ProjectPicture src={currentImageUrl} alt="Project Image" />
                    <TransRight src={Chevron_Right} alt="이전" onClick={goToNext} />
                    <PicSwiper style={swiperStyle}>
                        <IconLeft alt="이전" src={SwiperLeft} onClick={goToPrevious} />
                        <IconRight alt="다음" src={SwiperRight} onClick={goToNext} />
                        <SwiperText>{`${currentIndex + 1}/${projectData.imageUrl.length}`}</SwiperText>
                    </PicSwiper>
                    <ProjectModalButton alt="" src={PopModal} onClick={toggleModal} />
                </ProjectPictureWrapper>
                {isModalOpen && (
                        <FullScreenModal onClick={(e) => {
                            if (window.innerWidth <= 768) {
                            toggleModal(); // 768px 이하일 때만 모달 토글
                            }
                        }}>
                        <ModalArrowLeft 
                        src={currentIndex > 0 ? (window.innerWidth <= 768 ? TransLeftOn : ModalLeftOn) : ModalLeftOff}
                        onClick={(e) => { handleModalContentClick(e); goToPrevious(); }}
                        />
                        <ModalImage 
                        src={currentImageUrl}
                        alt="" 
                        onClick={handleModalContentClick}
                        />
                        <ModalArrowRight 
                        src={currentIndex < projectData.imageUrl.length - 1 ? (window.innerWidth <= 768 ? TransRightOn : ModalRightOn) : ModalRightOff}
                        onClick={(e) => { handleModalContentClick(e); goToNext(); }}
                        />
                        <CloseIcon 
                        alt="" 
                        src={Close} 
                        onClick={(e) => { handleModalContentClick(e); toggleModal(); }}
                        />
                        <ModalIndex>{`${currentIndex + 1}/${projectData.imageUrl.length}`}</ModalIndex>
                    </FullScreenModal>
                    )}
                <ProjectMainDescription>
                    <Tags>
                        <B>#{projectData.activity}</B>
                        <B>#{projectData.outPut}</B>
                    </Tags>
                    <ProjectTitle>{projectData.serviceName}</ProjectTitle>
                    <ProjectSummary>{projectData.description}</ProjectSummary>
                    <ProjectContainer>
                        <P>{projectData.content}</P>
                    </ProjectContainer>
                    <LineContainer>
                        <HorizontalLine1/>
                        <HorizontalLine2/>
                    </LineContainer>
                    <PeopleInfo />
                    <LineContainer>
                        <HorizontalLine3/>
                        <HorizontalLine4/>
                        <HorizontalLine5/>
                    </LineContainer>
                    <ButtonMobile onClick={onButton1Click}>
                        <ButtonText>서비스 바로가기</ButtonText>
                        <IconArrowUpright alt="" src={RightArrow} />
                    </ButtonMobile>
                </ProjectMainDescription>
                <Button onClick={onButton1Click}>
                    <ButtonText>서비스 바로가기</ButtonText>
                    <IconArrowUpright alt="" src={RightArrow} />
                </Button>    
                <GoBackButton
                    ArrowLeft={LeftArrow}
                    GoBackButtonCursor="pointer"
                    GoBackButtonPadding="3rem"
                    GoBackButtonBackgroundColor="transparent"
                    GoBackButtonPosition="relative"
                    GoBackButtonTop="calc(50% + 629px)"
                    GoBackButtonLeft="-7%"
                    ArrowLeftWidth="1.5rem"
                    ArrowLeftHeight="1.5rem"
                    bDisplay="inline-block"
                    marginTop="0%"
                />
            </ProjectRoot>
        </ProjectDetailRoot>
        
    );
};

export default ProjectDetail;