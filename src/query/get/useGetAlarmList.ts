import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';

interface UseGetAlarmsProps {
    ordinal: number;
}

export interface IAlarmList {
    alarms: IRecruits[];
}

export interface IRecruits {
    id: number;
    ordinal: number;
    email: string;
    createdDate: string;
}

interface AlarmListParam {
    ordinal: number;
}

function useGetAlarmList({ ordinal }: UseGetAlarmsProps) {
    const fetchAlarmsList = async () => {
        const response = await request<null, IAlarmList, AlarmListParam>({
            uri: `/api/admin/v1/alarm`,
            method: 'get',
            params: {
                ordinal,
            },
        });

        return response.data;
    };

    const { data } = useSuspenseQuery({
        queryKey: ['get-recruits', ordinal],
        queryFn: fetchAlarmsList,
    });

    return {
        data,
    };
}

export default useGetAlarmList;
