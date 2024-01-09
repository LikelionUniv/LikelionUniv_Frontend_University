import { useCallback } from 'react';
import { User } from '../UserFind';

import { useRecoilState } from 'recoil';
import {
    UserAndPart,
    backendStore,
    designStore,
    frontendStore,
    noPartStore,
    planStore,
    userEnrolledStore,
} from '../../../../../store/projectUser';
import { Member } from '../../ProjectRegister';

interface RUseEnrolledUser {
    userLength: number;
    userList: Member[];
    planUser: Set<UserAndPart>;
    designUser: Set<UserAndPart>;
    frontendUser: Set<UserAndPart>;
    backendUser: Set<UserAndPart>;
    noPartUser: Set<UserAndPart>;
    enrollUser: (user: User, part: string) => void;
    removePlanUser: (user: UserAndPart) => void;
    removeDesignUser: (user: UserAndPart) => void;
    removeFrontendUser: (user: UserAndPart) => void;
    removeBackendUser: (user: UserAndPart) => void;
    removeNoPartUser: (user: UserAndPart) => void;
    clearUser: () => void;
}

function useEnrolledUser(): RUseEnrolledUser {
    const [entire, setEntire] = useRecoilState(userEnrolledStore);

    const entireEnrolledUser: UserAndPart[] = Object.values(entire).flatMap(
        user => Array.from(user),
    );

    const userLength = entireEnrolledUser.length;
    const userList: Member[] = entireEnrolledUser.map(user => {
        return {
            userId: user.user.userId,
            part: user.part,
        };
    });

    const [plan, setPlan] = useRecoilState(planStore);
    const [design, setDesign] = useRecoilState(designStore);
    const [frontend, setFrontend] = useRecoilState(frontendStore);
    const [backend, setBackend] = useRecoilState(backendStore);
    const [noPart, setNoPart] = useRecoilState(noPartStore);

    const enrollUser = useCallback(
        (user: User, part: string) => {
            if (part === 'PM') {
                setPlan(prev => prev.add({ user, part }));
            } else if (part === 'DESIGNER') {
                setDesign(prev => prev.add({ user, part }));
            } else if (part === 'FRONTEND') {
                setFrontend(prev => prev.add({ user, part }));
            } else if (part === 'BACKEND') {
                setBackend(prev => prev.add({ user, part }));
            } else if (part === 'NO_PART') {
                setNoPart(prev => prev.add({ user, part }));
            }
        },
        [setPlan, setDesign, setFrontend, setBackend, setNoPart],
    );

    const removePlanUser = useCallback(
        (user: UserAndPart) => {
            const newPlan = new Set(plan);
            newPlan.delete(user);
            setPlan(newPlan);
        },
        [plan, setPlan],
    );

    const removeDesignUser = useCallback(
        (user: UserAndPart) => {
            const newDesign = new Set(design);
            newDesign.delete(user);
            setDesign(newDesign);
        },
        [design, setDesign],
    );

    const removeFrontendUser = useCallback(
        (user: UserAndPart) => {
            const newFrontend = new Set(frontend);
            newFrontend.delete(user);
            setFrontend(newFrontend);
        },
        [frontend, setFrontend],
    );

    const removeBackendUser = useCallback(
        (user: UserAndPart) => {
            const newBackend = new Set(backend);
            newBackend.delete(user);
            setBackend(newBackend);
        },
        [backend, setBackend],
    );

    const removeNoPartUser = useCallback(
        (user: UserAndPart) => {
            const newNoPart = new Set(noPart);
            newNoPart.delete(user);
            setNoPart(newNoPart);
        },
        [noPart, setNoPart],
    );

    const clearUser = useCallback(() => {
        const users = entire;

        users.backend.clear();
        users.frontend.clear();
        users.plan.clear();
        users.design.clear();
        users.noPart.clear();

        setEntire(users);
    }, []);

    return {
        userLength,
        userList,
        planUser: plan,
        designUser: design,
        frontendUser: frontend,
        backendUser: backend,
        noPartUser: noPart,
        enrollUser,
        removePlanUser,
        removeDesignUser,
        removeFrontendUser,
        removeBackendUser,
        removeNoPartUser,
        clearUser,
    };
}

export default useEnrolledUser;
