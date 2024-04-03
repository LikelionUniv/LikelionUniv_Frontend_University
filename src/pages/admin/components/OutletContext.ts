import { IuserProfile } from '../../../components/mypage/type';

interface OutletContext {
    userinfo: IuserProfile;
    isAdmin: boolean;
    isUniversityAdmin: boolean;
}

export default OutletContext;
