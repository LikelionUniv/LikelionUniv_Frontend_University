export interface ProjectCardProp {
    projectId: number;
    serviceName: string;
    outPut: string;
    description: string;
    ordinal: number;
    universityName: string;
    activity: string;
    thumbnail: string;
}

export interface PostCardProp {
    img: string | null;
    date: string;
    title: string;
    content: string;
    like: number;
    comment: number;
}

export interface MypagePostCardProp {
    id: number;
    thumbnail: string | null;
    createdDate: string;
    title: string;
    body: string;
    likeCount: number;
    commentCount: number;
    isAuthor: boolean;
}

export interface MypagePostCardPropType extends MypagePostCardProp {
    type: string;
}

export interface PostCardPropType extends PostCardProp {
    type: string;
}

export type OptionType = {
    value: number;
    label: string;
};

export type MypageOptionType = {
    value: string;
    label: string;
};

export interface IuserProfile {    
    followerNum : number,
    followingNum : number,
    id : number,
    introduction : string,
    isMine : boolean,
    major : string,
    name :string,
    ordinal : number,
    part : string,
    phoneNum : string,
    profileImage : string,
    role : string,
    universityName : string,
}

export interface ImodalProps {
    userid : number , 
    follow : string|undefined,
}

export interface Ifollows {
    userId : number,
    name : string,
    profileImage : string|null,
    ordinal : number,
    part : string,
    isFollowed : boolean,
}

export interface IuserModify {
    name : string,
    introduction: string,
    profileImage: string,
    part: string
      
}