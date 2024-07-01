import React from 'react';
import * as P from './ProjectList.style';
import Projectbox from './Projectbox';
import { ProjectAPI } from './ProjectList';
import NoneProject from './NoneProject';
import useServerSidePagination from '../../../query/get/useServerSidePagination';
import { Gen } from '../register/RegisterOptions';

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
    imageUrl: string;
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
            {projects.length > 0 ? (
                <>
                    <Projectbox projects={projects} />
                    <P.PaginationWrapper>
                        {renderPaginationBtn()}
                    </P.PaginationWrapper>
                </>
            ) : (
                <NoneProject
                    isRecentGen={projectApi.uri.includes(
                        Gen.loadRecentFiveGen()[0].toString(),
                    )}
                />
            )}
        </>
    );
}

export default ProjectListInner;
