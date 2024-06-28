import { styled } from 'styled-components';
import HackathonPart from './HackathonPart';
import title from '../../../../img/landing/title.png';
import { ReactComponent as PixelFireworksIcon } from '../../../../img/landing/pixel_fireworks.svg';
import { ReactComponent as PixelSingingIcon } from '../../../../img/landing/pixel_singing.svg';
import * as MG from '../MainGraphic.style';

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
        </MainWrapper>
    );
};

export default MainInfo;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    margin-top: 302px;
    width: 926px;
    height: auto;
`;
