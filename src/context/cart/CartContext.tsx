import { CartContextProps, Product } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { createContext } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const CartContext = createContext<CartContextProps | {}>({});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const userCartId = session?.user?.cart;

  //TODO logica para que cuando inicio sesion me traiga los datos del carrito de la DB
  const getCartList = async () => {
    const response = await BrowserRest.get(`/carts/${userCartId}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });

    return response.data.payload;
  };

  const addToCart = async (pid: Product["_id"]) => {
    const response = await BrowserRest.post(
      `/carts/${userCartId}/product/${pid}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    if (response.status === 200) {
      router.push(`/carts/${userCartId}`);
    }

    return response.data;
  };

  const deleteItem = async (pid: Product["_id"]) => {
    const response = await BrowserRest.delete(
      `/carts/${userCartId}/product/${pid}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    console.log(response.data);

    return response.data;
  };

  const purchaseCart = async () => {
    const response = await BrowserRest.post(
      `/carts/${userCartId}/purchase`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    return response.data;
  };

  const data = {
    getCartList,
    addToCart,
    deleteItem,
    purchaseCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
