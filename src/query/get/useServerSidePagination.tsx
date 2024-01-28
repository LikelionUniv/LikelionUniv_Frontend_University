import { useState, useEffect } from 'react';
import request from '../../utils/request';
import { useSuspenseQuery } from '@tanstack/react-query';
import PaginationComponent from '../../components/utils/pagination/PaginationComponent';
import { useSearchParams } from 'react-router-dom';

interface IuseServerSidePagination {
    uri: string;
    size: number;
    sort?: string;
    search?: string;
    mc?: string;
    sc?: string;
    st?: string;
    oc?: string;
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
    pageNum: number;
}

interface Pageable {
    page: number;
    size: number;
    sort?: string;
    search?: string;
    mc?: string;
    sc?: string;
    st?: string;
    oc?: string;
}

function useServerSidePagination<T>({
    uri,
    size,
    sort,
    search,
    mc,
    sc,
    st,
    oc,
}: IuseServerSidePagination): ReturnuseServerSidePagination<T> {
    const [data, setData] = useState<T[]>([]);
    const [totalElements, setTotalElements] = useState<number>(0);

    const [pageInfo, setPageInfo] = useSearchParams();

    // 페이지 정보가 없을 때 pageInfo를 채워넣음
    useEffect(() => {
        if (pageInfo.get('page') === null) {
            pageInfo.set('page', '1');
            setPageInfo(pageInfo);
        }
    }, []);

    // 현재 페이지 정보를 불러옴
    const getCurrentPageInfo = () => {
        if (pageInfo.get('page') === null) {
            return 1;
        }

        return Number(pageInfo.get('page'));
    };

    const setCurrentPageInfo = (pageNum: number) => {
        pageInfo.set('page', pageNum.toString());
        setPageInfo(pageInfo);
    };

    const [currentPage, setCurrentPage] = useState<number>(
        getCurrentPageInfo(),
    );

    useEffect(() => {}, [pageInfo]);

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
                mc,
                sc,
                st,
                oc,
            },
        });

        return response.data;
    };

    const { data: cachingData } = useSuspenseQuery({
        queryKey: [
            'get-pagiable',
            { uri, size, sort, search, currentPage, mc, sc, st, oc },
        ],
        queryFn: fetchPagiableData,
    });

    useEffect(() => {
        setData(cachingData.data);
        setTotalElements(cachingData.totalElements);
    }, [cachingData]);

    const setPage = (page: number): void => {
        setCurrentPageInfo(page);
        setCurrentPage(page);
    };

    const renderPaginationBtn = (): JSX.Element => {
        return (
            <PaginationComponent
                page={currentPage}
                size={size}
                count={totalElements}
                pageRange={5}
                setPage={setPage}
            />
        );
    };

    return {
        curPageItem: data,
        renderPaginationBtn,
        pageNum: currentPage,
    };
}

export default useServerSidePagination;
