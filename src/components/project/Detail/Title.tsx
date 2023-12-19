import React, { useCallback } from "react";
import * as T from './Title.style';
import { ProjectData } from "./ProjectDetail";
import {RightArrow} from '../../../img/project/detail';
import useInnerWidth from "../../../hooks/useInnerWidth";

interface TitleProps {
  projectData: ProjectData
}

function Title({projectData}:TitleProps) {
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

  const {innerWidth} = useInnerWidth();

  return (
    <T.Container>
      <T.Content>
        <T.Tags>
            <T.B>#{projectData.activity}</T.B>
            <T.B>#{projectData.outPut}</T.B>
        </T.Tags>
        <T.ProjectTitle>{projectData.serviceName}</T.ProjectTitle>
        <T.ProjectSummary>{projectData.description}</T.ProjectSummary>
        <T.ProjectContainer>
            <T.P>{projectData.content}</T.P>
        </T.ProjectContainer>
      </T.Content>
      <T.Button onClick={onButtonClick} width={innerWidth}>
          <T.ButtonText>서비스 바로가기</T.ButtonText>
          <T.IconArrowUpright alt="" src={RightArrow} />
      </T.Button>
    </T.Container>
  )
}

export default Title
