import { useState } from 'react';
import * as IF from './Information.style';
import { ReactComponent as HackathonImg } from '../../img/landing/hackathon.svg';
import { ReactComponent as IdeathonImg } from '../../img/landing/ideathon.svg';
import { ReactComponent as Arrow } from '../../img/landing/pixel_arrow.svg';

export interface BoxProps {
    background?: string;
    hoverBackColor?: string;
}

const InfoActivity = () => {
    return (
        <>
            <IF.Box
                background="#FF7710"
                hoverBackColor="linear-gradient(180deg, rgba(255, 119, 16, 0.30) 0%, rgba(255, 119, 16, 0.00) 100%)"
            >
                <div className="title">
                    <div className="name">해커톤</div>
                    <div className="hover-text">해커톤에 대한 설명</div>
                    <Arrow className="hover-hide" />
                </div>
                <HackathonImg className="img-hide" />
            </IF.Box>

            <IF.Box
                background="#C6F959"
                hoverBackColor="linear-gradient(180deg, rgba(198, 249, 89, 0.30) 0%, rgba(198, 249, 89, 0.00) 100%)"
            >
                <div className="title">
                    <div className="name">아이디어톤</div>
                    <div className="hover-text">아이디어톤에 대한 설명</div>
                    <Arrow className="hover-hide" />
                </div>
                <IdeathonImg className="img-hide" />
            </IF.Box>
        </>
    );
};

export default InfoActivity;
