import { useState, useEffect } from 'react';
import request from '../utils/request';
import Pagination from '../components/mypage/Pagination';

interface IuseServerSidePagination {
    uri: string;
    size: number;
    sort?: string;
    search?: string;
}

interface ResponseServerSidePagination<T> {
    totalPage: number;
    totalElements: number;
    pagingSize: number;
    currentPage: number;
    isFirst: boolean;
    isLast: boolean;
    isEmpty: boolean;
    data: T[];
}

interface ReturnuseServerSidePagination<T> {
    loading: boolean;
    curPageItem: T[];
    renderPaginationBtn: () => JSX.Element;
}

interface Pageable {
    page: number;
    size: number;
    sort?: string;
    search?: string;
}

function useServerSidePagination<T>({
    uri,
    size,
    sort,
    search,
}: IuseServerSidePagination): ReturnuseServerSidePagination<T> {
    const [data, setData] = useState<T[]>([]);
    const [pageLength, setPageLength] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {        
        const fetchData = async (page: number): Promise<T[]> => {            
            setLoading(true);
            const response = await request<null, ResponseServerSidePagination<T>, Pageable>({
                uri,
                method: 'get',
                params: {
                    page,
                    size,
                    sort,
                    search,
                },
            });

            if (response === undefined) {
                setLoading(false);
                throw Error('서버 에러');
            }

            setPageLength(response.data.totalPage);
            setLoading(false);
            return response.data.data;
        };

        const loadData = async (): Promise<void> => {
            const result = await fetchData(currentPage);
            setData(result);
        };

        loadData();
    }, [currentPage, size, sort, uri, search]);

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

export default useServerSidePagination;
