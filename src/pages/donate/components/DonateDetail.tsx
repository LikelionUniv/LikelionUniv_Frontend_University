import React, { Suspense } from 'react';
import * as D from './DonateDetail.style';
import DonateDetailInner from './DonateDetailInner';

function DonateDetail() {
    return (
        <D.Container>
            <Suspense fallback={<div>loading...</div>}>
                <DonateDetailInner />
            </Suspense>
        </D.Container>
    );
}

export default DonateDetail;
