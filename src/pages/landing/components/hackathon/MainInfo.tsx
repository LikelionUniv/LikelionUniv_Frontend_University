import { styled } from 'styled-components';
import HackathonPart from './HackathonPart';
import title from '../../../../img/landing/title.png';
import { ReactComponent as PixelFireworksIcon } from '../../../../img/landing/pixel_fireworks.svg';
import { ReactComponent as PixelSingingIcon } from '../../../../img/landing/pixel_singing.svg';
import info from '../../../../img/landing/info.png';
import * as MG from '../MainGraphic.style';
import growl_to_world from '../../../../img/landing/growl_to_world.png';
import two_check from '../../../../img/landing/two_check.png';
import check_g from '../../../../img/landing/check_g.png';
import check_r from '../../../../img/landing/check_r.png';
import check_o from '../../../../img/landing/check_o.png';

const MainInfo = () => {
    return (
        <MainWrapper>
            <FirstWrapper>
                <Container>
                    <TitleImg src={title} />
                    <HackathonPart />
                </Container>
                <MG.Line>
                    {[1, 2].map(item => (
                        <div
                            className={
                                item === 1
                                    ? 'track track1'
                                    : item === 2
                                    ? 'track track2'
                                    : ''
                            }
                            key={item}
                        >
                            {[1, 2, 3, 4].map(item => (
                                <div className="flex" key={item}>
                                    <PixelFireworksIcon />
                                    <PixelSingingIcon />
                                    <div className="spacemono text">
                                        Possibility to Reality
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </MG.Line>
            </FirstWrapper>

            <TherdWrapper>
                <Img3 src={check_g} alt="" />
                <SecondWrapper>
                    <Overlay />
                    <ImgWrapper>
                        <Img1 src={growl_to_world} alt="" />
                        <Img2 src={two_check} alt="" />
                    </ImgWrapper>
                    <InfoWrapper>
                        <InfoImg src={info} alt="" />
                    </InfoWrapper>
                </SecondWrapper>
                <Img4 src={check_r} alt="" />
            </TherdWrapper>
        </MainWrapper>
    );
};

export default MainInfo;

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* 추가된 속성 */
    justify-content: center;

    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 550px,
        rgba(0, 0, 0, 0.3) 550px,
        rgba(255, 146, 64, 0.3) 964px,
        transparent 964px
    );

    @media (max-width: 767px) {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 750px,
            rgba(0, 0, 0, 0.3) 750px,
            rgba(255, 146, 64, 0.3) 1164px,
            transparent 1164px
        );
    }

    @media (max-width: 360px) {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 450px,
            rgba(0, 0, 0, 0.3) 450px,
            rgba(255, 146, 64, 0.3) 700px,
            transparent 700px
        );
    }
`;

const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
`;

const TitleImg = styled.img`
    margin-top: 302px;
    width: clamp(520px, 5wv, 926px);
    height: auto;

    @media (max-width: 1440px) {
        margin-top: 447px;
        width: 600px;
    }

    @media (max-width: 767px) {
        margin-top: 447px;
        width: 520px;
    }
    @media (max-width: 360px) {
        margin-top: 287px;
        width: clamp(250px, 2vw, 320px);
    }
`;

const SecondWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 767px) {
        width: 80%;
    }

    @media (max-width: 360px) {
        width: 90%;
    }
`;

const InfoImg = styled.img`
    max-width: 1200px;
    width: 100%;
    height: auto;

    @media (max-width: 767px) {
        width: clamp(320px, 3vw, 512px);
    }

    @media (max-width: 360px) {
        width: clamp(200px, 2vw, 320px);
    }
`;

const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 351px;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.7)
    );
`;

const ImgWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 40px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        width: 80%;
    }
    @media (max-width: 360px) {
        width: 90%;
    }
`;

const Img1 = styled.img`
    width: 396px;
    height: auto;

    @media (max-width: 767px) {
        width: clamp(154px, 2vw, 220px);
    }
    @media (max-width: 360px) {
        width: clamp(100px, 2vw, 154px);
    }
`;

const Img2 = styled.img`
    display: none;

    @media (max-width: 767px) {
        display: inline;
        width: clamp(87px, 2vw, 186px);
        height: auto;
    }
    @media (max-width: 360px) {
        display: inline;
        width: clamp(50px, 1vw, 87px);
        height: auto;
    }
`;

const TherdWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const Img3 = styled.img`
    margin-left: 63px;
    margin-top: 1322px;
    margin-bottom: auto;

    @media (max-width: 1440px) {
        display: none;
    }
`;

const Img4 = styled.img`
    margin-right: 58px;
    margin-top: 776px;
    margin-bottom: auto;

    @media (max-width: 1440px) {
        display: none;
    }
`;
