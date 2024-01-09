import { useState } from 'react';
import { FormState, ProjectDetail } from './ProjectUpdate';
import { Tech, Thon } from '../register/RegisterOptions';

interface updateInitializerProps {
    project: ProjectDetail;
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
        projectMembers: project.members.map(member => {
            return {
                userId: member.userId,
                part: member.part,
            };
        }),
    });

    return { initState, isAlreadyInit: initState.projectMembers.length > 0 };
}

export default useUpdateInitializer;
