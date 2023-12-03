import React from 'react';
import * as B from './ProjectBoxStyle';
import { type ProjectEach } from './register/ProjectRegister';
import EachBox from './EachBox';

interface IProjectBox {
    projects: ProjectEach[];
}

function Projectbox({ projects }: IProjectBox) {
    return (
        <B.Container>
            {projects.map((project, i) => (
                <EachBox key={i} project={project} />
            ))}
            {/* {renderPaginationBtn()} */}
        </B.Container>
    );
}

export default Projectbox;
