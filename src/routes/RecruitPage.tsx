import React from 'react';
import UnivRecruit from '../components/univrecruit/UnivRecruit';
import Recruit from '../components/recruit/Recruit';
import { Outlet } from 'react-router-dom';
//import '../components/LoadScript';

const RecruitPage = () => {
    return (
        <div
            className="pDiv"
            style={{ width: '100%', boxSizing: 'border-box' }}
        >
            <Outlet />
        </div>
    );
};

export default RecruitPage;
