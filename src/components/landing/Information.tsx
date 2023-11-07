import { useRecoilValue } from 'recoil';
import { currentWidthState } from '../../store/landing';
import InfoNumber from './InfoNumber';
import InfoService from './InfoService';
import InfoActivity from './InfoActivity';
import InfoTrack from './InfoTrack';
import InfoPlan from './InfoPlan';
//import InfoSupport from './InfoSupport';
import * as IF from './Information.style';
import { ReactComponent as PixelBulbIcon } from '../../img/landing/pixel_bulb.svg';
import { ReactComponent as PixelStarIcon } from '../../img/landing/pixel_star.svg';
import { ReactComponent as PixelFootprintsIcon } from '../../img/landing/pixel_footprints.svg';
import { ReactComponent as PixelCalendarIcon } from '../../img/landing/pixel_calendar.svg';
import InfoTrackTemp from './InfoTrackTemp';
import InfoActivityTemp from './InfoActivityTemp';
//import { ReactComponent as PixelDiamondIcon } from '../../img/landing/pixel_diamond.svg';

const Information = () => {
    const desWidth = useRecoilValue(currentWidthState);
    return (
        <IF.Outer>
            <IF.Wrapper style={{ paddingBottom: '0' }}>
                <div className="container" style={{ width: desWidth }}>
                    <InfoNumber />
                    <IF.Title>
                        멋사에서 탄생한 <PixelBulbIcon />
                        다양한 서비스
                    </IF.Title>
                    <IF.SubText>다음 주인공은 바로 당신!</IF.SubText>
                </div>
            </IF.Wrapper>
            <InfoService />
            <IF.Wrapper style={{ paddingTop: '0' }}>
                <div className="container" style={{ width: desWidth }}>
                    <IF.Title>
                        주요 <PixelStarIcon />
                        활동
                    </IF.Title>
                    <IF.SubText>
                        다채로운 경험을 통해 즐겁게 교류하고, 빠르게 성장해요.
                    </IF.SubText>
                    <IF.SectionContainer>
                        {/*<InfoActivity />*/}
                        <InfoActivityTemp />
                    </IF.SectionContainer>
                    <IF.Title>
                        <PixelFootprintsIcon />
                        트랙 소개
                    </IF.Title>
                    <IF.SubText>
                        트랙별로 세분화된 경험을 할 수 있어요.
                    </IF.SubText>
                    <IF.SectionContainer>
                        {/*<InfoTrack />*/}
                        <InfoTrackTemp />
                    </IF.SectionContainer>
                    <IF.Title>
                        연간 <PixelCalendarIcon />
                        일정
                    </IF.Title>
                    <IF.SubText>
                        일년 동안 체계적으로 역량을 쌓을 수 있는 커리큘럼이
                        준비되어 있어요.
                    </IF.SubText>
                    <IF.SectionContainer>
                        <InfoPlan />
                    </IF.SectionContainer>
                    {/*
                    <IF.Title>
                        <PixelDiamondIcon />
                        후원사
                    </IF.Title>
                    <IF.SubText>
                        멋진 후원사의 도움으로 더 좋은 교육 환경을 만들어요.
                    </IF.SubText>
                    <IF.SectionContainer>
                        <InfoSupport />
                    </IF.SectionContainer>*/}
                </div>
            </IF.Wrapper>
        </IF.Outer>
    );
};

export default Information;
