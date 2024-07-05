// atoms.js
import { atom } from 'recoil';

export type ActiveContentType = 'August 6' | 'August 7';

export const activeContentState = atom<ActiveContentType>({
    key: 'activeContentState',
    default: 'August 6',
});
