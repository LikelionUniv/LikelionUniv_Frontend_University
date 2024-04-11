import React, { useCallback, useState, useEffect } from 'react';
import * as T from './Title.style';
import { ProjectData } from './ProjectDetail';
import { RightArrow } from '../../../img/project/detail';
import useInnerWidth from '../../../hooks/useInnerWidth';
import styled from 'styled-components';

interface TitleProps {
    projectData: ProjectData;
}

const ProjectSummary = styled.b<{ fontSize: string }>`
    font-size: ${props => props.fontSize};
    line-height: 150%;

    @media (max-width: 768px) {
        font-size: var(--title-18-bold-size);
    }
`;

function Title({ projectData }: TitleProps) {
    const [summaryFontSize, setSummaryFontSize] = useState(
        'var(--title-24-bold-size)',
    ); // 초기 폰트 크기 설정

    useEffect(() => {
        // 프로젝트 요약 길이에 따라 폰트 크기 조절
        const descriptionLength = projectData.description.length;
        if (descriptionLength > 40) {
            setSummaryFontSize('var(--title-18-bold-size)');
        } else {
            setSummaryFontSize('var(--title-24-bold-size)');
        }
    }, [projectData.description]);

    // 서비스 바로가기 버튼 클릭 이벤트
    const onButtonClick = useCallback(() => {
        if (projectData?.productionUrl) {
            const fullUrl =
                projectData.productionUrl.startsWith('http://') ||
                projectData.productionUrl.startsWith('https://')
                    ? projectData.productionUrl
                    : `http://${projectData.productionUrl}`;
            window.open(fullUrl);
        }
    }, [projectData]);

    const { innerWidth } = useInnerWidth();

    return (
        <T.Container>
            <T.Content>
                <T.Tags>
                    <T.B>#{projectData.activity}</T.B>
                    <T.B>#{projectData.outPut}</T.B>
                </T.Tags>
                <T.ProjectTitle>{projectData.serviceName}</T.ProjectTitle>
                <ProjectSummary fontSize={summaryFontSize}>
                    {projectData.description}
                </ProjectSummary>{' '}
                <T.ProjectContainer>
                    <T.P>{projectData.content}</T.P>
                </T.ProjectContainer>
            </T.Content>
            <T.Button onClick={onButtonClick} width={innerWidth}>
                <T.ButtonText>서비스 바로가기</T.ButtonText>
                <T.IconArrowUpright alt="" src={RightArrow} />
            </T.Button>
        </T.Container>
    );
}

export default Title;
