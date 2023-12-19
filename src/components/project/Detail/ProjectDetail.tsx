import { FunctionComponent, useCallback, useState, useEffect } from 'react';
import * as PD from './ProjectDetail.style';
import GoBackButton from './GoBackButton';
import DeveloperInfo from './DeveloperInfo';
import Styles from './Styles';
import { LeftArrow, RightArrow } from '../../../img/project/detail';
import Caruosel from './carousel/Carousel';

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

    // 서비스 바로가기 버튼 클릭 이벤트
    const onButton1Click = useCallback(() => {
        if (projectData?.productionUrl) {
            const fullUrl =
                projectData.productionUrl.startsWith('http://') ||
                projectData.productionUrl.startsWith('https://')
                    ? projectData.productionUrl
                    : `http://${projectData.productionUrl}`;
            window.open(fullUrl);
        }
    }, [projectData]);

    // 로딩 상태 확인
    if (!projectData) return <div>Loading...</div>;

    return (
        <PD.ProjectDetailRoot>
            <Styles />
            <Caruosel projectData={projectData} />
            <PD.ProjectMainDescription>
                <PD.Tags>
                    <PD.B>#{projectData.activity}</PD.B>
                    <PD.B>#{projectData.outPut}</PD.B>
                </PD.Tags>
                <PD.ProjectTitle>{projectData.serviceName}</PD.ProjectTitle>
                <PD.ProjectSummary>{projectData.description}</PD.ProjectSummary>
                <PD.ProjectContainer>
                    <PD.P>{projectData.content}</PD.P>
                </PD.ProjectContainer>
                <PD.LineContainer>
                    <PD.HorizontalLine1 />
                    <PD.HorizontalLine2 />
                </PD.LineContainer>
                <DeveloperInfo />
                <PD.LineContainer>
                    <PD.HorizontalLine3 />
                    <PD.HorizontalLine4 />
                    <PD.HorizontalLine5 />
                </PD.LineContainer>
                <PD.ButtonMobile onClick={onButton1Click}>
                    <PD.ButtonText>서비스 바로가기</PD.ButtonText>
                    <PD.IconArrowUpright alt="" src={RightArrow} />
                </PD.ButtonMobile>
            </PD.ProjectMainDescription>
            <PD.Button onClick={onButton1Click}>
                <PD.ButtonText>서비스 바로가기</PD.ButtonText>
                <PD.IconArrowUpright alt="" src={RightArrow} />
            </PD.Button>
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
