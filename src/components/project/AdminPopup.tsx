import React from 'react';
import * as A from './AdminPopup.style';
import { useNavigate } from 'react-router-dom';
import request from '../../utils/request';

interface AdminPopupProps {
  id: number;
  serviceName: string;
}

function AdminPopup({id, serviceName}: AdminPopupProps) {
    const navigate = useNavigate();

    const goUpdate = () => {
      navigate(`/project/${id}/update`);
    };

    const deleteProject = async () => {
      if (window.confirm(`${serviceName} 프로젝트를 삭제하시겠습니까?`)) {
        await request<null, null, null>({
          uri: `/api/v1/project/${id}`,
          method: 'delete',
        });        

        alert(`${serviceName} 프로젝트가 삭제되었습니다.`);
        window.location.reload();
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
