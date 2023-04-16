import { Cart, CartContextProps, Product } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { createContext } from "react";
import { useRouter } from "next/router";

export const CartContext = createContext<CartContextProps | {}>({});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const getCartList = async (cid: Cart["_id"]) => {
    const response = await BrowserRest.get<Cart["products"][]>(`/carts/${cid}`);

    return response.data;
  };

  const addToCart = async (cid: Cart["_id"], pid: Product["_id"]) => {
    const response = await BrowserRest.post(`/carts/${cid}/product/${pid}`);

    if (response.status === 200) {
      router.push("/cart");
    }

    return response.data;
  };

  const deleteItem = async (cid: Cart["_id"], pid: Product["_id"]) => {
    const response = await BrowserRest.delete(`/carts/${cid}/product/${pid}`);

    return response.data;
  };

  const data = {
    getCartList,
    addToCart,
    deleteItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
