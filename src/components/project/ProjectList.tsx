import { useState, useEffect } from 'react';
import Header from './Header';
import * as P from './ProjectList.style';
import useInnerWidth from '../../hooks/useInnerWidth';
import ProjectListInner from './ProjectListInner';

export interface ProjectAPI {
    uri: string;
}

const PAGESIZE = {
    FULL: 12,
    HALF: 6,
};

function ProjectList() {
    const [projectApi, setProjectApi] = useState<ProjectAPI>({
        uri: '/api/v1/project/',
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
            <ProjectListInner projectApi={projectApi} pageSize={pageSize} />
        </P.Container>
    );
}

export default ProjectList;
