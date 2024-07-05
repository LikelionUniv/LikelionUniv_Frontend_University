import { IuserProfile } from './myPageType';

export interface ProjectCardProp {
    img: string;
    title: string;
    content: string;
    cardinal: number;
    school: string;
    activity: string;
}

export interface PostCardProp {
    img: string | null;
    date: string;
    title: string;
    content: string;
    like: number;
    comment: number;
}
export interface User {
    id: number;
    name: string;
    email: string;
    major: string;
    part: string;
    ordinal: number;
    role: string;
    univName?: string;
    universityName?: string;
    phone?: string;
    hackathonPart?: string;
    offlineParticipation?: boolean;
    teamName?: string;
    reasonForNotOffline?: null | string;
    hackathonFormId?: number;
    hackathonParts?: string[];
}
export interface Hackathons {
    hackathonFormId: number;
    name: string;
    email: string;
    universityName: string;
    major: string;
    phone: string;
    hackathonPart: string;
    teamName: string;
    offlineParticipation: boolean;
    reasonForNotOffline: string;
}
export interface OutletContext {
    userinfo: IuserProfile;
    isAdmin: boolean;
    isUniversityAdmin: boolean;
}
