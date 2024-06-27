import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../api/request';
import { ProjectDetail } from '../../pages/project/update/ProjectUpdate';

interface useGetProjectDetailProps {
    id: number;
}

function useGetProjectDetail({ id }: useGetProjectDetailProps) {
    const fetchProjectDetail = async () => {
        const response = await request<null, ProjectDetail, null>({
            uri: `/api/v1/projects/${id}`,
            method: 'get',
        });

        return response.data;
    };

    const { data: project } = useSuspenseQuery({
        queryKey: ['project-detail', id],
        queryFn: fetchProjectDetail,
    });

    return { project };
}

export default useGetProjectDetail;
