// 참여 대학 Header
import * as H from './UnivHeaderStyle';
import { tabData, ITabData } from './UnivTabData';

const UnivHeader = () => {
    const univCount = ([] as ITabData[]).concat(
        ...Object.values(tabData),
    ).length;

    return (
        <H.TopDiv>
            <div>
                <H.T1>참여 대학</H.T1>
                <H.T2>
                    <H.Num>{univCount}</H.Num>개 대학이 함께하고 있어요!
                </H.T2>
            </div>
        </H.TopDiv>
    );
};

export default UnivHeader;
