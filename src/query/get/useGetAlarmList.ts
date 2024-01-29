import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';

interface UseGetAlarmsProps {
    generation: number;
}

export interface IAlarmList {
    universityName: string;
    recruits: IRecruits[];
}

export interface IRecruits {
    name: string;
    email: string;
    phoneNumber: number;
    generation: number;
    createdAt: number;
}

interface AlarmListParam {
    generation: number;
}

function useGetAlarmList({ generation }: UseGetAlarmsProps) {
    const fetchAlarmsList = async () => {
        const response = await request<null, IAlarmList, AlarmListParam>({
            uri: `/api/admin/v1/alarm/recruit`,
            method: 'get',
            params: {
                generation,
            },
        });

        return response.data;
    };

    const { data } = useSuspenseQuery({
        queryKey: ['get-recruits', generation],
        queryFn: fetchAlarmsList,
    });

    return {
        data,
    };
}

export default useGetAlarmList;
