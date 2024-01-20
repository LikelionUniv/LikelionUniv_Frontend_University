import { atom } from 'recoil';
import {
    MypageOptionType,
    MypagePostCardProp,
    IuserProfile,
    ProjectCardProp,
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

type myprojectDataType = {
    isEmpty: boolean;
    isFirst: boolean;
    isLast: boolean;
    pagingSize: number;
    totalElements: number;
    totalPage: number;
    data: Array<ProjectCardProp>;
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

export const myProjectData = atom<myprojectDataType>({
    key: 'myprojectData',
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

type likeOptionType = {
    sortData: MypageOptionType | null;
    searchData: string | undefined;
};

export const likeOptionAtom = atom<likeOptionType>({
    key: 'likeOptionAtom',
    default: {
        sortData: null,
        searchData: undefined,
    },
});

export const UserProfileAtom = atom<IuserProfile>({
    key: 'userProfile',
    default: {
        followerNum: 0,
        followingNum: 0,
        id: -1,
        introduction: '',
        isMine: false,
        major: '',
        name: '',
        ordinal: -1,
        part: '',
        phoneNum: '',
        profileImage: '',
        role: '',
        universityName: '',
    },
});
