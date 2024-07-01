import React from 'react';
import * as N from './NoneProject.style';
import { ReactComponent as None } from '../../../img/project/none.svg';

interface NoneProjectProps {
    isRecentGen: boolean;
}

function NoneProject({ isRecentGen }: NoneProjectProps) {
    return (
        <N.Container>
            <None />
            <N.Text>
                {isRecentGen
                    ? `12기 아기사자들의 프로젝트가 곧 공개됩니다`
                    : `프로젝트 등록 전입니다`}
            </N.Text>
        </N.Container>
    );
}

export default NoneProject;
