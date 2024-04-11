import React, { Suspense } from 'react';
import ProjectRegister from './ProjectRegister';

function ProjectRegisterWrapper() {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <ProjectRegister />
        </Suspense>
    );
}

export default ProjectRegisterWrapper;
