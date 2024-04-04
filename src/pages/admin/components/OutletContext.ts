import { IuserProfile } from '../../mypage/components/type';

interface OutletContext {
    userinfo: IuserProfile;
    isAdmin: boolean;
    isUniversityAdmin: boolean;
}

export default OutletContext;
