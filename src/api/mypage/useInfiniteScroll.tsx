import { useState, useEffect } from 'react';

interface InfiniteScrollProps {
    modalRef: React.RefObject<HTMLDivElement>;
    hasNextPage: boolean;
    fetchNextPage: () => Promise<any>;
}

export function useInfiniteScroll({
    modalRef,
    hasNextPage,
    fetchNextPage,
}: InfiniteScrollProps) {
    const [isFetching, setIsFetching] = useState(false);
    // 스크롤 이벤트 감지 함수
    useEffect(() => {
        const handleScroll = () => {
            if (modalRef.current) {
                const { scrollTop, scrollHeight, clientHeight } =
                    modalRef.current;
                if (clientHeight + scrollTop >= scrollHeight) {
                    setIsFetching(true);
                }
            }
        };
        setIsFetching(true);
        if (modalRef.current) {
            modalRef.current.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (isFetching && hasNextPage) fetchNextPage();
        else if (!hasNextPage) setIsFetching(false);
    }, [isFetching]);

    return { isFetching };
}
