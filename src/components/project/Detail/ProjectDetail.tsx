import { FunctionComponent, useState, useEffect } from 'react';
import * as PD from './ProjectDetail.style';
import GoBackButton from './GoBackButton';
import DeveloperInfo from './DeveloperInfo';
import Styles from './Styles';
import { LeftArrow } from '../../../img/project/detail';
import Caruosel from './carousel/Carousel';
import Title from './Title';

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

        fetch(`https://stag.likelionuniv.com/api/v1/project/${projectId}`)
            .then(response => response.json())
            .then(data => setProjectData(data.data))
            .catch(error =>
                console.error('Error fetching project data:', error),
            );
    }, []);

    // 로딩 상태 확인
    if (!projectData) return <div>Loading...</div>;

    return (
        <PD.ProjectDetailRoot>
            <Styles />
            <Caruosel projectData={projectData} />
            <Title projectData={projectData}/> 
            <DeveloperInfo />
            <GoBackButton
                ArrowLeft={LeftArrow}
                GoBackButtonCursor="pointer"
                GoBackButtonPadding="3rem"
                GoBackButtonBackgroundColor="transparent"
                GoBackButtonPosition="relative"
                GoBackButtonTop="calc(50% + 629px)"
                GoBackButtonLeft="-7%"
                ArrowLeftWidth="1.5rem"
                ArrowLeftHeight="1.5rem"
                bDisplay="inline-block"
                marginTop="0%"
            />
        </PD.ProjectDetailRoot>
    );
};

export default ProjectDetail;
