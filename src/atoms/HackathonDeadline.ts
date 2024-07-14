import { atom } from 'recoil';
import { v1 } from 'uuid';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const deadlineTextState = atom<string>({
    key: `deadlineTextState/${v1()}`,
    default: '',
});

export const infoTextState = atom<string>({
    key: `infoTextState/${v1()}`,
    default: '',
});

export const timeLeftState = atom<TimeLeft>({
    key: `timeLeftState/${v1()}`,
    default: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
});

export const deadlineState = atom<string>({
    key: `deadlineState/${v1()}`,
    default: '2024-07-14 23:59:59',
});
