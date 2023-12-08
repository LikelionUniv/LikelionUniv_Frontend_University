import React from 'react';
import UnivRecruit from '../components/univrecruit/UnivRecruit';
import Recruit from '../components/recruit/Recruit';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import '../components/LoadScript';
=======
import '../components/LoadScript'
>>>>>>> 9367ea3c14168bca30cf5e1a076a7571f61783fc

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
