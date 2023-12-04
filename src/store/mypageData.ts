import { atom } from 'recoil';
import {
    MypageOptionType,
    MypagePostCardProp,
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
