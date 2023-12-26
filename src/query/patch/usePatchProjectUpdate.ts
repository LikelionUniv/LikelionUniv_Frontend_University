import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';
import { useNavigate } from 'react-router-dom';
import useEnrolledUser from '../../components/project/register/user/userStore/useEnrolledUser';
import { ProjectRegisterType } from '../../components/project/register/ProjectRegister';

interface PostId {
    id: number;
}

interface usePatchProjectUpdateProps {
    projectId: number;
}

function usePatchProjectUpdate({ projectId }: usePatchProjectUpdateProps) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { clearUser } = useEnrolledUser();

    const updateProject = async (project: ProjectRegisterType) => {
        const response = await request<ProjectRegisterType, PostId, null>({
            uri: `/api/v1/project/${projectId}`,
            method: 'patch',
            data: project,
        });

        return response.data.id;
    };

    const { mutate, data } = useMutation({
        mutationKey: ['projectUpdate'],
        mutationFn: updateProject,
        onSuccess: data => {
            queryClient.invalidateQueries({
                queryKey: ['getPagiable', { uri: '/api/v1/project/' }],
            });

            alert(`${data}번의 게시글이 수정되었습니다.`);
            clearUser();
            navigate('/project');
        },
    });

    return {
        mutate,
        response: data,
    };
}

export default usePatchProjectUpdate;
