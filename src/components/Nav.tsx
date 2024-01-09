import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../img/nav/logo.svg';
import navarrow from '../img/nav/nav_arrow.svg';
import chat from '../img/nav/chat.svg';
import defaultprofile from '../img/nav/default_profile.svg';
import mypage from '../img/nav/mypage.svg';
import logout from '../img/nav/logout.svg';
import { ReactComponent as Arrow } from '../img/arrow.svg';
import { ReactComponent as MenuIcon } from '../img/nav/nav_menu.svg';
import { debounce } from 'lodash';
import { useAuth } from '../hooks/useAuth';
// import default_profile from '../img/mypage/default_profile.svg';

const Nav = () => {
    const navigate = useNavigate();
    
    // 로그인 상태
    const [isLogin, setIsLogin] = useState<Boolean>(false);
    const { userinfo, setUserinfo } = useAuth();
    // const profileSrc =
    //     userinfo.profileImage === '' ? defaultprofile : userinfo.profileImage;
    useEffect(() => {
        setIsLogin(userinfo.isLogin);
    }, [userinfo]);
    const onClickLogout = () => {
        localStorage.clear();
        setUserinfo({
            name: '',
            profileImage: '',
            userId: -1,
            role: '',
            isLogin: false,
        });
    };

    // 프로필 버튼 창 상태
    const [profileModal, setProfileModal] = useState<Boolean>(false);
    // 프로필 버튼 참조
    const buttonRef = useRef<HTMLDivElement>(null);
    // 프로필 모달 참조
    const modalRef = useRef<HTMLDivElement>(null);
    // 프로필 모달이 아닌 곳을 누르면 (버튼 포함) 모달이 꺼짐
    useEffect(() => {
        const clickOutside = (e: any) => {
            if (
                profileModal &&
                modalRef.current &&
                !modalRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setProfileModal(false);
            }
        };
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [profileModal]);

    // 모바일 뷰 감지
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isPC, setIsPC] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = debounce(() => {
            setWidth(window.innerWidth);
        }, 200);
        window.addEventListener(`resize`, handleResize);
        return () => {
            window.removeEventListener(`resize`, handleResize);
        };
    }, []);
    useEffect(() => {
        if (width > 768) setIsPC(true);
        else setIsPC(false);
    }, [width]);

    // 모바일 네브바 메뉴 상태
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    // 경로 변경 시 메뉴 닫기
    useEffect(() => {
        setMobileMenu(false);
    }, [window.location.href]);
    // 네브바 메뉴 참조
    const menuRef = useRef<HTMLDivElement>(null);
    // 네브바 참조
    const containerRef = useRef<HTMLDivElement>(null);
    // 네브바가 아닌 곳 또는 버튼을 누르면 메뉴가 꺼짐
    useEffect(() => {
        const clickOutside = (e: any) => {
            if (
                mobileMenu &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                containerRef.current &&
                !containerRef.current.contains(e.target)
            ) {
                setMobileMenu(false);
            }
        };
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, [mobileMenu]);

    // 네비게이션 바 스크롤 감지에 따른 상태
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState<Boolean | undefined>(undefined);
    useEffect(() => {
        const handleScroll = () => {
            const moving = window.pageYOffset;
            // 프로필 모달(마이페이지, 로그아웃 창)이 켜져 있거나 모바일 메뉴 바가 열려 있으면 스크롤 내려도 없어지지 않음
            if (!profileModal && !mobileMenu) setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position, profileModal, mobileMenu]);

    return (
        <Wrapper
            className={
                visible === false && position > 100
                    ? 'fade-out'
                    : visible === true && position > 100
                    ? 'fade-in'
                    : undefined
            }
        >
            {isPC ? (
                <Container>
                    <div className="left">
                        <Logo src={logo} onClick={() => navigate('/')} />
                        <Text to="/recruit" className="first">
                            <p>리크루팅</p>
                            <img src={navarrow} />
                        </Text>
                        <Text to="/univ">
                            <p>참여대학</p>
                            <img src={navarrow} />
                        </Text>
                        <Text to="/project">
                            <p>프로젝트</p>
                            <img src={navarrow} />
                        </Text>
                      {  /** <Text to="/community">
                            <p>커뮤니티</p>
                            <img src={navarrow} />
                        </Text> */ }
                        {  /** <Text to="/donate">
                            <p style={{ whiteSpace: 'nowrap' }}>
                                연간기부금모금액 및 활용실적
                            </p>
                            <img src={navarrow} />
                        </Text>  */ }
                    </div>

                    <div className="right">
                        {isLogin ? (
                            <>
                                <ChatBtn to="/chat">
                                    <img src={chat} />
                                </ChatBtn>
                                <ProfileBtn
                                    ref={buttonRef}
                                    onClick={() => setProfileModal(pre => !pre)}
                                    style={{
                                        backgroundColor: profileModal
                                            ? 'var(--grey-300, #eaecee)'
                                            : '',
                                    }}
                                >
                                    <div className="profile-img">
                                        <img src={defaultprofile} />
                                    </div>
                                    <Arrow
                                        style={{
                                            transform: profileModal
                                                ? 'rotate(0deg)'
                                                : 'rotate(180deg)',
                                            stroke: '#868C94',
                                        }}
                                    />
                                </ProfileBtn>
                            </>
                        ) : (
                            <LoginBtn onClick={() => navigate('/login')}>
                                로그인
                            </LoginBtn>
                        )}
                    </div>
                    {profileModal && (
                        <ProfileModal ref={modalRef}>
                            <div
                                onClick={() => {
                                    setProfileModal(pre => !pre);
                                    
                                }}
                                className="inner"
                            >
                                <img src={mypage} />
                                마이페이지
                            </div>
                            <div
                                onClick={() => {
                                    setProfileModal(pre => !pre);
                              
                                    onClickLogout();
                                    navigate('/');
                                }}
                                className="inner"
                            >
                                <img src={logout} />
                                로그아웃
                            </div>
                        </ProfileModal>
                    )}
                </Container>
            ) : (
                <MContainer ref={containerRef}>
                    <Logo src={logo} onClick={() => navigate('/')} />
                    <MenuIcon onClick={() => setMobileMenu(!mobileMenu)} />
                    {mobileMenu && (
                        <MMenuContainer ref={menuRef}>
                            <Text to="/recruit">
                                <p>리크루팅</p>
                                <img src={navarrow} />
                            </Text>
                            <Text to="/univ">
                                <p>참여대학</p>
                                <img src={navarrow} />
                            </Text>
                            <Text to="/donate">
                                <p style={{ whiteSpace: 'nowrap' }}>
                                    연간기부금모금액 및 활용실적
                                </p>
                                <img src={navarrow} />
                            </Text>
                        </MMenuContainer>
                    )}
                </MContainer>
            )}
        </Wrapper>
    );
};

export default Nav;

// 커스텀 styled-components

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    z-index: 998;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid var(--grey-300, #eaecee);
    background: var(--white, #fff);
    display: flex;
    justify-content: center;
    align-items: center;
    /* &.fade-in {
        animation: show 0.8s;
        @keyframes show {
            from {
                opacity: 0;
                margin-top: -60px;
            }
            to {
                opacity: 1;
                margin-top: 0px;
            }
        }
    }
    &.fade-out {
        margin-top: -60px;
        animation: disappear 0.5s;
        @keyframes disappear {
            from {
                opacity: 1;
                margin-top: 0px;
            }
            to {
                opacity: 0;
                margin-top: -60px;
            }
        }
    } */
`;

const Container = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 1280px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* @media (max-width: 1120px) {
        width: 672px;
    } */
    .left {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .right {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    img {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
    }
`;

const Logo = styled.img`
    height: 16px;
    cursor: pointer;
`;

const Text = styled(NavLink)`
    position: relative;
    flex-shrink: 0;
    width: 100px;
    color: var(--grey-900, #212224);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: default;

    &.first {
        margin-left: 10%;
    }
    &:last-child {
        @media (max-width: 992px) {
            display: none;
        }
    }
    img {
        width: 12px;
        display: none;
        position: absolute;
        left: -17px;
        margin-bottom: 1px;
    }
    p {
        cursor: pointer;
    }
    p:hover + img {
        display: flex;
    }
    &.active {
        font-weight: 700;
        img {
            display: flex;
        }
    }
`;

const LoginBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    border-radius: 20px;
    background-color: var(--grey-900, #212224);
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;

const ChatBtn = styled(NavLink)`
    display: flex;
    border-radius: 6px;
    background-color: transparent;
    &:hover {
        background-color: var(--grey-200, #f2f4f6);
    }
    &:active {
        background-color: var(--grey-300, #eaecee);
    }
    &.active {
        display: none;
    }
    img {
        width: 20px;
        padding: 6px;
    }
`;

const ProfileBtn = styled.div`
    width: 56px;
    height: 36px;
    padding: 0 4px;
    border-radius: 18px;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: var(--grey-200, #f2f4f6);
    }
    &:active {
        background-color: var(--grey-300, #eaecee);
    }
    .profile-img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border: 0.5px solid var(--grey-300, #eaecee);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

const ProfileModal = styled.div`
    position: absolute;
    top: 46px;
    right: 2px;
    z-index: 999;
    width: 128px;
    height: 88px;
    border-radius: 6px;
    border: 1px solid var(--grey-400, #dcdfe3);
    background-color: var(--white, #fff);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .inner {
        width: 120px;
        height: 40px;
        border-radius: 4px;
        color: var(--grey-900, #212224);
        font-family: Pretendard;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:hover {
            background-color: var(--grey-300, #eaecee);
        }
        &:active {
            background-color: var(--grey-400, #dcdfe3);
        }
        img {
            width: 16px;
            margin: 0 8px 0 11px;
        }
    }
`;

const MContainer = styled.div`
    position: relative;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        cursor: pointer;
    }
`;

const MMenuContainer = styled.div`
    width: 100%;
    background-color: rgba(255, 255, 255, 0.97);
    position: fixed;
    top: 56px;
    left: 0;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        justify-content: center;
        padding: 12px 0;
        img {
            left: 0px;
        }
    }
`;