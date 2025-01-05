import { useMutation } from '@tanstack/react-query';
import request from '../../api/request';

interface propsType {
    ordinal: number | undefined;
    userIds: number[];
}
function useChangeGraduations() {
    const changeGraduations = async (data: propsType) => {
        const response = await request<any, any, null>({
            uri: '/api/admin/v1/headquarters/users/graduate',
            method: 'post',
            data: data,
        });

        return response.data;
    };

    const { mutate, isSuccess, data } = useMutation({
        mutationKey: ['change-graduation'],
        mutationFn: (data: propsType) => changeGraduations(data),
        onSuccess: () => {},
    });

    return {
        mutate,
        response: data,
        isSuccess,
    };
}

export default useChangeGraduations;
