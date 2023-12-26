import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import useEnrolledUser from '../../components/project/register/user/userStore/useEnrolledUser';

interface ProjectRegisterType {
    activity: string;
    outPut: string;
    serviceName: string;
    ordinal: number;
    univ: string;
    startDate: string;
    endDate: string;
    description: string;
    content: string;
    productionUrl: string;
    projectTeches: string[];
    imageUrl: string[];
    members: number[];
}

interface PostId {
    id: number;
}

function usePostProjectRegister() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { clearUser } = useEnrolledUser();

    const registerProject = async (project: ProjectRegisterType) => {
        const response = await request<ProjectRegisterType, PostId, null>({
            uri: '/api/v1/project/',
            method: 'post',
            data: project,
        });

        return response.data.id;
    };

    const { mutate, isSuccess, data } = useMutation({
        mutationKey: ['projectRegister'],
        mutationFn: registerProject,
        onSuccess: data => {
            alert(`${data}번의 게시글이 생성되었습니다.`);
            clearUser();
            navigate('/project');

            queryClient.invalidateQueries({
                queryKey: ['getPagiable', { uri: '/api/v1/project/' }],
            });
        },
    });

    return {
        mutate,
        response: data,
        isSuccess,
    };
}

export default usePostProjectRegister;
