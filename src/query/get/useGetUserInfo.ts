import { useSuspenseQuery } from '@tanstack/react-query';
import { IuserProfile } from '../../components/mypage/type';
import request from '../../api/request';

interface Userinfo {
    userId: number;
    profileImage: string;
    role: string;
    name: string;
}

function useGetUserInfo() {
    const fetchUserInfo = async () => {
        const responseUserinfo = await request<null, Userinfo, null>({
            uri: '/api/v1/auth/userinfo',
            method: 'get',
        });

        const userId = responseUserinfo.data.userId;

        const responseUserDetailInfo = await request<null, IuserProfile, null>({
            uri: `/api/v1/user/${userId}/profile`,
            method: 'get',
        });

        return responseUserDetailInfo.data;
    };

    const { data: userinfo, error } = useSuspenseQuery({
        queryKey: ['get-user-info-and-detail'],
        queryFn: fetchUserInfo,
    });

    return {
        userinfo,
        error,
    };
}

export default useGetUserInfo;
