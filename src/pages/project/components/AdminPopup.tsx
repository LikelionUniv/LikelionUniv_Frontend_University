import React from 'react';
import * as A from './AdminPopup.style';
import { useNavigate } from 'react-router-dom';
import useDeleteProject from '../../../query/delete/useDeleteProject';

interface AdminPopupProps {
    id: number;
    serviceName: string;
}

function AdminPopup({ id, serviceName }: AdminPopupProps) {
    const navigate = useNavigate();

    const goUpdate = async () => {
        navigate(`/project/${id}/update`);
    };

    const { mutate } = useDeleteProject({
        projectId: id,
    });

    const deleteProject = () => {
        if (window.confirm(`${serviceName} 프로젝트를 삭제하시겠습니까?`)) {
            mutate();
        }
    };

    return (
        <A.Container>
            <A.Btn onClick={goUpdate}>수정하기</A.Btn>
            <A.Btn onClick={deleteProject}>삭제하기</A.Btn>
        </A.Container>
    );
}

export default AdminPopup;
