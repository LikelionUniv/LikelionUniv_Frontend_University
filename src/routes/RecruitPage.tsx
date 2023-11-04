import React, { useState } from 'react';
import UnivRecruit from '../components/univrecruit/UnivRecruit';
import Recruit from '../components/recruit/Recruit';

const RecruitPage = () => {
    const [isUnivRecruit, setIsUnivRecruit] = useState(true);

    const toggleMode = () => {
        setIsUnivRecruit(prev => !prev);
    }

    return (
        <div className="pDiv" style={{ width: '100%', boxSizing: 'border-box' }}>
            <button onClick={toggleMode}>임시 토글 버튼</button>
            {isUnivRecruit ? <UnivRecruit /> : <Recruit />}
        </div>
    );
};

export default RecruitPage;
