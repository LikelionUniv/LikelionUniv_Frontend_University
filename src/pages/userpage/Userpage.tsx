import { useParams } from 'react-router-dom';

import UserInfomation from '../../components/mypage/UserInfomation';
import UserPost from '../../components/mypage/UserPost';

const Userpage = () => {
    let { user_id } = useParams();
    let userId = Number(user_id);
    return (
        <>
            <UserInfomation otherUserId={userId} />
            <UserPost />
        </>
    );
};

export default Userpage;
