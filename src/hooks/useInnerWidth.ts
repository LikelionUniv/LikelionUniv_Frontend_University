import { useEffect, useState } from 'react';

interface RuseInnerWidth {
    innerWidth: number;
}

function useInnerWidth(): RuseInnerWidth {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener(`resize`, handleResize);
        return () => {
            window.removeEventListener(`resize`, handleResize);
        };
    }, []);

    return { innerWidth };
}

export default useInnerWidth;
