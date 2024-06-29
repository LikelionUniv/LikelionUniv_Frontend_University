import { useState, useEffect } from 'react';
import request from '../../api/request';
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
    role?: string;
    univName?: string;
    isExcelData?: boolean;
    keyword?: string;
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
    refetch: () => void;
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
    role?: string;
    univName?: string;
    isExcelData?: boolean;
    keyword?: string;
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
    role,
    univName,
    isExcelData,
    keyword,
}: IuseServerSidePagination): ReturnuseServerSidePagination<T> {
    const [data, setData] = useState<T[]>([]);
    const [totalElements, setTotalElements] = useState<number>(0);

    const [pageInfo, setPageInfo] = useSearchParams();
    console.log(typeof pageInfo.get('page'));
    // (if) 페이지 정보가 없을 때 pageInfo를 채워넣음
    // (else if) page=1 이 아니면서 검색을 했을때 page=1, currentPage=1 로 변경
    useEffect(() => {
        if (pageInfo.get('page') === null) {
            pageInfo.set('page', '1');
            setPageInfo(pageInfo);
            setCurrentPage(1);
        } else if (pageInfo.get('page') !== '1' && (search || univName)) {
            console.log('안되나');
            pageInfo.set('page', '1');
            setPageInfo(pageInfo);
            setCurrentPage(1);
        }
        // eslint-disable-next-line
    }, [search, univName, keyword]);

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

    const fetchPagiableData = async () => {
        const response = await request<
            null,
            ResponseServerSidePagination<T> | any,
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
                role,
                univName,
                isExcelData,
                keyword,
            },
        });
        if (uri === '/api/admin/v1/hackathons') return response;
        return response.data;
    };

    const { data: cachingData, refetch } = useSuspenseQuery({
        queryKey: [
            'get-pagiable',
            {
                uri,
                size,
                sort,
                search,
                currentPage,
                mc,
                sc,
                st,
                oc,
                role,
                univName,
                isExcelData,
                keyword,
            },
        ],
        queryFn: fetchPagiableData,
    });

    useEffect(() => {
        setData(cachingData.data);
        setTotalElements(cachingData.totalElements);
    }, [cachingData]);

    useEffect(() => {
        if (sc !== undefined && oc !== undefined) {
            setCurrentPage(1);
        }
    }, [sc, oc]);

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
        refetch,
    };
}

export default useServerSidePagination;
