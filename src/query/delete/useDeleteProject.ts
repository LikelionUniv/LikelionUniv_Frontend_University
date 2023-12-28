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
        mutationKey: ['project-delete'],
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-pagiable', { uri: '/api/v1/project/' }],
            });
            queryClient.invalidateQueries({
                queryKey: ['project-detail', projectId],
            });

            alert(`${projectId} 프로젝트가 삭제되었습니다.`);
        },
    });

    return {
        mutate,
    };
}

export default useDeleteProject;
