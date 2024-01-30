import React, { useEffect, useState } from 'react';
import * as B from './ProjectBox.style';
import EachBox from './EachBox';
import { Project } from './ProjectListInner';
import { useAuth } from '../../hooks/useAuth';
import { RolePriority } from '../../constants/Role';

interface IProjectBox {
    projects: Project[];
}

function Projectbox({ projects }: IProjectBox) {
    const { userinfo, isLoading } = useAuth();
    const isSuperAdminInfo = RolePriority.findIndex(role => role === userinfo.role) >= 3;

    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        if (isSuperAdminInfo && !isLoading) {
            setIsAdmin(true);
        }
    }, [isLoading, isSuperAdminInfo]);

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
