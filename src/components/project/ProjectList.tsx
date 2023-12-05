import { useState, useEffect } from 'react';
import Header from './Header';
import Projectbox from './Projectbox';
import * as P from './ProjectList.style';
import useInnerWidth from '../../hooks/useInnerWidth';
import useServerSidePaginationTemp from '../../hooks/useServerSidePaginationTemp';

export interface ProjectAPI {
    uri: string;
    params?: PaginationParams
    ordinal?: number;
}

// 백엔드에서 고치면 사라져야함.
interface PaginationParams {
    pageNo: number
    ordinal?: number
}

export interface Project {
    id: number;
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
    projectTech: string[];
    imageUrl: string[];
    members: Member[];
}

export interface Member {
    userId: number;
    name: string;
}

// 백엔드에서 12로 고정을 해둬서 지금은 12로하지만 나중에는 6이 되어야합니다.
const PAGESIZE = {
    FULL: 12,
    HALF: 12,
}

function ProjectList() {
    const [projectApi, setProjectApi] = useState<ProjectAPI>({
        uri: '/api/v1/project/',
        params: {
            pageNo: 1,
        },
        ordinal: undefined,
    });

    const [, setPageSize] = useState<number>(PAGESIZE.FULL);
    const { innerWidth } = useInnerWidth();

    // api 연동되면 아래 코드를 사용할 예정
    const {curPageItem: projects, renderPaginationBtn} = useServerSidePaginationTemp<Project, PaginationParams>({
        uri: projectApi.uri,
        params: projectApi.params,
    });

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
            <Projectbox projects={projects} />
            <P.PaginationWrapper>
                {renderPaginationBtn()}
            </P.PaginationWrapper>
        </P.Container>
    );
}

export default ProjectList;
