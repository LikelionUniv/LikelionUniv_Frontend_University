import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../api/request';
import { IDropdown } from '../../pages/project/register/RegisterOptions';

interface Universities {
    name: string;
}

function useGetUnivList() {
    const fetchUnivList = async () => {
        const response = await request<null, Universities[], null>({
            uri: '/api/v1/university/',
            method: 'get',
        });

        const universities: IDropdown[] = response.data.map((univ, index) => ({
            value: index + 1,
            label: univ.name,
        }));

        return universities;
    };

    const { data: univList } = useSuspenseQuery({
        queryKey: ['get-univlist'],
        queryFn: fetchUnivList,
    });

    return { univList };
}

export default useGetUnivList;
