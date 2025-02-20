

export interface Author {
    id: string;
    name: string;
    email: string;
}


export interface TProject {
    _id: string;
    title: string;
    descriptions: string;
    liveLink: string;
    image: string;
    githubClient: string;
    githubServer: string;
    createdAt: string;
    updatedAt: string;
}

export interface Blog {
    _id: string;
    title: string;
    content: string;
    author: Author;
    image: string
    category: string;
    createdAt: string;
    updatedAt: string
}


export interface IMessage {
    id: string
    name: string;
    email: string;
    message: string;
}


export type DraftMessage = Pick<IMessage, "name" | "email" | "message">;