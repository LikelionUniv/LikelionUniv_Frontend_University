import React, { useEffect, useState } from 'react';
import ApplyList from './ApplyList';
import { useAuth } from '../../../hooks/useAuth';
import { PostBoxWrapper } from '../../../pages/mypage/components/UserPostSelect';
import request from '../../../api/request';
import EmptyBox from '../../../pages/mypage/components/EmptyBox';

const ApplySelect = ({ select }: { select: string }) => {
    const { userinfo: user } = useAuth();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request<null, null, null>({
                    uri: `/api/v1/hackathons`,
                    method: 'get',
                });

                setIsSuccess(true);
            } catch (error) {
                setIsSuccess(false);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <PostBoxWrapper>
                {isSuccess ? <ApplyList /> : <EmptyBox name={select} />}
            </PostBoxWrapper>
        </>
    );
};

export default ApplySelect;
