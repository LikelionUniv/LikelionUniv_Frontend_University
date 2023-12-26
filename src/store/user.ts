import { atom } from 'recoil';

type UserInfo = {
    name: string;
    profileImage: string;
    userId: number;
    isLogin: boolean;
};
export const userState = atom<UserInfo>({
    key: 'userInfo',
    default: {
        name: '',
        profileImage: '',
        userId: -1,
        isLogin: false,
    },
});
