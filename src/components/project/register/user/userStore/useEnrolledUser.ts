import { useCallback, useEffect } from 'react';
import { User } from '../UserFind';

import useArray from '../../../../../hooks/useArray';
import { useRecoilState, useRecoilValue } from 'recoil';
import { backendStore, designStore, frontendStore, planStore, userEnrolledStore } from '../../../../../store/projectUser';

interface RUseEnrolledUser {
  userLength: number
  planUser: User[]
  designUser: User[]
  frontendUser: User[]
  backendUser: User[]
  enrollUser: (user: User) => void
  removePlanUser: (user: User) => void
  removeDesignUser: (user: User) => void
  removeFrontendUser: (user: User) => void
  removeBackendUser: (user: User) => void
}

function useEnrolledUser(): RUseEnrolledUser {
  const entire = useRecoilValue(userEnrolledStore);
  const entireEnrolledUser = Object.values(entire).flatMap(user => user);
  const userLength = entireEnrolledUser.length;

  const [plan, setPlan] = useRecoilState(planStore);
  const [design, setDesign] = useRecoilState(designStore);
  const [frontend, setFrontend] = useRecoilState(frontendStore);
  const [backend, setBackend] = useRecoilState(backendStore);

  const {array: planUser, push: pushPlan, remove: removePlan} = useArray<User>([]);
  const {array: designUser, push: pushDesign, remove: removeDesign} = useArray<User>([]);
  const {array: frontendUser, push: pushFrontend, remove: removeFrontend} = useArray<User>([]);
  const {array: backendUser, push: pushBackend, remove: removeBackend} = useArray<User>([]);

  const isAlreadyEnroll = (userList: User[], user: User) => {   
    return userList.find(enrolled => enrolled.id === user.id) !== undefined   
  }    

  const enrollUser = useCallback((user: User) => {    
    if (!isAlreadyEnroll(plan, user) && user.part === 'plan') {
      pushPlan(user);
    } else if (!isAlreadyEnroll(design, user) && user.part === 'design') {
      pushDesign(user);
    } else if (!isAlreadyEnroll(frontend, user) && user.part === 'frontend') {
      pushFrontend(user);
    } else if (!isAlreadyEnroll(backend, user) && user.part === 'backend') {
      pushBackend(user);
    }
  }, [plan, design, frontend, backend, pushPlan, pushDesign, pushFrontend, pushBackend]);


  const removePlanUser =  useCallback((user: User) => {
      removePlan(planUser.findIndex(enrolled => enrolled === user));
  }, [])


  const removeDesignUser = useCallback((user: User) => {
      removeDesign(designUser.findIndex(enrolled => enrolled === user));
  }, [])

  const removeFrontendUser = useCallback((user: User) => {
      removeFrontend(frontendUser.findIndex(enrolled => enrolled === user));
  }, [])

  const removeBackendUser = useCallback((user: User) => {
      removeBackend(backendUser.findIndex(enrolled => enrolled === user));
  }, []);

  useEffect(() => {
    setPlan(planUser);
  }, [planUser, setPlan]);

  useEffect(() => {
    setDesign(designUser);
  }, [designUser, setDesign]);

  useEffect(() => {
    setFrontend(frontendUser)
  }, [frontendUser, setFrontend]);

  useEffect(() => {
    setBackend(backendUser);
  }, [backendUser, setBackend]);

  return {
    userLength,
    planUser: plan,
    designUser: design,
    frontendUser: frontend,
    backendUser: backend,
    enrollUser,
    removePlanUser,
    removeDesignUser,
    removeFrontendUser,
    removeBackendUser,
  }
}

export default useEnrolledUser
