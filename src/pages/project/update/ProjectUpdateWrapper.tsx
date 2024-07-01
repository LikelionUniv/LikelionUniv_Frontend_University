import React, { Suspense } from 'react';
import ProjectUpdate from './ProjectUpdate';

function ProjectUpdateWrapper() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <ProjectUpdate />
        </Suspense>
    );
}

export default ProjectUpdateWrapper;
