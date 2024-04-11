import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../../api/axios';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { IuserModify, IuserProfile } from '../../inteface/myPageType';

const DEFAULT_USER_PROFILE = {
    followerNum: 0,
    followingNum: 0,
    id: -1,
    introduction: '',
    isMine: false,
    major: '',
    name: '',
    ordinal: -1,
    part: '',
    phoneNum: '',
    profileImage: '',
    role: '',
    universityName: '',
};

async function fetchUserProfile(user_id: number): Promise<IuserProfile> {
    const response = await axiosInstance.get(`/api/v1/user/${user_id}/profile`);
    return response.data.data;
}

export function useUserProfile(user_id: number) {
    const { data: userProfile = DEFAULT_USER_PROFILE, error } = useQuery({
        queryKey: ['user-profile', user_id],
        queryFn: () => fetchUserProfile(user_id),
        enabled: user_id !== -1,
        retry: 0,
    });

    return { userProfile, error };
}

async function updateUserProfile(user_id: number, user_info: IuserModify) {
    const { data } = await axiosInstance.patch(
        `/api/v1/user/${user_id}/profile`,
        user_info,
    );

    return data;
}

export function useUpdateUserProfile() {
    const queryClient = useQueryClient();
    const {
        userinfo: { userId },
    } = useAuth();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: (user_info: IuserModify) =>
            updateUserProfile(userId, user_info),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user-profile', userId],
            });
            alert('성공적으로 저장되었습니다.');
            navigate(-1);
            queryClient.invalidateQueries({
                queryKey: ['get-pagiable', { uri: `/api/v1/community/posts` }],
            });
        },
        onError: () => {
            alert('저장에 실패했습니다.');
            navigate(-1);
        },
    });

    return { mutate };
}

export const useCachedUserProfile = (): IuserProfile | undefined => {
    const queryClient = useQueryClient();
    const {
        userinfo: { userId },
    } = useAuth();

    return queryClient.getQueryData<IuserProfile>(['user-profile', userId]);
};
