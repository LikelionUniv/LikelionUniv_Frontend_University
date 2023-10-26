import * as F from './Footer.style';
import recruitimage from '../../img/landing/recruit_image.png';
import makersbackground from '../../img/landing/makers_background.png';
import { ReactComponent as PixelNoticeIcon } from '../../img/landing/pixel_notice.svg';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';
import { ReactComponent as PixelArrowIcon } from '../../img/landing/pixel_arrow_upright.svg';
import { ReactComponent as ArrowIcon } from '../../img/arrow_up_right.svg';

const Footer = () => {
    return (
        <F.Wrapper>
            <F.Recruit>
                <div className="container">
                    <div className="left">
                        <div className="title">
                            모집 알림 <PixelNoticeIcon /> 신청
                        </div>
                        <div className="text">
                            모집이 시작되면 이메일과 카톡으로 안내받고, <br />
                            멋쟁이사자처럼에 합류해 보세요!
                        </div>
                        <a href="/" target="_blank" className="btn">
                            모집 알림 신청하기 <PixelLongArrowIcon />
                        </a>
                    </div>
                    <div className="img-rect">
                        <img src={recruitimage} />
                    </div>
                </div>
            </F.Recruit>
            <F.Makers>
                <img src={makersbackground} />
                <div className="container">
                    <div className="text">
                        멋쟁이사자처럼 홈페이지를 만든 사람들이 궁금하다면?
                    </div>
                    <a href="/" target="_blank" className="btn">
                        제작자 보기 <PixelArrowIcon />
                    </a>
                </div>
            </F.Makers>
            <F.Info>
                <div className="container">
                    <div className="left">
                        <div className="title">LIKELION</div>
                        <div className="text">© 2023 Likelion.</div>
                    </div>
                    <div className="right">
                        <a href="/" target="_blank">
                            개인정보 처리방침
                            <ArrowIcon />
                        </a>
                        <a href="/" target="_blank">
                            인스타그램
                            <ArrowIcon />
                        </a>
                        <a href="@mailto:" target="_blank">
                            이메일
                            <ArrowIcon />
                        </a>
                        <a href="/" target="_blank" className="btn">
                            제작자
                        </a>
                    </div>
                </div>
            </F.Info>
        </F.Wrapper>
    );
};

export default Footer;
