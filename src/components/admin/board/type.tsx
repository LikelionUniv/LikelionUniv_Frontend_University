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
