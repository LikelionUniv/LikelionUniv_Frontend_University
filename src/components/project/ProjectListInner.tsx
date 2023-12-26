import React from 'react';
import * as P from './ProjectList.style';
import Projectbox from './Projectbox';
import { ProjectAPI } from './ProjectList';
import useServerSidePagination from '../../query/get/useServerSidePagination';

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

interface ProjectListInnerProps {
    projectApi: ProjectAPI;
    pageSize: number;
}

function ProjectListInner({ projectApi, pageSize }: ProjectListInnerProps) {
    const { curPageItem: projects, renderPaginationBtn } =
        useServerSidePagination<Project>({
            uri: projectApi.uri,
            size: pageSize,
        });

    return (
        <>
            <Projectbox projects={projects} />
            <P.PaginationWrapper>{renderPaginationBtn()}</P.PaginationWrapper>
        </>
    );
}

export default ProjectListInner;
