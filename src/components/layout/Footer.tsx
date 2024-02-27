import React from 'react';
import * as F from './Footer.style';

import { ReactComponent as Logo } from '../../img/nav/logo.svg';
import { ReactComponent as EmailIcon } from '../../img/landing/footer_email.svg';
import { ReactComponent as InstagramIcon } from '../../img/landing/footer_instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../img/landing/footer_youtube.svg';
import { ReactComponent as BrunchIcon } from '../../img/landing/footer_brunch.svg';
import { ReactComponent as ArrowIcon } from '../../img/landing/footer_arrow.svg';
import { ReactComponent as DownloadIcon } from '../../img/landing/footer_download.svg';
import logo1 from '../../img/landing/logo1.svg';
import logo2 from '../../img/landing/logo2.svg';
//import logo3 from '../../img/landing/logo3.png';

import privacyPolicy from '../../constants/file/privacyPolicy.pdf';
import { useNavigate } from 'react-router-dom';

export interface FooterData {
    logo?: string;
}

export const downloadFile = (url: string, fileName: string): void => {
    const link = document.createElement('a');
    link.href = url;

    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
};

function Footer(): JSX.Element {
    const downloadPrivacyPolicy = () => {
        downloadFile(
            privacyPolicy,
            '[멋쟁이사자처럼 대학 개인정보 처리방침].pdf',
        );
    };

    const navigate = useNavigate();
    const goAdmin = () => {
        navigate('/likeliononlyadminuser2013');
    };

    const openRules = () => {
        window.open(
            'https://likelion.notion.site/IT-f719e7c7bed04422bf15d189c30dc4b7',
        );
    };

    return (
        <F.Wrapper>
            <F.Info>
                <div className="container">
                    <div className="left">
                        <Logo />
                        <p className="text">
                            사단법인 멋쟁이사자처럼 | 대표자
                            <span onClick={goAdmin}>{` 이두희`}</span>
                        </p>
                        <p className="text">
                            서울특별시 종로구 종로3길 17, D1동 16, 17층(청진동,
                            D타워)
                        </p>
                        <p className="text">등록번호 : 206-82-13813</p>
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
                            <a
                                href="https://www.likelion.net"
                                target="_blank"
                                className="link text"
                                rel="noreferrer"
                            >
                                LIKELION <ArrowIcon />
                            </a>
                        </div>
                        <div className="section">
                            <div className="title">POLICY</div>
                            <div className="text" onClick={openRules}>
                                회칙
                            </div>
                            <div
                                className="text"
                                onClick={downloadPrivacyPolicy}
                            >
                                개인정보처리방침
                            </div>
                            <div className="text">
                                Nonprofit Report <DownloadIcon />
                            </div>
                            <div className="text">
                                지정기탁신청서 <DownloadIcon />
                            </div>
                        </div>
                        <div className="section">
                            <div className="title">관련사이트</div>
                            <a
                                href="https://www.acrc.go.kr/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={logo2}
                                    alt="국민권익위원회"
                                    style={{
                                        display: 'block',
                                        padding: '8px 0px',
                                        marginLeft: '-4px',
                                    }}
                                />
                            </a>

                            <a
                                href="https://www.nts.go.kr/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={logo1}
                                    alt="국세청"
                                    style={{
                                        display: 'block ',
                                        marginLeft: '-4px',
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </F.Info>
        </F.Wrapper>
    );
}

export default Footer;
