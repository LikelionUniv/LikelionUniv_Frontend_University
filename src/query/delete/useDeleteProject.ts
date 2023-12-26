import { useMutation, useQueryClient } from '@tanstack/react-query';
import request from '../../utils/request';

interface useDeleteProjectProps {
    projectId: number;
}

function useDeleteProject({ projectId }: useDeleteProjectProps) {
    const queryClient = useQueryClient();

    const deleteProject = async () => {
        await request<null, null, null>({
            uri: `/api/v1/project/${projectId}`,
            method: 'delete',
        });
    };

    const { mutate } = useMutation({
        mutationKey: ['projectDelete'],
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['getPagiable', { uri: '/api/v1/project/' }],
            });

            alert(`${projectId} 프로젝트가 삭제되었습니다.`);
        },
    });

    return {
        mutate,
    };
}

export default useDeleteProject;
