import { type } from "os";

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
  products: Products[];
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
  thumbnail: string[];
  owner: ROLE | User["_id"];
}

export interface Products {
  product: Product;
  quantity: number;
}

export interface CartContextProps {
  getCartList: () => Cart["products"];
  addToCart: (pid: Product["_id"]) => void;
  deleteItem: (pid: Product["_id"]) => void;
  purchaseCart: () => void;
}

export type RestoreInputTypes = {
  email: User["email"];
}
