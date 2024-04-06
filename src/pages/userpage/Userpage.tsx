import { useParams } from 'react-router-dom';
import UserInfomation from '../mypage/components/UserInfomation';
import UserPost from '../mypage/components/UserPost';

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
