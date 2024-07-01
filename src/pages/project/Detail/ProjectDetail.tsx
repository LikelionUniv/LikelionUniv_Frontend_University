import { FunctionComponent, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import * as PD from './ProjectDetail.style';
import GoBackButton from './GoBackButton';
import DeveloperInfo from './DeveloperInfo';
import Styles from './Styles';
import { LeftArrow } from '../../../img/project/detail';
import Caruosel from './carousel/Carousel';
import Title from './Title';
import { axiosInstance } from '../../../api/axios';

export interface ProjectData {
    activity: string;
    outPut: string;
    serviceName: string;
    description: string;
    content: string;
    productionUrl: string;
    imageUrl: string[];
}

const ProjectDetail: FunctionComponent = () => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);

    // 프로젝트 데이터 로드
    useEffect(() => {
        const path = window.location.pathname;
        const pathParts = path.split('/');
        const projectId = pathParts[pathParts.length - 1];

        axiosInstance
            .get(`/api/v1/projects/${projectId}`)
            .then(response => setProjectData(response.data.data))
            .catch(error =>
                console.error('Error fetching project data:', error),
            );
    }, []);

    // 로딩 상태 확인
    if (!projectData) return <div>Loading...</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
        >
            <PD.ProjectDetailRoot>
                <Styles />
                <Caruosel projectData={projectData} />
                <Title projectData={projectData} />
                <DeveloperInfo />
                <GoBackButton
                    ArrowLeft={LeftArrow}
                    GoBackButtonCursor="pointer"
                    GoBackButtonPadding="3rem"
                    GoBackButtonBackgroundColor="transparent"
                    GoBackButtonPosition="relative"
                    GoBackButtonTop="calc(50% + 629px)"
                    GoBackButtonLeft="0"
                    ArrowLeftWidth="1.5rem"
                    ArrowLeftHeight="1.5rem"
                    bDisplay="inline-block"
                    marginTop="0%"
                />
            </PD.ProjectDetailRoot>
        </motion.div>
    );
};

export default ProjectDetail;
