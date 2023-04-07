export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  cart: Cart["_id"];
  role: ROLE;
}

export enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
  PREMIUM = "PREMIUM",
}

export interface Cart {
  _id: string;
  products: Products;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  code: string;
  price: number;
  status: boolean;
  stock: number;
  category: string;
  thumbnails: string[];
  owner: ROLE | User["_id"];
}

export interface Products {
  product: Product["_id"];
  quantity: number;
}