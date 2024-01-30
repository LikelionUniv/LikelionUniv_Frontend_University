import React from 'react';
import useDeleteUser from '../../../query/delete/useDeleteUser';

interface DeleteUserProps {
    id: number;
    userName: string;
}

function DeleteUser({ id, userName }: DeleteUserProps) {
    const { mutate } = useDeleteUser({
        userId: id,
    });

    const deleteUser = () => {
        if (window.confirm(`사용자 ${userName} 을(를) 삭제하시겠습니까?`)) {
            mutate();
        }
    };

    return <button onClick={deleteUser}>삭제</button>;
}

export default DeleteUser;
