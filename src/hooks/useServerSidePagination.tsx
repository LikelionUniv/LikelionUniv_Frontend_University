import { useState, useEffect } from 'react';
import { usePagination } from 'react-use-pagination';
import request from '../utils/request';
import PaginationComponent from '../components/utils/pagination/PaginationComponent';

interface IuseServerSidePagination {
    uri: string;
    size: number;
    sort?: string[];
}

interface RuseServerSidePagination<T> {
    loading: boolean;
    curPageItem: T[];
    renderPaginationBtn: () => JSX.Element;
}

interface Pageable {
    page: number;
    size: number;
    sort?: string[];
}

function useServerSidePagination<T>({
    uri,
    size,
    sort,
}: IuseServerSidePagination): RuseServerSidePagination<T> {
    const [data, setData] = useState<T[]>([]);
    const [dataLength, setDataLength] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const { currentPage, setPage } = usePagination({
        totalItems: dataLength,
        initialPageSize: size,
    });

    useEffect(() => {
        const fetchData = async (page: number): Promise<T[]> => {
            setLoading(true);
            const response = await request<null, T[], Pageable>({
                uri,
                method: 'get',
                params: {
                    page,
                    size,
                    sort,
                },
            });

            if (response === undefined) {
                setLoading(false);
                throw Error('서버 에러');
            }

            setDataLength(response.data.length);
            setLoading(false);
            return response.data;
        };

        const loadData = async (): Promise<void> => {
            const result = await fetchData(currentPage + 1);
            setData(result);
        };

        loadData();
    }, [currentPage, size, sort, uri]);

    const onSetPage = (page: number): void => {
        setPage(page - 1);
    };

    const renderPaginationBtn = (): JSX.Element => {
        return (
            <PaginationComponent
                page={currentPage + 1}
                pageSize={size}
                count={dataLength}
                setPage={onSetPage}
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
