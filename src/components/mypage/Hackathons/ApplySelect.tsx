import React, { useEffect, useState } from 'react';
import request from '../../../utils/request';
import { PostBoxWrapper } from '../UserPostSelect';
import ApplyList from './ApplyList';
import EmptyBox from '../EmptyBox';

import { useAuth } from '../../../hooks/useAuth';

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
