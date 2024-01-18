import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';

export interface IUniversity {
    universityName: string;
    location: string;
    recuriteUrl?: string;
    image?: string;
}

interface useGetLocationUnivProps {
    activeTab: string;
}

function useGetLocationUniv({
    activeTab,
}: useGetLocationUnivProps): IUniversity[] {
    const tab = activeTab === '전체' ? 'all' : activeTab;
    const uri = `/api/v1/university/${tab}`;

    // data 가져오기
    const fetchUniversites = async () => {
        const response = await request<null, IUniversity[], null>({
            uri: uri,
            method: 'GET',
        });
        return response.data;
    };

    const { data: univList } = useSuspenseQuery({
        queryKey: ['getLocationUniv', activeTab],
        queryFn: fetchUniversites,
    });

    // 가나다순 정렬
    const filteredAndSortedUniversities = univList
        .sort((a, b) => a.universityName.localeCompare(b.universityName))
        .filter(
            university =>
                activeTab === '전체' || university.location === activeTab,
        );

    return filteredAndSortedUniversities || [];
}

export default useGetLocationUniv;
