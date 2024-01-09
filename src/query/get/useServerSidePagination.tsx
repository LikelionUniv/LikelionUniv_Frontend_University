import { useState } from 'react';
import Pagination from '../../components/mypage/Pagination';
import request from '../../utils/request';
import { useSuspenseQuery } from '@tanstack/react-query';

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
    const [pageLength, setPageLength] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const fetchPagiableData = async () => {
        const response = await request<
            null,
            ResponseServerSidePagination<T>,
            Pageable
        >({
            uri,
            method: 'get',
            params: {
                page: currentPage,
                size,
                sort,
                search,
            },
        });

        setPageLength(response.data.totalPage);
        return response.data.data;
    };

    const { data } = useSuspenseQuery({
        queryKey: ['get-pagiable', { uri, size, sort, search, currentPage }],
        queryFn: fetchPagiableData,
    });

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
        curPageItem: data,
        renderPaginationBtn,
    };
}

export default useServerSidePagination;
