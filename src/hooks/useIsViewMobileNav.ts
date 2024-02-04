import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

function useIsViewMobileNav() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [isMobileView, setIsMobileView] = useState<boolean>(width > 1000);

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
        if (width < 1000) setIsMobileView(true);
        else setIsMobileView(false);
    }, [width]);

    return {
        isMobileView,
    };
}

export default useIsViewMobileNav;
