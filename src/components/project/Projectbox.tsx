import React from 'react';
import * as B from './ProjectBox.style';
import EachBox from './EachBox';
import { Project } from './ProjectListInner';

interface IProjectBox {
    projects: Project[];
}

function Projectbox({ projects }: IProjectBox) {
    return (
        <B.Container>
            {projects.length === 0 ? (
                <B.Nothing />
            ) : (
                projects.map((project, i) => (
                    <EachBox key={i} project={project} />
                ))
            )}
        </B.Container>
    );
}

export default Projectbox;
