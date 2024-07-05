import React, { Suspense, useEffect, useState } from 'react';
import ApplyList from './ApplyList';
import { useAuth } from '../../../hooks/useAuth';
import { PostBoxWrapper } from '../../../pages/mypage/components/UserPostSelect';
import request from '../../../api/request';
import EmptyBox from '../../../pages/mypage/components/EmptyBox';

interface HackathonValType {
    endDate: string;
    hackathonFormId: number;
    hackathonId: number;
    hackathonName: string;
    startDate: string;
}
const ApplySelect = ({ select }: { select: string }) => {
    const { userinfo: user } = useAuth();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [hackathonVal, setHackathonVal] = useState<HackathonValType[] | null>(
        null,
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request<null, null, null>({
                    uri: `/api/v1/hackathons`,
                    method: 'get',
                });
                setHackathonVal(response.data);
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
                {hackathonVal && hackathonVal.length !== 0 ? (
                    <ApplyList
                        hackathonId={
                            hackathonVal
                                ? hackathonVal[0].hackathonFormId
                                : null
                        }
                    />
                ) : (
                    <EmptyBox name={select} />
                )}
            </PostBoxWrapper>
        </>
    );
};

export default ApplySelect;
