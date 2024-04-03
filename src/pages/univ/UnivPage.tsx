// 참여 대학 페이지
import UnivTab from '../../components/univ/UnivTab';
import UnivHeader from '../../components/univ/UnivHeader';
import { Suspense } from 'react';

const UnivPage = () => {
    return (
        <div>
            <Suspense fallback={<div>로딩중..</div>}>
                <UnivHeader />
                <UnivTab />
            </Suspense>
        </div>
    );
};

export default UnivPage;
