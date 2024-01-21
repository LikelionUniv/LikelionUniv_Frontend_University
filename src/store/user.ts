import { atom } from 'recoil';

type User = {
    name: string;
    profileImage: string;
    userId: number;
    role: string;
    isLogin: boolean;
};

export const userState = atom<User>({
    key: 'userInfo',
    default: {
        name: '',
        profileImage: '',
        userId: -1,
        role: '',
        isLogin: false,
    },
});
