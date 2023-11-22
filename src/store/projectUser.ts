import { atom, selector } from 'recoil';
import { User } from './../components/project/register/user/UserFind';

interface IUserEnrolledStore {
  plan: User[]
  design: User[]
  frontend: User[]
  backend: User[]
}

export const userEnrolledStore = atom<IUserEnrolledStore>({
  key: 'userEnrolledStore',
  default: {
    plan: [],
    design: [],
    frontend: [],
    backend: [],
  }
});

export const planStore = selector<User[]>({
  key: 'userEnrolled-plan',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.plan;
  },
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);    
    set(userEnrolledStore, {...list, plan: newValue as User[]});
  }
});

export const designStore = selector<User[]>({
  key: 'userEnrolled-design',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.design;
  }
  ,
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);
    set(userEnrolledStore, {...list, design: newValue as User[]});
  }
});

export const frontendStore = selector<User[]>({
  key: 'userEnrolled-frontend',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.frontend;
  },
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);
    set(userEnrolledStore, {...list, frontend: newValue as User[]});
  }
});


export const backendStore = selector<User[]>({
  key: 'userEnrolled-backend',
  get: ({get}) => {
    const list = get(userEnrolledStore);
    return list.backend;
  },
  set: ({get, set}, newValue) => {
    const list = get(userEnrolledStore);
    set(userEnrolledStore, {...list, backend: newValue as User[]});
  }
});
