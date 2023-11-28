import { atom, selector } from 'recoil';
import { User } from './../components/project/register/user/UserFind';

interface IUserEnrolledStore {
    plan: Set<User>;
    design: Set<User>;
    frontend: Set<User>;
    backend: Set<User>;
}

export const userEnrolledStore = atom<IUserEnrolledStore>({
    key: 'userEnrolledStore',
    default: {
        plan: new Set(),
        design: new Set(),
        frontend: new Set(),
        backend: new Set(),
    },
});

const deleteDuplicateUser = (list: Set<User>) => {
    const uniqueIds = new Set<number>();
    const uniqueUsers: User[] = [];

    for (const user of Array.from(list)) {
        if (!uniqueIds.has(user.userId)) {
            uniqueIds.add(user.userId);
            uniqueUsers.push(user);
        }
    }

    return new Set(uniqueUsers);
};

export const planStore = selector<Set<User>>({
    key: 'userEnrolled-plan',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.plan;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<User>);
        set(userEnrolledStore, { ...list, plan: uniqueUsers });
    },
});

export const designStore = selector<Set<User>>({
    key: 'userEnrolled-design',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.design;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<User>);
        set(userEnrolledStore, { ...list, design: uniqueUsers });
    },
});

export const frontendStore = selector<Set<User>>({
    key: 'userEnrolled-frontend',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.frontend;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<User>);
        set(userEnrolledStore, { ...list, frontend: uniqueUsers });
    },
});

export const backendStore = selector<Set<User>>({
    key: 'userEnrolled-backend',
    get: ({ get }) => {
        const list = get(userEnrolledStore);
        return list.backend;
    },
    set: ({ get, set }, newValue) => {
        const list = get(userEnrolledStore);
        const uniqueUsers = deleteDuplicateUser(newValue as Set<User>);
        set(userEnrolledStore, { ...list, backend: uniqueUsers });
    },
});
