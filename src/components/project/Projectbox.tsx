import React from 'react';
import * as B from './ProjectBox.style';
import EachBox from './EachBox';
import { Project } from './ProjectListInner';
import useIsAdmin from '../../hooks/useIsAdmin';

interface IProjectBox {
    projects: Project[];
}

function Projectbox({ projects }: IProjectBox) {
    const { isAdmin } = useIsAdmin();

    return (
        <B.Container>
            {projects.length === 0 ? (
                <B.Nothing />
            ) : (
                projects.map((project, i) => (
                    <EachBox key={i} project={project} isAdmin={isAdmin} />
                ))
            )}
        </B.Container>
    );
}

export default Projectbox;
