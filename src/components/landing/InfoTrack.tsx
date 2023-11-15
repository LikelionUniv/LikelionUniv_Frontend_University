import * as IF from './Information.style';
import { ReactComponent as Arrow } from '../../img/landing/pixel_arrow_white.svg';
import frontEndImage from '../../img/landing/frontend.png';
import backEndImage from '../../img/landing/back.png';
import designImage from '../../img/landing/design.png';
import planningImage from '../../img/landing/plan.png';
import { BoxProps } from './InfoActivity';

export interface TrackBoxProps {
    hoverColor: string;
    hoverBackColor: string;
}

const trackArray: any[] = [
    {
        hoverColor: "#FFB13C",
        name: "프론트엔드",
        text: "사용자와 가까이 있는 개발 파트로, 웹 클라이언트 개발을 위한 기초부터 심화까지의 스킬을 배울 수 있습니다. HTML, CSS, Javascript를 학습하며 기초 개발 역량을 잡아나갑니다.",
        image: frontEndImage,
    },
    {
        hoverColor: "#C6F959",
        name: "백엔드",
        text: "눈에 보이지 않는 서버를 전반적으로 담당하는 백엔드는, 서비스의 요구사항에 맞춰 API를 개발하고 서비스 배포 및 운영을 통해 데이터를 관리합니다. Django, DRF, Spring 등 다양한 프레임워크를 바탕으로 서비스 운영을 위한 전체적인 인프라를 구현합니다.",
        image: backEndImage,
    },
    {
        hoverColor: "#FF7710",
        name: "기획",
        text: "Team Leader로서 프로젝트의 진행을 리드하며 서비스 기획자, PM이 되기 위한 역량을 기를 수 있습니다. 이를 통해 협업에 필요한 내용들을 설계하는 경험을 할 수 있습니다.",
        image: planningImage,
    },
    {
        hoverColor: "#FF7710",
        name: "디자인",
        text: "디자인 툴을 익히고 다양한 웹 디자인 이론과 용어들을 배우며 협업에 도움이 되는 스킬을 키울 수 있습니다. 이를 통해 협업에 필요한 내용들을 설계하는 경험을 할 수 있습니다.",
        image: designImage,
    },
];

const InfoTrack = () => {
    return (
        <IF.TrackWrapper>
            {trackArray.map((item, index) => (
                <IF.TrackBox key={index} hoverColor={item.hoverColor} hoverBackColor={item.hoverBackColor}>
                    <div className="title">
                        <div className="name">{item.name}</div>
                        <Arrow className="hover-hide" />
                    </div>
                    <div className="hover-text">{item.text}</div>
                    <div className='img-wrapper'>
                        <img src={item.image} alt="" className="img-hide" />
                    </div>
                </IF.TrackBox>
            ))}
        </IF.TrackWrapper>
    );
};

export default InfoTrack;