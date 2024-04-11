import { atom } from 'recoil';
// 삭제 예정

export const imgBtnClickAtom = atom({
    key: 'isImgClick',
    default: false,
});

export const userNameAtom = atom({
    key: 'activeUserName',
    default: '',
});

export const loadingAtom = atom({
    key: 'loading',
    default: false,
});
