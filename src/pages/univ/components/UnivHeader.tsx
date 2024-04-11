// 참여 대학 Header

import React, { useState, useEffect } from 'react';
import * as H from './UnivHeaderStyle';
import { axiosInstance } from '../../../api/axios';

const UnivHeader = () => {
    const foundingYear = 2013;
    const currentYear = new Date().getFullYear();
    const calculateYear = currentYear - foundingYear + 1;

    const [univCount, setUnivCount] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);

    useEffect(() => {
        const fetchTotalUniversities = async () => {
            try {
                const response = await axiosInstance.get(
                    '/api/v1/university/all',
                );
                setTotalCount(response.data.data.length);
            } catch (error) {
                console.error('에러 : ', error);
            }
        };

        fetchTotalUniversities();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setUnivCount(currentCount =>
                currentCount < totalCount ? currentCount + 1 : totalCount,
            );
        }, 30);

        return () => clearInterval(interval);
    }, [totalCount]);

    return (
        <H.TopDiv>
            <H.Content>
                <H.T1>{calculateYear}기 참여 대학</H.T1>
                <H.T2>
                    <H.Num>{univCount}</H.Num>개 대학이 함께하고 있어요!
                </H.T2>
                <H.T3>
                    학교명을 클릭하시면 대학별 소개 페이지로 연결됩니다.
                </H.T3>
            </H.Content>
        </H.TopDiv>
    );
};

export default UnivHeader;
