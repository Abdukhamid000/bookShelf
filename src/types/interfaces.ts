export interface UserInterface {
  name: string | undefined;
  email: string | undefined;
  key: string | undefined;
  secret: string | undefined;
}

export interface dataInterface {
  id: number;
  name: string;
  email: string;
  key: string;
  secret: string;
}

export interface ResponseInterface {
  data: dataInterface;
  isOk: boolean;
  massage: string;
}

export interface Book {
  author: string;
  cover: string;
  id: number;
  isbn: string;
  pages: number;
  published: number;
  title: string;
}

export interface Datum {
  book: Book;
  status: number;
}

export interface RootObject {
  data: Datum[];
  isOk: boolean;
  message: string;
}