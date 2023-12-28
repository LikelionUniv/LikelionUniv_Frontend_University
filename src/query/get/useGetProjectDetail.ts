import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../utils/request';
import { Project } from '../../components/project/ProjectListInner';

interface useGetProjectDetailProps {
    id: number;
}

function useGetProjectDetail({ id }: useGetProjectDetailProps) {
    const fetchProjectDetail = async () => {
        const response = await request<null, Project, null>({
            uri: `/api/v1/project/${id}`,
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
