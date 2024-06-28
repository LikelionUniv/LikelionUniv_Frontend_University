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
            <Img src={title} />
            <HackathonPart />
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
            <TherdWrapper>
                <Img3 src={check_g} alt="" />
                <SecondWrapper>
                    <Overlay />
                    <Img1 src={growl_to_world} alt="" />
                    <Img2 src={two_check} alt="" />
                    <img src={info} alt="" />
                </SecondWrapper>
                <Img4 src={check_r} alt="" />
            </TherdWrapper>
        </MainWrapper>
    );
};

export default MainInfo;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 550px,
        rgba(0, 0, 0, 0.3) 550px,
        rgba(255, 146, 64, 0.3) 864px,
        transparent 864px
    );

    @media (max-width: 767px) {
        width: 80%;
        margin-top: 120px;
    }

    @media (max-width: 360px) {
        width: 90%;
    }
`;

const Img = styled.img`
    margin-top: 302px;
    max-width: clamp(320px, 55vw, 520px); /* Adjusted width with clamp */
    height: auto;
`;

const SecondWrapper = styled.div`
    max-width: 1200px;
    position: relative;
    align-items: center;
`;

const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 351px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

const Img1 = styled.img`
    max-width: 396px;
    height: 202px;
    margin-top: 110px;
    margin-left: 5px;
    margin-bottom: 78px;
    height: auto;
`;

const Img2 = styled.img`
    margin-top: 110px;
    margin-left: 484px;
`;

const Img3 = styled.img`
    margin-bottom: 508px;
    margin-left: 63px;
    max-width: 100%;
    margin-top: 1322px;
    height: auto;
`;

const Img4 = styled.img`
    margin-right: 58px;
    margin-bottom: 1020px;
    max-width: 100%;
    margin-top: 776px;
    height: auto;
`;

const TherdWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;
