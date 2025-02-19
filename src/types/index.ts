

export interface Author {
    id: string; 
    name: string; 
    email: string;
}

export interface Blog {
    _id: string; 
    title: string; 
    content: string; 
    author: Author;
}


export interface IMessage {
    id: string
    name: string;
    email: string;
    message: string;
}


export type DraftMessage = Pick<IMessage, "name" | "email" | "message">;