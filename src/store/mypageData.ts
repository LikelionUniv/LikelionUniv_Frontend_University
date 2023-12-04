import { atom } from 'recoil';
import {
    MypageOptionType,
    MypagePostCardProp,
    IuserProfile,
} from '../components/mypage/type';


type mypageDataType = {
    isEmpty: boolean;
    isFirst: boolean;
    isLast: boolean;
    pagingSize: number;
    totalElements: number;
    totalPage: number;
    data: Array<MypagePostCardProp>;
};

export const mypageData = atom<mypageDataType>({
    key: 'mypageData',
    default: {
        isEmpty: true,
        isFirst: true,
        isLast: true,
        pagingSize: 0,
        totalElements: 0,
        totalPage: 0,
        data: [],
    },
});

export const sortOptionAtom = atom<MypageOptionType | null>({
    key: 'sortOptionAtom',
    default: null,
});

export const UserProfileAtom = atom<IuserProfile>({
    key : 'userProfile',
    default: {
        followerNum : 0,
        followingNum : 0,
        id : -1,
        introduction : "",
        isMine : false,
        major : "",
        name :"",
        ordinal : -1,
        part : "",
        phoneNum : "",
        profileImage : "",
        role : "",
        universityName : "",
    }
})
