import { useMutation } from '@tanstack/react-query';
import request from '../../api/request';

function usePostGraduations() {
    const postGraduations = async (ordinal: number) => {
        const response = await request<any, any, null>({
            uri: '/api/v1/user/graduations/issue',
            method: 'post',
            data: { ordinal: ordinal },
        });

        return response.data;
    };

    const { mutate, isSuccess, data } = useMutation({
        mutationKey: ['post-graduation'],
        mutationFn: (ordinal: number) => postGraduations(ordinal),
        onSuccess: () => {},
    });

    return {
        mutate,
        response: data,
        isSuccess,
    };
}

export default usePostGraduations;
