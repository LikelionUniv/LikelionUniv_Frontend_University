import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import GoBackButton from "./GoBackButton";
import FormContainer from "./FormContainer";
import Styles from "./Styles";
import { LeftArrow, RightArrow, SwiperLeft,SwiperRight,PopModal } from "../../../img/project/detail";

const B = styled.b`
  position: relative;
  line-height: 150%;
`;
const ProjectMainDescription = styled.div`

`

const Tags = styled.div`
  position: absolute;
  top: 51.63rem;
  left: 12.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  color: var(--color-darkorange);
`;
const Palette = styled.b`
  position: absolute;
  top: 54.13rem;
  left: 12.5rem;
  font-size: var(--title-48-bold-size);
`;
const Palette1 = styled.b`
  position: absolute;
  top: 58.19rem;
  left: 12.5rem;
  font-size: var(--title-24-bold-size);
  line-height: 150%;
`;
const P = styled.p`
  margin: 0;
`;
const PaletteContainer = styled.div`
  position: absolute;
  top: 61.94rem;
  left: 12.5rem;
  line-height: 160%;
  font-weight: 500;
  display: inline-block;
  width: 42.75rem;
`;
const ProjectPicture = styled.img`
  position: absolute;
  margin: auto;
  display: block;
  top: 5rem;
  width: 52rem;
  height: 35rem;
  object-fit: cover;
  z-index: 1;
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
const B1 = styled.b`
  position: absolute;
  top: 0.56rem;
  left: 2.25rem;
  line-height: 150%;
`;
const PicSwiper = styled.div`
  position: relative;
  top: 36.38rem;
  border-radius: var(--br-5xs);
  background-color: var(--grey-900);
  width: 5.63rem;
  height: 2.25rem;
  overflow: hidden;
  font-size: var(--body-12-bold-size);
  color: var(--white);
  z-index: 2;
`;
const ProjectModal = styled.img`
  position: relative;
  top: 35.13rem;
  left: 20rem;
  border-radius: var(--br-5xs);
  width: 3.5rem;
  height: 3.5rem;
  overflow: hidden;
  z-index: 2;
`;
const B2 = styled.b`
  position: absolute;
  top: calc(50% - 15px);
  left: 1.75rem;
  font-size: var(--subtitle-20-bold-size);
  line-height: 150%;
  font-family: var(--subtitle-20-bold);
  color: var(--white);
  text-align: left;
`;
const IconArrowUpright = styled.img`
  position: absolute;
  top: calc(50% - 14px);
  left: 20.5rem;
  width: 1.75rem;
  height: 1.75rem;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-darkorange);
  position: absolute;
  top: 53rem;
  left: 63rem;
  border-radius: var(--br-5xs);
  width: 24rem;
  height: 4rem;
  overflow: hidden;
`;
const ProjectRoot = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 90rem;
  overflow-y: auto;
  font-size: var(--subtitle-16-bold-size);
  color: var(--grey-900);
  font-family: var(--subtitle-20-bold);
`;


const ProjectDetail: FunctionComponent = () => {

  const onButton1Click = useCallback(() => {
    window.open("https://www.naver.com/");
  }, []);

  return (
    <ProjectRoot>
      <Styles />
      <ProjectPicture alt="" src="" />
      <PicSwiper> {/* 사진을 넘겨볼 수 있는 스와이퍼*/}
        <IconLeft alt="" src={SwiperLeft} />
        <IconRight alt="" src={SwiperRight} />
        <B1>1/8</B1>
      </PicSwiper>
      <ProjectModal alt="" src={PopModal} /> {/* 프로젝트 상세 설명 모달*/}
      <ProjectMainDescription>
        <Tags>
          <B>#아이디어톤</B>
          <B>#WEB</B>
        </Tags>
        <Palette>Palette</Palette>
        <Palette1>Palette : 색으로 기억하는 추억 아카이브</Palette1>
        <PaletteContainer>
          <P>
            Palette은 오늘 하루에 대해 떠오르는 색을 선택하여, 기억하고 싶은
            순간들을 기록하는 아카이빙 서비스입니다.
          </P>
          <P>
            1) Palette를 통해 사용자가 그날 느꼈던 감정이나 분위기를 더 생생하게
            기억하고 특별하게 추억할 수 있게 합니다.
          </P>
          <P>
            2) 기록의 시작과 끝에 색 이미지를 부여해 사용자에게 특별한 기록 경험을
            제공하고 사용자 고유의 아카이브를 소장할 수 있게 합니다.
          </P>
          <P>
            3) 한정된 단어로는 형용하는 데에 한계가 있는 사람의 감정을 다채로운
            색을 통해 다양한 형태로 표현 할 수 있습니다.
          </P>
        </PaletteContainer>
      </ProjectMainDescription>
      <Button onClick={onButton1Click}>
        <B2>서비스 바로가기</B2>
        <IconArrowUpright alt="" src={RightArrow} />
      </Button>
      <FormContainer />
      <GoBackButton
        icon24PixelArrowLeft={LeftArrow}
        GoBackButtonCursor="pointer"
        GoBackButtonPadding="3rem"
        GoBackButtonBackgroundColor="transparent"
        GoBackButtonPosition="absolute"
        GoBackButtonTop="calc(50% + 629px)"
        GoBackButtonLeft="calc(50% - 87px)"
        icon24PixelArrowLeftWidth="1.5rem"
        icon24PixelArrowLeftHeight="1.5rem"
        bDisplay="inline-block"
        marginTop="10rem"
      />
    </ProjectRoot>
  );
};

export default ProjectDetail;
