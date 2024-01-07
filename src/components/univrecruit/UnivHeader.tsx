import * as U from './UnivHeaderStyle';
import { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { debounce } from 'lodash';
import { currentWidthState } from '../../store/landing';
import Arrow from '../../img/recruit/warrow.svg';
import { ReactComponent as PixelLongArrowIcon } from '../../img/landing/pixel_long_right_arrow.svg';

import gra2 from '../../img/recruit/gra.svg';
import RecruitModal from '../recruit/apply/RecruitModal';
import FooterModal from '../recruit/FooterModal';
import FooterModalMobile from '../univrecruit//UnivModalMobile';
import { Button } from '../univrecruit/UnivHeaderStyle';
const Header = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isPC, setIsPC] = useState<boolean>(true);
    const desRef1 = useRef<HTMLDivElement>(null);
    const desRef2 = useRef<HTMLImageElement>(null);
    const [desWidth, setDesWidth] = useRecoilState(currentWidthState);
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
    useEffect(() => {
        if (!desRef1.current || !desRef2.current) return;
        setDesWidth(
            desRef2.current.offsetLeft -
                desRef1.current.offsetLeft +
                desRef2.current.offsetWidth,
        );
    }, [desRef1, desRef2, width]);
    const io = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {});
        },
        {
            rootMargin: '-150px',
        },
    );
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (targetRef.current) io.observe(targetRef.current);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const { isModalOpen, openModal, closeModal } = useModal();
    // const navigate = useNavigate();

    // const onClick = (): void => {
    //     if (window.innerWidth > 450) {
    //         openModal();
    //     } else {
    //         navigate('babylion');
    //     }
    // };

    //const onClick = (): void => {
    //window.open('https://forms.gle/j4CJ35VwWgePBEJX6');
    // };

    return (
        <U.BlackDiv>
            <U.Inner>
                <U.Content>
                    <U.T1>리크루팅</U.T1>
                    <U.T2>
                        전국 최대 규모의 IT 창업 동아리,
                        <br />
                        멋쟁이사자처럼 대학과 함께하고 싶으신가요? <br />
                        아래 모집 일정을 참고해주세요! <br /> <br />
                    </U.T2>
                    {isMobileView ? (
                        <FooterModalMobile
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    ) : (
                        <FooterModal
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                        />
                    )}
                </U.Content>
                <U.Gra src={gra2}></U.Gra>
            </U.Inner>
        </U.BlackDiv>
    );
};

export default Header;
