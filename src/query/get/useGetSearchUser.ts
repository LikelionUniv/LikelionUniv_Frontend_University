import { useQuery, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';
import { User } from '../../components/project/register/user/UserFind';

interface useGetSearchUserProps {
    keyword: string;
}

interface UserSearch {
    currentPage: number;
    size: number;
    hasNext: boolean;
    data: User[];
}

export interface IUserParams {
    name: string;
    page: number;
    size: number;
}

const partOrder: { [key: string]: number } = {
    plan: 1,
    design: 2,
    frontend: 3,
    backend: 4,
};

function useGetSearchUser({ keyword }: useGetSearchUserProps) {
    const sortByPartAndName = (a: User, b: User): number => {
        if (partOrder[a.part] < partOrder[b.part]) {
            return -1;
        } else if (partOrder[a.part] > partOrder[b.part]) {
            return 1;
        } else {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        }
    };

    const searchUser = async () => {
        const response = await request<null, UserSearch, IUserParams>({
            uri: '/api/v1/user/search',
            method: 'get',
            params: {
                name: keyword,
                page: 1,
                size: 10,
            },
        });
        return response.data.data;
    };

    const { data, refetch } = useQuery({
        queryKey: ['search-user', keyword],
        queryFn: searchUser,
        select: data => data.sort(sortByPartAndName),
        enabled: false,
    });

    const queryClient = useQueryClient();

    const clearQuery = () => {
        queryClient.removeQueries({
            queryKey: ['search-user'],
        });
    };

    return {
        data,
        refetch,
        clearQuery,
    };
}

export default useGetSearchUser;
