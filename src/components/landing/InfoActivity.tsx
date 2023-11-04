import { useState } from 'react';
import * as IF from './Information.style';
import { ReactComponent as HackathonImg } from '../../img/landing/hackathon.svg';
import { ReactComponent as IdeathonImg } from '../../img/landing/ideathon.svg';
import { ReactComponent as Arrow } from '../../img/landing/pixel_arrow_white.svg';

export interface BoxProps {
    background?: string;
    hoverBackColor?: string;
}

const activityArray: any[] = [
    {
        background: '#FFB13C',
        hoverBackColor:
            'linear-gradient(180deg, rgba(255, 119, 16, 0.30) 0%, rgba(255, 119, 16, 0.00) 100%)',
        name: '해커톤',
        text: '해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명 해커톤에 대한 설명',
    },
    {
        background: '#FF7700',
        hoverBackColor:
            'linear-gradient(180deg, rgba(255, 119, 16, 0.30) 0%, rgba(255, 119, 16, 0.00) 100%)',
        name: '아이디어톤',
        text: '아이디어톤에 대한 설명',
    },
    {
        background: '#FF7700',
        hoverBackColor:
            'linear-gradient(180deg, rgba(255, 177, 60, 0.20) 0%, rgba(255, 177, 60, 0.00) 100%)',
        name: '학교별 스터디',
        text: '학교별 스터디에 대한 설명',
    },
    {
        background: '#FFB13C',
        hoverBackColor:
            'linear-gradient(180deg, rgba(255, 119, 16, 0.30) 0%, rgba(255, 119, 16, 0.00) 100%)',
        name: '데모데이',
        text: '데모데이에 대한 설명',
    },
];

const InfoActivity = () => {
    return (
        <div style={{ width: '100%' }}>
            <IF.ActivityContainer>
                {activityArray.map(item => (
                    <IF.Box
                        background={item.background}
                        hoverBackColor={item.hoverBackColor}
                    >
                        <div className="title">
                            <div className="name">{item.name}</div>
                            <Arrow className="hover-hide" />
                        </div>
                        <HackathonImg className="img-hide" />
                        <div className="hover-text">{item.text}</div>
                    </IF.Box>
                ))}
            </IF.ActivityContainer>
        </div>
    );
};

export default InfoActivity;
