import { IuserProfile } from "../mypage/type";

interface OutletContext {
  userinfo: IuserProfile;
  isAdmin: boolean;
  isUniversityAdmin: boolean;
}

export default OutletContext;
