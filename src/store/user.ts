import { atom } from 'recoil';

type UserInfo = {
    name: string;
    profileImage: string;
    userId: number;
    role: string;
    isLogin: boolean;
};

export const userState = atom<UserInfo>({
    key: 'userInfo',
    default: {
        name: '',
        profileImage: '',
        userId: -1,
        role: '',
        isLogin: false,
    },
});
