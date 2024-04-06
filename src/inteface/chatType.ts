export interface IChatDetail {
    id: number;
    type: string;
    roomId: string;
    sender: string;
    message: string;
}

export interface IRoomProps {
    roomId: string;
    name: string;
}
