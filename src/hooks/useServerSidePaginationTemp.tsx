import { useState, useEffect } from 'react';
import request from '../utils/request';
import Pagination from '../components/mypage/Pagination';

interface IuseServerSidePagination<P> {
    uri: string;
    params?: P;
}

interface ReturnuseServerSidePagination<T> {
    loading: boolean;
    curPageItem: T[];
    renderPaginationBtn: () => JSX.Element;
}

function useServerSidePaginationTemp<T, P>({
    uri,
    params,
}: IuseServerSidePagination<P>): ReturnuseServerSidePagination<T> {
    const [data, setData] = useState<T[]>([]);
    const [pageLength, setPageLength] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async (page: number): Promise<T[]> => {
            setLoading(true);
            const response = await request<null, T[], P>({
                uri,
                method: 'get',
                params,
            });

            setPageLength(Math.ceil(response.data.length / 12));
            setLoading(false);
            return response.data;
        };

        const loadData = async (): Promise<void> => {
            const result = await fetchData(currentPage);
            setData(result);
        };

        loadData();
    }, [currentPage, uri, params]);

    const renderPaginationBtn = (): JSX.Element => {
        return (
            <Pagination
                totalPageNum={pageLength}
                pageNum={currentPage}
                setPageNum={setCurrentPage}
            />
        );
    };

    return {
        loading,
        curPageItem: data,
        renderPaginationBtn,
    };
}

export default useServerSidePaginationTemp;
