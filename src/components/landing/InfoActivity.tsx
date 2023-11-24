import { useState } from 'react';
import * as IF from './Information.style';
import HackathonImg from '../../img/landing/hackathon.png';
import IdeathonImg from '../../img/landing/ideathon.png';
import StudyImg from '../../img/landing/study.png';
import DemoImg from '../../img/landing/demo.png';

import { ReactComponent as Arrow } from '../../img/landing/pixel_arrow_white.svg';

export interface BoxProps {
    background?: string;
    hoverBackColor?: string;
}

interface ImageSize {
    width: number;
    height: number;
}

const activityArray: any[] = [
    {
        background: 'var(--Grey-900, #212224)',
        hoverBackColor:
            'linear-gradient(180deg, rgba(174, 180, 187, 0.30) 0%, rgba(174, 180, 187, 0.00) 100%)',
        name: '해커톤',
        text: '멋대의 꽃, 해커톤은 무박 2일 동안 전체 인원이 한데 모여 특정 주제에 맞는 서비스를 구현해 내는 행사입니다',
        color: 'var(--Grey-600, #ADB3BA)',
    },
    {
        background: 'var(--Grey-900, #212224)',
        hoverBackColor:
            'linear-gradient(180deg, rgba(255, 119, 16, 0.20) 0%, rgba(255, 119, 16, 0.00) 100%)',
        name: '아이디어톤',
        text: '활동 시작 이후 가장 처음 진행되는 전체 행사로, 전국 멋대 아기사자들의 창의적인 아이디어를 가감 없이 볼 수 있는 행사입니다.',
        color: 'var(--Orange-600, #FF7710)',
    },
    {
        background: 'var(--Grey-900, #212224)',
        hoverBackColor:
            'linear-gradient(180deg, rgba(198, 249, 89, 0.20) 0%, rgba(198, 249, 89, 0.00) 100%)',
        name: '학교별 스터디',
        text: '활동 기간 동안 각 학교에서 트랙별 스터디를 진행합니다. 단순히 특정 직무 지식을 쌓는 기간이 아닌, 내 아이디어를 현실화할 수 있는 무기들을 갈고 닦는 시간이라 생각하며 자율 스터디에 참여해보세요. ',
        color: 'var(--Lime-600, #C6F959)',
    },
    {
        background: 'var(--Grey-900, #212224)',
        hoverBackColor:
            'linear-gradient(180deg, rgba(255, 177, 60, 0.20) 0%, rgba(255, 177, 60, 0.00) 100%)',
        name: '데모데이',
        text: '1년 동안 열심히 활동하며 만들어 낸 우리 서비스가 투자, M&A 등을 통해 실제 창업으로 이어질 수 있는 단계입니다. POSSIBILITY TO REALITY! 멋쟁이사자처럼 대학은 아이디어를 실현하는 모든 단계에서, 끝까지, 아기사자 여러분을 지원합니다.   ',
        color: 'var(--Tangerine-600, #FFB13C)',
    },
];

const InfoActivity = () => {
    const [imgSizes, setImgSizes] = useState<{ [name: string]: ImageSize }>({});

    const handleImageLoad = (
        name: string,
        e: React.SyntheticEvent<HTMLImageElement>,
    ) => {
        const imgElement = e.target as HTMLImageElement;

        setImgSizes(prevSizes => ({
            ...prevSizes,
            [name]: {
                width: imgElement.width,
                height: imgElement.height,
            },
        }));
    };

    return (
        <div style={{ width: '100%' }}>
            <IF.ActivityContainer>
                {activityArray.map((item, index) => (
                    <IF.Box
                        background={item.background}
                        hoverBackColor={item.hoverBackColor}
                    >
                        <div className="title">
                            <div className="name" style={{ color: item.color }}>
                                {item.name}
                            </div>
                            <Arrow className="hover-hide" fill={item.color} />
                        </div>
                        <div className="img-wrapper">
                            {item.name === '해커톤' && (
                                <img
                                    src={HackathonImg}
                                    className="img-hide"
                                    alt=""
                                    onLoad={e => handleImageLoad(item.name, e)}
                                />
                            )}
                            {item.name === '아이디어톤' && (
                                <img
                                    src={IdeathonImg}
                                    className="img-hide"
                                    alt=""
                                    onLoad={e => handleImageLoad(item.name, e)}
                                />
                            )}
                            {item.name === '학교별 스터디' && (
                                <img
                                    src={StudyImg}
                                    className="img-hide"
                                    alt=""
                                    onLoad={e => handleImageLoad(item.name, e)}
                                />
                            )}
                            {item.name === '데모데이' && (
                                <img
                                    src={DemoImg}
                                    className="img-hide"
                                    alt=""
                                    onLoad={e => handleImageLoad(item.name, e)}
                                />
                            )}
                            <div
                                className={`hover-text box-${index}`}
                                style={{
                                    height: imgSizes[item.name]
                                        ? imgSizes[item.name].height
                                        : 'auto',
                                    width: 'auto',
                                    whiteSpace: 'normal',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {item.text}
                            </div>
                        </div>
                    </IF.Box>
                ))}
            </IF.ActivityContainer>
        </div>
    );
};

export default InfoActivity;
