import { useState } from 'react';
import { Project } from '../ProjectListInner';
import { FormState } from './ProjectUpdate';
import { Tech, Thon } from '../register/RegisterOptions';

interface updateInitializerProps {
    project: Project;
}

function useUpdateInitializer({ project }: updateInitializerProps) {
    const [initState] = useState<FormState>({
        activity: project.activity,
        activityEtc: Thon.isEtcThon(project.activity) ? project.activity : '',
        outPut: project.outPut,
        serviceName: project.serviceName,
        startDate: project.startDate,
        endDate: project.endDate,
        projectTeches: project.projectTech,
        projectTechEtc: Tech.loadEtcTech(project.projectTech),
        description: project.description,
        content: project.content,
        productionUrl: project.productionUrl,
        images: project.imageUrl.map(url => ({ src: url })),
        ordinal: project.ordinal.toString(),
        univ: project.univ,
        members: project.members.map(member => member.userId),
    });

    return { initState, isAlreadyInit: initState.members.length > 0 };
}

export default useUpdateInitializer;
