

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