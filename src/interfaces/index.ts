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
  thumbnail: string[];
  owner: ROLE | User["_id"];
}

export interface Products {
  product: Product["_id"];
  quantity: number;
}

export interface CartContextProps {
  getCartList: (cid: Cart["_id"]) => Cart["products"][];
  addToCart: (cid: Cart["_id"], pid: Product["_id"]) => void;
  deleteItem: (cid: Cart["_id"], pid: Product["_id"]) => void;
}
