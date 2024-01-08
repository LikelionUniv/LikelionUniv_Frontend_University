import { atom, selector } from 'recoil';
import { User } from './../components/project/register/user/UserFind';

export interface UserAndPart {
    user: User;
    part: string;
}

interface IUserEnrolledStore {
    plan: Set<UserAndPart>;
    design: Set<UserAndPart>;
    frontend: Set<UserAndPart>;
    backend: Set<UserAndPart>;
    noPart: Set<UserAndPart>;
}

export const userEnrolledStore = atom<IUserEnrolledStore>({
    key: 'userEnrolledStore',
    default: {
        plan: new Set(),
        design: new Set(),
        frontend: new Set(),
        backend: new Set(),
        noPart: new Set(),
    },
});

const deleteDuplicateUser = (list: Set<UserAndPart>) => {
    const uniqueIds = new Set<number>();
    const uniqueUsers: UserAndPart[] = [];

    for (const user of Array.from(list)) {
        if (!uniqueIds.has(user.user.userId)) {
            uniqueIds.add(user.user.userId);
            uniqueUsers.push(user);
        }
    }

    return new Set(uniqueUsers);
};

export const planStore = selector<Set<UserAndPart>>({
    key: 'userEnrolled-plan',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.plan;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<UserAndPart>);
        set(userEnrolledStore, { ...list, plan: uniqueUsers });
    },
});

export const designStore = selector<Set<UserAndPart>>({
    key: 'userEnrolled-design',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.design;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<UserAndPart>);
        set(userEnrolledStore, { ...list, design: uniqueUsers });
    },
});

export const frontendStore = selector<Set<UserAndPart>>({
    key: 'userEnrolled-frontend',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.frontend;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<UserAndPart>);
        set(userEnrolledStore, { ...list, frontend: uniqueUsers });
    },
});

export const backendStore = selector<Set<UserAndPart>>({
    key: 'userEnrolled-backend',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.backend;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<UserAndPart>);
        set(userEnrolledStore, { ...list, backend: uniqueUsers });
    },
});

export const noPartStore = selector<Set<UserAndPart>>({
    key: 'userEnrolled-noPart',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.noPart;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<UserAndPart>);
        set(userEnrolledStore, { ...list, noPart: uniqueUsers });
    },
});
