import { useState, useEffect, Suspense } from 'react';
import Header from './Header';
import * as P from './ProjectList.style';
import ProjectListInner from './ProjectListInner';
import BoxSkeleton from '../loading/BoxSkeleton';
import useInnerWidth from '../../../hooks/useInnerWidth';

export interface ProjectAPI {
    uri: string;
}

const PAGESIZE = {
    FULL: 12,
    HALF: 6,
};

function ProjectList() {
    const [projectApi, setProjectApi] = useState<ProjectAPI>({
        uri: '/api/v1/projects/',
    });

    const [pageSize, setPageSize] = useState<number>(PAGESIZE.FULL);
    const { innerWidth } = useInnerWidth();

    // 1024부터는 페이지 사이즈는 6
    useEffect(() => {
        if (innerWidth < 1024) {
            setPageSize(PAGESIZE.HALF);
            return;
        }

        setPageSize(PAGESIZE.FULL);
    }, [innerWidth]);

    return (
        <P.Container>
            <Header setProjectApi={setProjectApi} />
            <Suspense fallback={<BoxSkeleton pageSize={pageSize} />}>
                <ProjectListInner projectApi={projectApi} pageSize={pageSize} />
            </Suspense>
        </P.Container>
    );
}

export default ProjectList;
