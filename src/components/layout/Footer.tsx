import React from 'react';
import * as F from './Footer.style';

import { ReactComponent as Logo } from '../../img/nav/logo.svg';
import { ReactComponent as EmailIcon } from '../../img/landing/footer_email.svg';
import { ReactComponent as InstagramIcon } from '../../img/landing/footer_instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../img/landing/footer_youtube.svg';
import { ReactComponent as BrunchIcon } from '../../img/landing/footer_brunch.svg';
import { ReactComponent as ArrowIcon } from '../../img/landing/footer_arrow.svg';
import { ReactComponent as DownloadIcon } from '../../img/landing/footer_download.svg';

function Footer(): JSX.Element {
    // 개인정보 처리방침에 대한 디자인이 없어 노션링크로 대체
    const privacyPolicy = (): void => {
        window.open('https://likelion.notion.site/57da1115d36144abbeb1c843ec4c18b3?pvs=4');
    }

    return (
        <F.Wrapper>
            <F.Info>
                <div className="container">
                    <div className="left">
                        <Logo />
                        <p className="text">
                            사단법인 멋쟁이사자처럼 | 대표자 이두희
                        </p>
                        <p className="text">
                            서울특별시 종로구 종로3길 17, D1동 16, 17층(청진동,
                            D타워)
                        </p>
                        <p className="text">등록번호 : 206-82-13812</p>
                        <p className="text mail">
                            <EmailIcon />
                            문의처
                            <a href="mailto:univ_admin@likelion.net">
                                univ_admin@likelion.net
                            </a>
                        </p>
                        <div className="icon-container">
                            <a
                                href="https://www.instagram.com/likelion.univ/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                            <a
                                href="https://www.youtube.com/@likelion.official"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <YoutubeIcon />
                            </a>
                            <a
                                href="https://brunch.co.kr/@likelion"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BrunchIcon />
                            </a>
                            <a href="/about" className="makers-btn">
                                제작자
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <div className="section">
                            <div className="title">FAMILY SITE</div>
                            <a
                                href="https://techit.education"
                                target="_blank"
                                className="link text"
                                rel="noreferrer"
                            >
                                TECHIT <ArrowIcon />
                            </a>
                            <a
                                href="https://www.modernlion.io"
                                target="_blank"
                                className="link text"
                                rel="noreferrer"
                            >
                                MODERN LION <ArrowIcon />
                            </a>
                        </div>
                        <div className="section">
                            <div className="title">POLICY</div>
                            <div className="text">회칙</div>
                            <div className="text" onClick={privacyPolicy}>개인정보처리방침</div>
                            <div className="text">
                                Nonprofit Report <DownloadIcon />
                            </div>
                            <div className="text">
                                지정기탁신청서 <DownloadIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </F.Info>
        </F.Wrapper>
    );
}

export default Footer;
