import { atom, selector } from 'recoil';
import { User } from './../components/project/register/user/UserFind';

interface IUserEnrolledStore {
  plan: Set<User>
  design: Set<User>
  frontend: Set<User>
  backend: Set<User>
}

export const userEnrolledStore = atom<IUserEnrolledStore>({
  key: 'userEnrolledStore',
  default: {
    plan: new Set(),
    design: new Set(),
    frontend: new Set(),
    backend: new Set(),
  }
});

export const planStore = selector<Set<User>>({
  key: 'userEnrolled-plan',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.plan;
  },
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);    
    set(userEnrolledStore, {...list, plan: newValue as Set<User>});
  }
});

export const designStore = selector<Set<User>>({
  key: 'userEnrolled-design',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.design;
  }
  ,
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);
    set(userEnrolledStore, {...list, design: newValue as Set<User>});
  }
});

export const frontendStore = selector<Set<User>>({
  key: 'userEnrolled-frontend',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.frontend;
  },
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);
    set(userEnrolledStore, {...list, frontend: newValue as Set<User>});
  }
});


export const backendStore = selector<Set<User>>({
  key: 'userEnrolled-backend',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.backend;
  },
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);
    set(userEnrolledStore, {...list, backend: newValue as Set<User>});
  }
});
