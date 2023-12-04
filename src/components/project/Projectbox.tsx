import React from 'react';
import * as B from './ProjectBoxStyle';
import EachBox from './EachBox';
import { Project } from './ProjectList';

interface IProjectBox {
    projects: Project[];
}

function Projectbox({ projects }: IProjectBox) {
    return (
        <B.Container>
            {projects.map((project, i) => (
                <EachBox key={i} project={project} />
            ))}
        </B.Container>
    );
}

export default Projectbox;
