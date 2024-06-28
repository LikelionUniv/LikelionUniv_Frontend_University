import { styled } from 'styled-components';
import HackathonPart from './HackathonPart';
import title from '../../../../img/landing/title.png';
import { ReactComponent as PixelFireworksIcon } from '../../../../img/landing/pixel_fireworks.svg';
import { ReactComponent as PixelSingingIcon } from '../../../../img/landing/pixel_singing.svg';
import info from '../../../../img/landing/info.png';
import * as MG from '../MainGraphic.style';
import growl_to_world from '../../../../img/landing/growl_to_world.png';
import two_check from '../../../../img/landing/two_check.png';

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
            <SecondWrapper>
                <Img1 src={growl_to_world} alt="" />
                <Img2 src={two_check} alt="" />
                <img src={info} alt="" />
            </SecondWrapper>
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
        rgba(255, 146, 64, 0.3) 964px,
        transparent 964px
    );
`;

const Img = styled.img`
    margin-top: 302px;
    max-width: 926px;
    height: auto;
`;

const SecondWrapper = styled.div`
    max-width: 1200px;
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
