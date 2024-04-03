import { atom } from 'recoil';

export const currentWidthState = atom<number>({
    key: 'currentWidthState',
    default: 0,
});

type ViewType = {
    top: boolean;
    bottom: boolean;
};
export const viewFloatingCountDownState = atom<ViewType>({
    key: 'viewFloatingCountDownState',
    default: {
        top: true,
        bottom: false,
    },
});
