import { useCallback } from 'react';
import { User } from '../UserFind';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
    backendStore,
    designStore,
    frontendStore,
    planStore,
    userEnrolledStore,
} from '../../../../../store/projectUser';

interface RUseEnrolledUser {
    userLength: number;
    userIdList: number[];
    planUser: Set<User>;
    designUser: Set<User>;
    frontendUser: Set<User>;
    backendUser: Set<User>;
    enrollUser: (user: User) => void;
    removePlanUser: (user: User) => void;
    removeDesignUser: (user: User) => void;
    removeFrontendUser: (user: User) => void;
    removeBackendUser: (user: User) => void;
}

function useEnrolledUser(): RUseEnrolledUser {
    const entire = useRecoilValue(userEnrolledStore);

    const entireEnrolledUser: User[] = Object.values(entire).flatMap(user =>
        Array.from(user),
    );
    const userLength = entireEnrolledUser.length;
    const userIdList: number[] = entireEnrolledUser.map(user => user.userId);

    const [plan, setPlan] = useRecoilState(planStore);
    const [design, setDesign] = useRecoilState(designStore);
    const [frontend, setFrontend] = useRecoilState(frontendStore);
    const [backend, setBackend] = useRecoilState(backendStore);

    const enrollUser = useCallback(
        (user: User) => {
            if (user.part === '기획') {
                setPlan(prev => prev.add(user));
            } else if (user.part === '디자인') {
                setDesign(prev => prev.add(user));
            } else if (user.part === '프론트엔드') {
                setFrontend(prev => prev.add(user));
            } else if (user.part === '백엔드') {
                setBackend(prev => prev.add(user));
            }
        },
        [setPlan, setDesign, setFrontend, setBackend],
    );

    const removePlanUser = useCallback(
        (user: User) => {
            const newPlan = new Set(plan);
            newPlan.delete(user);
            setPlan(newPlan);
        },
        [plan, setPlan],
    );

    const removeDesignUser = useCallback(
        (user: User) => {
            const newDesign = new Set(design);
            newDesign.delete(user);
            setDesign(newDesign);
        },
        [design, setDesign],
    );

    const removeFrontendUser = useCallback(
        (user: User) => {
            const newFrontend = new Set(frontend);
            newFrontend.delete(user);
            setFrontend(newFrontend);
        },
        [frontend, setFrontend],
    );

    const removeBackendUser = useCallback(
        (user: User) => {
            const newBackend = new Set(backend);
            newBackend.delete(user);
            setBackend(newBackend);
        },
        [backend, setBackend],
    );

    return {
        userLength,
        userIdList,
        planUser: plan,
        designUser: design,
        frontendUser: frontend,
        backendUser: backend,
        enrollUser,
        removePlanUser,
        removeDesignUser,
        removeFrontendUser,
        removeBackendUser,
    };
}

export default useEnrolledUser;
