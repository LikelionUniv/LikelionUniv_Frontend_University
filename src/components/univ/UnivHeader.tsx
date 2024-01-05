// 참여 대학 Header
import React, { useState, useEffect } from 'react';
import * as H from './UnivHeaderStyle';
import { tabData, ITabData } from './UnivTabData';

const UnivHeader = () => {
    const totalCount = ([] as ITabData[]).concat(
        ...Object.values(tabData),
    ).length;

    const [univCount, setUnivCount] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUnivCount(currentCount =>
                currentCount < totalCount ? currentCount + 1 : currentCount,
            );
        }, 30);

        return () => clearInterval(interval);
    }, [totalCount]);

    return (
        <H.TopDiv>
            <H.Content>
                <H.T1>12기 참여 대학</H.T1>
                <H.T2>
                    <H.Num>{univCount}</H.Num>개 대학이 함께하고 있어요!
                </H.T2>
                <H.T3>
                    학교명을 클릭하시면 대학 별 소개 페이지로 연결됩니다.
                </H.T3>
            </H.Content>
        </H.TopDiv>
    );
};

export default UnivHeader;
