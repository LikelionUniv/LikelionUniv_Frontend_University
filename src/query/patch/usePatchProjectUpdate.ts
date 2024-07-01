import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../api/request';
import { useNavigate } from 'react-router-dom';
import useEnrolledUser from '../../pages/project/register/user/userStore/useEnrolledUser';
import { ProjectRegisterType } from '../../pages/project/register/ProjectRegister';

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
            uri: `/api/v1/projects/${projectId}`,
            method: 'patch',
            data: project,
        });

        return response.data.id;
    };

    const { mutate, data } = useMutation({
        mutationKey: ['project-update'],
        mutationFn: updateProject,
        onSuccess: data => {
            queryClient.invalidateQueries({
                queryKey: ['get-pagiable', { uri: '/api/v1/projects/' }],
            });
            queryClient.invalidateQueries({
                queryKey: ['project-detail', projectId],
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
