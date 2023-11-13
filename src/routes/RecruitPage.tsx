import React from 'react';
import UnivRecruit from '../components/univrecruit/UnivRecruit';
import Recruit from '../components/recruit/Recruit';

const RecruitPage = () => {
    return (
        <div
            className="pDiv"
            style={{ width: '100%', boxSizing: 'border-box' }}
        >
            <Recruit />
        </div>
    );
};

export default RecruitPage;
