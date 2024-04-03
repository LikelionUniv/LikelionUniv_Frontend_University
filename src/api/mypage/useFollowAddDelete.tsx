import { Dispatch, SetStateAction } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from '../axios';
import { useAuth } from '../../hooks/useAuth';

export const followAddApi = async (user_id: number) => {
    const response = await axiosInstance.post(`/api/v1/follow/${user_id}`);
    return response.data;
};

export const followDeleteApi = async (user_id: number) => {
    const response = await axiosInstance.delete(`/api/v1/follow/${user_id}`);
    return response.data;
};

export const useFollowAddDelete = (
    user_id: number,
    setState: Dispatch<SetStateAction<boolean>>,
) => {
    const queryClient = useQueryClient();
    const {
        userinfo: { userId },
    } = useAuth();
    const { mutate } = useMutation({
        mutationFn: (isFollowed: boolean) =>
            isFollowed ? followDeleteApi(user_id) : followAddApi(user_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user-profile', userId],
            });
            setState((pre: boolean) => !pre);
        },
    });

    return { mutate };
};
