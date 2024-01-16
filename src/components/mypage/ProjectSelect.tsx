import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/user';
import { ProjectCardProp } from './type';
import useServerSidePagination from '../../query/get/useServerSidePagination';
import { PostBoxWrapper } from './UserPostSelect';
import EmptyBox from './EmptyBox';
import ProjectCard from './ProjectCard';
import { PaginationWrapper } from '../project/ProjectList.style';

const ProjectSelect = ({ select }: { select: string }) => {
    const location = useLocation().pathname;
    const params = useParams();
    const user = useRecoilValue(userState);
    const user_id =
        location.includes('userpage') && params.user_id !== undefined
            ? parseInt(params.user_id)
            : user.userId;
    const { curPageItem: projects, renderPaginationBtn } =
        useServerSidePagination<ProjectCardProp>({
            uri: `/api/v1/user/${user_id}/projects`,
            size: 6,
        });
    return (
        <>
            <PostBoxWrapper>
                {Array.isArray(projects) && projects.length !== 0 ? (
                    projects.map(e => {
                        return (
                            <ProjectCard
                                key={e.projectId}
                                projectId={e.projectId}
                                thumbnail={e.thumbnail}
                                serviceName={e.serviceName}
                                universityName={e.universityName}
                                ordinal={e.ordinal}
                                outPut={e.outPut}
                                description={e.description}
                                activity={e.activity}
                            />
                        );
                    })
                ) : (
                    <EmptyBox name={select} />
                )}
            </PostBoxWrapper>
            <PaginationWrapper>{renderPaginationBtn()}</PaginationWrapper>
        </>
    );
};

export default ProjectSelect;
