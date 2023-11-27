import {atom} from 'recoil';

type UserInfo = {
    name : string,
    profileImage : string,
    userId : number,
}
export const userState = atom<UserInfo>({
    key : 'userInfo',
    default : {
        name : '',
        profileImage :'',
        userId : -1, 
    },
})