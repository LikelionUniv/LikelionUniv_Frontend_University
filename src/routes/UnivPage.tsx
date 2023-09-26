// 참여 대학 페이지
import UnivTab from '../components/univ/UnivTab';
import UnivHeader from '../components/univ/UnivHeader';

const UnivPage = () => {
    return (
        <div>
            <UnivHeader />
            <UnivTab showCount={true} />
        </div>
    );
};

export default UnivPage;
