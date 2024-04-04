// 참여 대학 페이지

import { Suspense } from 'react';
import UnivHeader from './components/UnivHeader';
import UnivTab from './components/UnivTab';
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
